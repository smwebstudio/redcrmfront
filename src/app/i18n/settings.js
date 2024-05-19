export const fallbackLng = 'am'
export const languages = [fallbackLng, 'ru', 'en']
export const defaultNS = 'common'
export const cookieName = 'language'

export function getOptions(lng = fallbackLng, ns = defaultNS) {
    return {
        // debug: true,
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns,
    }
}
