// @ts-check

/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'hy', 'ru'],
    },
    reloadOnPrerender: true,
    fallbackLng: {
        default: ['en'],
    },
}

