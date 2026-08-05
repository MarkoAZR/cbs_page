import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
    const pathParts = url.pathname.split('/');
    // With base '/cbs_page', pathname looks like /cbs_page/en/... or /cbs_page/...
    // Find 'en' in the path parts
    if (pathParts.includes('en')) return 'en';
    return defaultLang;
}

export function useTranslations(lang: Lang) {
    return function t(key: keyof typeof ui[typeof defaultLang]): string {
        return ui[lang]?.[key] || ui[defaultLang][key];
    }
}

export function getLocalePath(lang: Lang, path: string = ''): string {
    const rawBase = import.meta.env.BASE_URL;
    const base = rawBase.replace(/\/$/, '');
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    if (lang === defaultLang) {
        return cleanPath ? `${base}/${cleanPath}` : `${base}/` || '/';
    }
    return cleanPath ? `${base}/${lang}/${cleanPath}` : `${base}/${lang}`;
}

/**
 * Given the current URL, return the equivalent path in the target language.
 */
export function getAlternateLocalePath(currentUrl: URL, targetLang: Lang): string {
    const rawBase = import.meta.env.BASE_URL;
    const base = rawBase.replace(/\/$/, '');
    let pathname = currentUrl.pathname;

    // Remove base prefix if not '/'
    if (rawBase !== '/' && pathname.startsWith(rawBase)) {
        pathname = pathname.slice(rawBase.length);
    }

    // Remove current lang prefix if present
    const langPrefixes = Object.keys(ui) as Lang[];
    for (const lang of langPrefixes) {
        if (lang === defaultLang) continue;
        if (pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`) {
            pathname = pathname.slice(`/${lang}`.length) || '/';
            break;
        }
    }

    // Ensure leading slash on pathname
    const formattedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;

    // Build new path with target lang
    if (targetLang === defaultLang) {
        return `${base}${formattedPath}`;
    }
    return `${base}/${targetLang}${formattedPath === '/' ? '' : formattedPath}`;
}
