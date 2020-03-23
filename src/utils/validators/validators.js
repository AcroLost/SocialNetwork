
export const required = (value) => {
    if (value) {
        return undefined
    }
    return 'Required field'
}

export const maxLength = (max) => (value) => {

    if (value && value.length > max) {
        return `Must be ${max} characters or less`
    }
    return undefined
}