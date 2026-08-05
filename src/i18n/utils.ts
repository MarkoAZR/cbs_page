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
    const base = import.meta.env.BASE_URL;
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    if (lang === defaultLang) {
        return cleanPath ? `${base}/${cleanPath}` : `${base}/`;
    }
    return cleanPath ? `${base}/${lang}/${cleanPath}` : `${base}/${lang}`;
}

/**
 * Given the current URL, return the equivalent path in the target language.
 */
export function getAlternateLocalePath(currentUrl: URL, targetLang: Lang): string {
    const base = import.meta.env.BASE_URL;
    let pathname = currentUrl.pathname;

    // Remove base prefix
    if (pathname.startsWith(base)) {
        pathname = pathname.slice(base.length);
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

    // Build new path with target lang
    if (targetLang === defaultLang) {
        return `${base}${pathname}`;
    }
    return `${base}/${targetLang}${pathname === '/' ? '' : pathname}`;
}
