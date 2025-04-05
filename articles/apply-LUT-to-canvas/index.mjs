import { CubeSelector } from './utils.mjs';


const iframes = document.querySelectorAll('iframe');

iframes.forEach(iframe => {
    function resizeIframe() {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 20+ 'px';
    }

    iframe.onload = () => {
        resizeIframe(); // Initial resize after content load
    };

    setTimeout(() => {
        resizeIframe();
    }, 1000);
});


class ThemeSelector extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    // Observe the 'palettes' attribute
    static get observedAttributes() {
        return ['palettes'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'palettes') {
            this.render();
            const palettes = JSON.parse(this.getAttribute('palettes') || '[]');
            this.dispatchEvent(new CustomEvent('change', {
                value: {
                    theme: palettes[1].colors
                }
            }));
        }
    }

    // Method to render the list of palettes
    render() {
        const palettes = JSON.parse(this.getAttribute('palettes') || '[]');

        this.shadowRoot.innerHTML = `
            <style>
                .theme-list {
                    display: flex;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    overflow-x: auto;
                    white-space: nowrap;
                }

                .colors {
                    display: flex;
                    flex-direction: row;
                }

                .theme-item {
                    margin: 0 10px;
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    box-sizing: border-box;
                }

                .theme-item.selected {
                    border: 2px solid black;
                }

                .color-box {
                    width: 32px;
                    height: 32px;
                    margin: 2px 0;
                }
            </style>
            <ul class="theme-list">
                ${palettes.map((palette, index )=> `
                    <li class="theme-item ${index=== 1 ? 'selected': ''}" data-theme='${JSON.stringify(palette.colors)}' >
                        <span>${palette.name}</span>
                    </li>
                `).join('')}
            </ul>
        `;

        this.themeItems = this.shadowRoot.querySelectorAll('.theme-item');
        this.themeItems.forEach(item => {
            item.addEventListener('click', this.onThemeSelect.bind(this));
        });
    }

    // Handle theme selection
    onThemeSelect(event) {
        const selectedTheme = event.currentTarget.getAttribute('data-theme');

        this.themeItems.forEach(item => item.classList.remove('selected'));
        event.currentTarget.classList.add('selected');

        const themeColors = JSON.parse(selectedTheme);
        this.dispatchEvent(new CustomEvent('change', {
            value: {
                theme: themeColors
            }
        }));
    }

    get value() {
        return [...this.themeItems].find(item => item.classList.contains('selected')).getAttribute('data-theme');
    }
}

customElements.define('theme-selector', ThemeSelector);


const palettes = [
    { name: "original" },
    { name: "moody" },
    { name: "cinematic" },
    { name: "vintage chrome" },
];
const themeSelector = document.querySelector('theme-selector');
const paleteSelector = new CubeSelector(themeSelector);

paleteSelector.addEventListener('change', () => {
    document.querySelectorAll('iframe').forEach((iframe) => {
        iframe.contentWindow.postMessage({
            type: 'changeTheme',
            value: paleteSelector.value
        }, '*');
    });
});

document.querySelectorAll('iframe').forEach((iframe) => {
    iframe.addEventListener('load', () => {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        iframeDoc.body.style.margin = '0';
    });
});

setTimeout(() => {
    themeSelector.setAttribute('palettes', JSON.stringify(palettes));
}, 1000);
