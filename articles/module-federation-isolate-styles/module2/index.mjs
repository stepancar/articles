


class App2 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="module2/index.css">
            <div>
                <h1>
                    I'm h1 defined on module 2 level
                    my styles are not affected by root styles
                </h1>
                <span class="title">I'm a custom span of module 2</span>
            </div>
        `;
    }
}

customElements.define('app-2', App2);

function mountApp(node) {
    const app = document.createElement('app-2');
    node.appendChild(app);

    return () => {
        node.removeChild(app);
    }
}

export default mountApp;