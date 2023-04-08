function getCookie(name) {
    let matches = document.cookie.match(
        new RegExp(
            '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
        )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
function setCookie(name, value) {
    let date = new Date(Date.now() + 86400e3);
    date = date.toUTCString();

    options = {
        path: '/',
        date
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += '; ' + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += '=' + optionValue;
        }
    }

    document.cookie = updatedCookie;
}
function deleteCookie(name) {
    setCookie(name, '', {
        'max-age': -1
    });
}