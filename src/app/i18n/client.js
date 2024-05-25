'use client'

import { useEffect, useState } from 'react'
import i18next from 'i18next'
import {
    initReactI18next,
    useTranslation as useTranslationOrg,
} from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { cookieName, getOptions, languages } from './settings'
import LanguageDetector from 'i18next-browser-languagedetector'
import Cookies from 'js-cookie'

const runsOnServerSide = typeof window === 'undefined'

//
i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(
        resourcesToBackend((language, namespace) =>
            import(`./locales/${language}/${namespace}.json`),
        ),
    )
    .init({
        ...getOptions(),
        lng: undefined,
        detection: {
            order: ['cookie', 'path', 'htmlTag', 'navigator'],
        },
        preload: runsOnServerSide ? languages : [],
    })

export function useTranslation(lng, ns, options) {
    // const [cookies, setCookie] = useCookies([cookieName])
    const ret = useTranslationOrg(ns, options)
    const { i18n } = ret
    if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
        i18n.changeLanguage(lng)
    } else {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            if (activeLng === i18n.resolvedLanguage) return
            setActiveLng(i18n.resolvedLanguage)
        }, [activeLng, i18n.resolvedLanguage])
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            if (!lng || i18n.resolvedLanguage === lng) return
            i18n.changeLanguage(lng)
        }, [lng, i18n])

        let cookieLng = Cookies.get('i18next')
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            if (Cookies.get('i18next') === lng) {
                return
            }
            Cookies.set(cookieName, lng, { path: '/' })
        }, [lng, cookieLng])
    }
    return ret
}
