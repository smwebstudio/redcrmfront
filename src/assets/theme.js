const primaryRed = '#D8002C'
const primaryWhite = '#FFFFFF'

const redTheme = {
    token: {
        fontSize: 16,
        colorPrimary: primaryRed,
        borderRadius: 0,
        colorLink: primaryRed,
        controlHeight: 40,
        colorPrimaryBorder: '#4d8200',
    },
    components: {
        Input: {
            hoverBorderColor: primaryRed,
        },
        Button: {
            contentFontSize: 13,
            fontSize: 13,
            paddingBlock: 0,
            paddingInline: 24,
            paddingInlineLG: 48,
        },
        Tabs: {
            cardBg: 'rgba(33, 33, 32, 0.6)',
            cardGutter: 0,
            cardHeight: 40,
            cardPadding: '12px 28px',
            horizontalItemPadding: 48,
            lineWidth: 0,
            horizontalMargin: 0,
            horizontalItemMargin: '0px 24px',

            verticalItemMargin: '0 24px 0 0 ',
            colorBgContainer: primaryWhite,
            itemHoverColor: primaryWhite,
            itemActiveColor: primaryRed,
            itemColor: '#fff',
            colorPrimaryBorder: '#4d8200',
        },
        Select: {
            optionFontSize: 14,
        },
        Radio: {
            radioSize: 8,
            buttonPaddingInline: 8,
        },
        Form: {
            labelHeight: 14,
            labelColor: '#959595',
        },
    },
}

export default redTheme
