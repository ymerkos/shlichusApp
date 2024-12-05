//B"H
var base = "https://awtsmoos.42web.io/";
async function getSession() {
    return await (
        await fetch(
            base, {
                method: "POST",
                body: new URLSearchParams({
                    action: "session"
                })
            }
        )
    ).json()
}

(async () => {
    var sesh = await getSession();
    if(sesh.error == "Not logged in") {
        location.href = "./sign-in.html"
    } else if(sesh.success) {
        location.href = "./settings.html"
    }
    console.log(
        "B\"H",
        "\n\n",
        sesh
        
    )
})();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/app/sw.js')
    .then((registration) => {
      console.log('Service Worker registered:', registration);
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
}

// Request Notification Permission
if ('Notification' in window) {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notifications enabled!');
    }
  });
}

