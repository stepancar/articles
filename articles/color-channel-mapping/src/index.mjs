import { PalettesSelector } from './utils.mjs';



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
                ${palettes.map(palette => `
                    <li class="theme-item" data-theme='${JSON.stringify(palette.colors)}'>
                        <span>${palette.name}</span>
                        <div class="colors">
                            ${palette.colors.map(color => `
                                <div class="color-box" style="background-color: ${this.colorToHex(color)}"></div>
                            `).join('')}
                        </div>
                    </li>
                `).join('')}
            </ul>
        `;

        this.themeItems = this.shadowRoot.querySelectorAll('.theme-item');
        this.themeItems.forEach(item => {
            item.addEventListener('click', this.onThemeSelect.bind(this));
        });
    }

    // Convert integer color to hex format
    colorToHex(color) {
        return `#${color.toString(16).padStart(6, '0')}`;
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
    { name: "original", colors: [16711680, 65280, 255] },
    { name: "lumen5", colors: [5785334, 2369583, 10463935] },
    { name: "google", colors: [4359668, 16497669, 3450963] },
    { name: "facebook", colors: [1603570, 16777215, 15790837] },
    { name: "amazon", colors: [16750848, 16777215, 0] },
    { name: "netflix", colors: [2236191, 16777215, 15010068] }
];

const themeSelector = document.querySelector('theme-selector');
themeSelector.setAttribute('palettes', JSON.stringify(palettes));

themeSelector.addEventListener('themeChange', (e) => {
    console.log('Theme selected:', e.detail.theme);
});

const paleteSelector = new PalettesSelector(themeSelector);

paleteSelector.addEventListener('change', () => {
    document.querySelectorAll('iframe').forEach((iframe) => {
        iframe.contentWindow.postMessage({
            type: 'changeTheme',
            value: paleteSelector.value
        }, '*');
    });
});
