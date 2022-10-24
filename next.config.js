const nextTranslate = require('next-translate')

module.exports = nextTranslate({
    env: {
        NEXT_PUBLIC_BACKEND_URL: 'http://localhost:8000',
        PUBLIC_URL: 'http://localhost:3000'
    },
})
