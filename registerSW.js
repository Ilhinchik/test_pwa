if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/test_pwa/sw.js', { scope: '/test_pwa/' })})}