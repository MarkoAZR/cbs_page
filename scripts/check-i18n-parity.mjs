import fs from 'node:fs';
import path from 'node:path';

const uiPath = path.resolve('src/i18n/ui.ts');
const uiContent = fs.readFileSync(uiPath, 'utf8');

// Split ui.ts into es and en blocks
const esStart = uiContent.indexOf('es: {');
const enStart = uiContent.indexOf('en: {', esStart);
if (esStart === -1 || enStart === -1) {
	console.error('Could not locate es/en blocks in src/i18n/ui.ts');
	process.exit(1);
}

const esBlock = uiContent.slice(esStart, enStart);
const enBlock = uiContent.slice(enStart);

function extractKeys(block) {
	const set = new Set();
	const regex = /^\s*'([^']+)':/gm;
	let match;
	while ((match = regex.exec(block)) !== null) {
		set.add(match[1]);
	}
	return set;
}

const esKeys = extractKeys(esBlock);
const enKeys = extractKeys(enBlock);

const missingInEn = [...esKeys].filter((k) => !enKeys.has(k));
const missingInEs = [...enKeys].filter((k) => !esKeys.has(k));

function walk(dir) {
	let files = [];
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			files = files.concat(walk(full));
		} else if (entry.name.endsWith('.astro') || entry.name.endsWith('.ts')) {
			files.push(full);
		}
	}
	return files;
}

const usedKeys = new Set();
for (const file of walk(path.resolve('src'))) {
	if (file === uiPath) continue;
	const content = fs.readFileSync(file, 'utf8');
	let m;
	const tRegex = /\bt\(\s*['"]([^'"]+)['"]\s*\)/g;
	while ((m = tRegex.exec(content)) !== null) {
		usedKeys.add(m[1]);
	}
	const propKeyRegex = /\b\w*Key:\s*['"]([^'"]+)['"]/g;
	while ((m = propKeyRegex.exec(content)) !== null) {
		usedKeys.add(m[1]);
	}
}

const missingUsedInEs = [...usedKeys].filter((k) => !esKeys.has(k));
const missingUsedInEn = [...usedKeys].filter((k) => !enKeys.has(k));

console.log(`Total ES keys: ${esKeys.size} | Total EN keys: ${enKeys.size} | Referenced static keys: ${usedKeys.size}`);

let hasError = false;
if (missingInEn.length > 0) {
	hasError = true;
	console.error(`Keys in ES missing in EN (${missingInEn.length}):`, missingInEn);
}
if (missingInEs.length > 0) {
	hasError = true;
	console.error(`Keys in EN missing in ES (${missingInEs.length}):`, missingInEs);
}
if (missingUsedInEs.length > 0) {
	hasError = true;
	console.error(`Referenced keys missing in ES (${missingUsedInEs.length}):`, missingUsedInEs);
}
if (missingUsedInEn.length > 0) {
	hasError = true;
	console.error(`Referenced keys missing in EN (${missingUsedInEn.length}):`, missingUsedInEn);
}

if (hasError) {
	process.exit(1);
} else {
	console.log('✓ 100% i18n parity verified between ES and EN, and all referenced keys exist.');
}

