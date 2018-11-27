export class CanvasOptionsComponent {
    private htmlElement;

    constructor() {
        console.log('canvas options');
    }

    private createHTMLElement() {
        const backgroundColorClass = '';
        const widthSliderClass = '';
        const heightSliderClass = '';
        const title = 'Canvas options';
        const backgroundColorLabel = 'background-color';
        const widthLabel = 'width';
        const heightLabel = 'height';
        const innerHTML = `
                <h2>${title}</h2>
                <label>${backgroundColorLabel}</label>
                <div class="${backgroundColorClass}"></div>
                <label>${widthLabel}</label>
                <div class="${widthSliderClass}"></div>
                <label>${heightLabel}</label>
                <div class="${heightSliderClass}"></div>`.trim();
    }

}
