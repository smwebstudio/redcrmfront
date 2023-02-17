import { useRouter } from 'next/router';
import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Select } from "antd";
import AmOption from "@/components/Global/Languages/am-option";
import EnOption from "@/components/Global/Languages/en-option";
import RuOption from "@/components/Global/Languages/ru-option";



const LanguageSwitcher  = ({ onChange }) => {
    const { i18n } = useTranslation();
    const { language: currentLanguage } = i18n;
    const router = useRouter();
    const locales = router.locales ?? [currentLanguage];

    const languageNames = useMemo(() => {
        return new Intl.DisplayNames([currentLanguage], {
            type: 'language',
        });
    }, [currentLanguage]);

    const [value, setValue] = useState({
        value: i18n.language,
        label: capitalize(languageNames.of(currentLanguage) ?? currentLanguage),
    });

    const switchToLocale = useCallback(
        (locale) => {
            const path = router.asPath;

            return router.push(path, path, { locale });
        },
        [router]
    );

    const languageChanged = useCallback(
        async (option) => {
            setValue(option);

            const locale = option.value;

            if (onChange) {
                onChange(locale);
            }

            await switchToLocale(locale);
        },
        [switchToLocale, onChange]
    );

    return (

        <Select
            defaultValue="am"
            bordered={false}
            labelInValue={true}
            style={{ width: 100, zIndex: 200 }}
            options={[
                {
                    value: "am",
                    label: <AmOption />
                },
                {
                    value: "en",
                    label: <EnOption />
                },
                {
                    value: "ru",
                    label: <RuOption />
                }
            ]}
        />
    );
};

function capitalize(lang) {
    return lang.slice(0, 1).toUpperCase() + lang.slice(1);
}

export default LanguageSwitcher;
