class App1 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="module1/index.css">
            <div>
                <h1>
                    I'm h1 defined on module 1 level
                    my styles are not affected by root styles
                </h1>
                <span class="title">I'm a custom span of module 1</span>
            </div>
        `;
    }
}

customElements.define('app-1', App1);

function mountApp(node) {
    const app = document.createElement('app-1');
    node.appendChild(app);

    return () => {
        node.removeChild(app);
    }
}

export default mountApp;