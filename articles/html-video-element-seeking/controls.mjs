import { range } from './utils.mjs';
class VideoSourceSelector extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.#render();

        this.shadowRoot.querySelector('#urlInput').addEventListener('input', (e) => {
            this.#value = e.target.value;
        });

        this.#value = this.shadowRoot.querySelector('#urlInput').value;

        this.shadowRoot.querySelector('#fileInput').addEventListener('change', (e) => {
            this.#value = URL.createObjectURL(e.target.files[0]);
        });

        this.shadowRoot.querySelector('#remove').addEventListener('click', () => {
            this.remove();
        });
    }

    #value = null;

    #defaultValue = this.getAttribute('value') || '';

    get value() {
        return this.#value;
    }

    #render() {
        this.shadowRoot.innerHTML = `
            <style>
                .source {
                    display: flex;
                    flex-direction: column;
                }

                .source #radioUrl:checked ~ #urlInput {
                    display: block;
                }

                .source #urlInput, #fileInput {
                    display: none;
                }

                .source #radioFile:checked ~ #fileInput {
                    display: block;
                }

                .source input[type="url"] {
                    width: 100%;
                }

                .source .option {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                }
            </style>
            <div class="source">
                <div>
                <div class="option">
                    <input type="radio" id="radioUrl" checked name="radio">
                    <label for="radioUrl">From url</label>
                    <input id="urlInput" type="url" value=${this.#defaultValue}>
                </div>
                <div class="option">
                    <input type="radio" id="radioFile" name="radio">
                    <label for="radioFile">From file</label>
                    <input id="fileInput" type="file">
                </div>
                </div>
                <button id="remove">Remove</button>
            </div>
            
        `;
    }
}




class TimestempsSelector extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.#render();
        const generateTimeStamps = () => {
            const startTime = Number(this.shadowRoot.querySelector('input[name="startTime"]').value);
            const endTime = Number(this.shadowRoot.querySelector('input[name="endTime"]').value);
            const fps = Number(this.shadowRoot.querySelector('input[name="fps"]').value);
            const timestamps = range(startTime, endTime, 1 / fps);
            this.shadowRoot.querySelector('textarea').value = JSON.stringify(timestamps);
        }
        this.shadowRoot.querySelector('button').addEventListener('click', () => generateTimeStamps());
        generateTimeStamps();
    }

    get value() {
        const timeStamps = JSON.parse(this.shadowRoot.querySelector('textarea').value);
        return timeStamps;
    }

    #render() {
        this.shadowRoot.innerHTML = `
            <style>
                .timestamps {
                    display: flex;
                    flex-direction: column;
                }

                .timestamps input {
                    width: 100%;
                }

                .timestamps button {
                    width: 100%;
                }

                textarea {
                    min-width: 100%;
                }
            </style>
            <div>
                <div id="generateTimeStamps">
                    <button >Generate timestamps for range</button>
                    <label for="startTime">StartTime</label>
                    <input name="startTime" type="number" value="0">
                    <label for="endTime">EndTime</label>
                    <input name="endTime" type="number" value="10">
                    <label for="fps">FPS</label>
                    <input name="fps" id="fps" type="number" value="30">
                </div>
                <textarea text="">[0, 5]</textarea>
            </div>
        `;
    }
}


export function activateCustomControls() {
    customElements.define('video-source-selector', VideoSourceSelector);
    customElements.define('timestamps-selector', TimestempsSelector);
}
