export function rgbArrayToHex(rgbArray) {
    return (rgbArray[0] << 16) + (rgbArray[1] << 8) + rgbArray[2]
}

export function hexToRgb(color) {
    const red = (color >> 16) & 0xFF;
    const green = (color >> 8) & 0xFF;
    const blue = color & 0xFF;
    return [red, green, blue]
}

export function hexToVector3(hex) {
    return hexToRgb(hex).map(v => v / 255);
}

export function drawCircle(ctx, x, y, r, color) {
    ctx.beginPath();
    ctx.fillStyle = color
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
}

export function getCssHexColor(color) {
    return '#' + color.toString('16').padStart(6, '0');
}


export class LutSelector extends HTMLElement {
    _presets = [
        { name: "original", type: "preset" },
        { name: "moody", type: "preset", url: "LUT/Moody-1.cube" },
        { name: "cinematic", type: "preset", url: "LUT/Cinematic-1.cube" },
        { name: "vintage", type: "preset", url: "LUT/VintageChrome-1.cube" },
    ];

    _selectedIndex = 1;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.handleFileInput = this.handleFileInput.bind(this);

        this.isIframe = window.self !== window.top;

        if (this.isIframe) {
            window.addEventListener('message', (event) => {
                if (event.data.type === 'changeLut') {
                    const preset = event.data.value;
                    const selectedPreset = this.presets.find(p => p.name === preset.name);
                    if (selectedPreset) {
                        this.dispatchEvent(new CustomEvent('change', {
                            value: selectedPreset
                        }));
                    }
                }
            });
        }

        this.onPresetSelect = this.onPresetSelect.bind(this);
    }

    connectedCallback() {
        this.render();
        // Trigger initial change event with default preset
        this.dispatchEvent(new CustomEvent('change', {
            value: this.presets[1]
        }));
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: ${this.isIframe ? 'none' : 'block'};
                }
                .preset-list {
                    display: flex;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    overflow-x: auto;
                    white-space: nowrap;
                }
                .preset-item {
                    margin: 0 10px;
                    cursor: pointer;
                    padding: 5px;
                }
                .preset-item.selected {
                    border: 2px solid black;
                }
                .file-input {
                    margin: 10px;
                }
                .hidden {
                    display: none;
                }
            </style>
            <ul class="preset-list ${this.isIframe ? 'hidden' : ''}">
                ${this.presets.map((preset, index) => `
                    <li class="preset-item ${index === this._selectedIndex ? 'selected': ''}">
                        ${preset.name}
                    </li>
                `).join('')}
            </ul>
            <div class="file-input">
                <input type="file" accept=".cube,.3dl" id="lutFile">
            </div>
        `;

        this.presetItems = this.shadowRoot.querySelectorAll('.preset-item');
        this.presetItems.forEach(item => {
            item.addEventListener('click', this.onPresetSelect.bind(this));
        });

        const fileInput = this.shadowRoot.querySelector('#lutFile');
        fileInput.addEventListener('change', this.handleFileInput);
    }

    handleFileInput(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const newPreset = {
                    name: file.name,
                    type: 'custom',
                    path: e.target.result,
                    url: URL.createObjectURL(file),
                };
                this.presets.push(newPreset);
                this.render();
            };
            reader.readAsDataURL(file);
        }
    }

    set presets(value) {
        this._presets = value;
        this.render();
    }

    get presets() {
        return this._presets;
    }

    onPresetSelect(event) {
       const index = [...this.presetItems].indexOf(event.currentTarget);
        
       this.selectedIndex = index;
    }

    get selectedIndex() {
        return this._selectedIndex;
    }

    set selectedIndex(value) {
        this._selectedIndex = value;
        this.render()
        this.dispatchEvent(new CustomEvent('change'));
    }

    get value() {
        return this.presets[this.selectedIndex];
    }
}

customElements.define('lut-selector', LutSelector);