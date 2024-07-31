
export class PalettesSelector {
    constructor(selectElement) {
        this.selectElement = selectElement;
    }
    get value() {
        return JSON.parse(this.selectElement.value);
    }
}