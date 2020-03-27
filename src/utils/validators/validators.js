
export const required = (value) => {
    if (value) {
        return undefined
    }
    return 'Пустое поле'
}

export const maxLength = (max) => (value) => {

    if (value && value.length > max) {
        return `Максимально ${max} символов`
    }
    return undefined
}