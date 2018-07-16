export class ImageUploaderComponent {
    private htmlElement;
    private inputUpload;
    constructor(elementQuery: string, labelTxt: string, btnTxt: string) {
        this.htmlElement = document.querySelector(elementQuery);
        if (this.htmlElement) {
            this.htmlElement.innerHTML = null;
            this.createElement(labelTxt, btnTxt);
        }
    }

    private createElement(labelText: string, buttonText: string) {
        const innerHTML = `
        <form class="upload-form">
           <label class="upload-label">${labelText}</label>
           <input class="upload-button" type="button" value="${buttonText}">
           <input class="upload-input" type="file" accept="image/x-png,image/jpeg" style="display:none">
           <span class="upload-text"><span>
        </form>`;
        this.htmlElement.innerHTML = innerHTML;
        this.inputUpload = this.htmlElement.querySelector('.upload-input');
        const btn = this.htmlElement.querySelector('.upload-button');
        btn.addEventListener('click', () => {
            console.log('button clicked');
            this.inputUpload.click();
        });
        console.log(this.htmlElement);
        console.log(this.inputUpload);
    }
}
