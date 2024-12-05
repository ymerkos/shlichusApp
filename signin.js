//B"H

console.log(
    "B\"H",
    "\nMade by Yackov Yitzchak Kaufer",
    "\nAwtsmoos.com"
);
var baseURL = "https://awtsmoos.whf.bz";

// Define the functions based on the user's provided code
async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data),
    });
    return response.json();
}

async function signup(email, password, shliach) {
    return await postData(baseURL, { action: 'signup', email, password, shliach});
}

async function session() {
    return await postData(baseURL, { action: 'session' });
}

async function login(email, password) {
    return await postData(baseURL, { action: 'login', email, password });
}

async function accountInfo() {
    return await postData(baseURL, { action: 'account_info' });
}


async function logout() {
    return await postData(baseURL, { action: 'logout' });
}
