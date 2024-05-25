export function objectToQueryParams(obj) {
    return Object.keys(obj)
        .map(key => {
            const trimmedKey = encodeURIComponent(key.replace(/\s+/g, ''))
            const trimmedValue =
                obj[key] !== undefined
                    ? encodeURIComponent(String(obj[key]).replace(/\s+/g, ''))
                    : undefined
            return trimmedValue !== undefined
                ? trimmedKey + '=' + trimmedValue
                : ''
        })
        .filter(param => param !== '') // Filter out empty parameters
        .join('&')
}
