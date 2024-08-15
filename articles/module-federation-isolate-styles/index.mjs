
let unmountCurrentApp = null;

async function loadApp(moduleName) {
    const root = document.getElementById('root');
    const { default: mountApp } = await import(`./${moduleName}/index.mjs`);
    unmountCurrentApp && unmountCurrentApp();
    unmountCurrentApp = mountApp(root);
}

// listen location change
window.addEventListener('popstate', (e) => {
    const location = window.location;
    const hash = location.hash.replace('#', '');

    loadApp(hash);
});


loadApp('module1');