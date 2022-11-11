const nextTranslate = require('next-translate')

module.exports = nextTranslate({
    env: {
        NEXT_PUBLIC_BACKEND_URL: 'http://redoc/',
        PUBLIC_URL: 'http://localhost:3000'
    },
})
