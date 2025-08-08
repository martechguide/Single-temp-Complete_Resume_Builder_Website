// Clear Executive Style Template Data and Cache
console.log('Clearing Executive Style template data...');

// Clear all Executive Style related localStorage items
const keysToRemove = [
    'executive_resume_data',
    'executive_resume_data_v2',
    'executive_template_data',
    'professional_template_data',
    'executive_style_data',
    'executive_cache',
    'executive_settings'
];

keysToRemove.forEach(key => {
    if (localStorage.getItem(key)) {
        localStorage.removeItem(key);
        console.log(`Removed: ${key}`);
    }
});

// Clear sessionStorage
keysToRemove.forEach(key => {
    if (sessionStorage.getItem(key)) {
        sessionStorage.removeItem(key);
        console.log(`Removed from session: ${key}`);
    }
});

// Clear any IndexedDB data related to Executive Style
if ('indexedDB' in window) {
    const deleteReq = indexedDB.deleteDatabase('executive_resume_db');
    deleteReq.onsuccess = () => console.log('Executive IndexedDB cleared');
}

// Clear service worker cache if present
if ('serviceWorker' in navigator && 'caches' in window) {
    caches.keys().then(cacheNames => {
        cacheNames.forEach(cacheName => {
            if (cacheName.includes('executive') || cacheName.includes('professional-template')) {
                caches.delete(cacheName);
                console.log(`Cleared cache: ${cacheName}`);
            }
        });
    });
}

console.log('Executive Style template data cleared completely!');