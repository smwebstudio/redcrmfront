import { NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { cookieName, fallbackLng, languages } from './app/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
    // matcher: '/:lng*'
    matcher: [
        '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)',
    ],
}

export function middleware(req) {
    let lng
    if (req.cookies.has(cookieName)) {
        lng = acceptLanguage.get(req.cookies.get(cookieName).value)
    }

    if (!lng) lng = fallbackLng
    if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))

    const {
        nextUrl: { search },
    } = req
    const urlSearchParams = new URLSearchParams(search)
    const params = Object.fromEntries(urlSearchParams.entries())

    const urlParams = '?' + new URLSearchParams(params)

    // Redirect if lng in path is not supported
    if (
        !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
        !req.nextUrl.pathname.startsWith('/_next')
    ) {
        console.log('path not supported')
        return NextResponse.redirect(
            new URL(`/${lng}${req.nextUrl.pathname}${urlParams}`, req.url),
        )
    }

    if (req.headers.has('referer')) {
        const refererUrl = new URL(req.headers.get('referer'))
        const lngInReferer = languages.find(l =>
            refererUrl.pathname.startsWith(`/${l}`),
        )
        const response = NextResponse.next()
        if (lngInReferer) response.cookies.set(cookieName, lngInReferer)

        return response
    }

    return NextResponse.next()
}
