//B"H

window.addEventListener('beforeinstallprompt', (event) => {
    event.prompt();
    console.log("OK")
});

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
