const getToken = () => {
    let token = "";
    const cookieValues = document.cookie.split(';');
    const keyValueToken = cookieValues.find((value, index) => {
        const values = value.trim().split('=');
        if (values[0] === 'token') {
            return value;
        }
    })
    if (keyValueToken) {
        token = keyValueToken.split('=')[1];
    }
    return token;
}

export {
    getToken
}