(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImageUploader_component_1 = require("./components/ImageUploader.component");
console.log('app start');
var imageUploader = new ImageUploader_component_1.ImageUploaderComponent('.image-uploader', 'Załaduj obraz z pliku', 'Wybierz plik');
},{"./components/ImageUploader.component":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImageUploaderComponent = /** @class */ (function () {
    function ImageUploaderComponent(elementQuery, labelTxt, btnTxt) {
        this.htmlElement = document.querySelector(elementQuery);
        if (this.htmlElement) {
            this.htmlElement.innerHTML = null;
            this.createElement(labelTxt, btnTxt);
        }
    }
    ImageUploaderComponent.prototype.createElement = function (labelText, buttonText) {
        var _this = this;
        var innerHTML = "\n        <form class=\"upload-form\">\n           <label class=\"upload-label\">" + labelText + "</label>\n           <input class=\"upload-button\" type=\"button\" value=\"" + buttonText + "\">\n           <input class=\"upload-input\" type=\"file\" accept=\"image/x-png,image/jpeg\" style=\"display:none\">\n           <span class=\"upload-text\"><span>\n        </form>";
        this.htmlElement.innerHTML = innerHTML;
        this.inputUpload = this.htmlElement.querySelector('.upload-input');
        var btn = this.htmlElement.querySelector('.upload-button');
        btn.addEventListener('click', function () {
            console.log('button clicked');
            _this.inputUpload.click();
        });
        console.log(this.htmlElement);
        console.log(this.inputUpload);
    };
    return ImageUploaderComponent;
}());
exports.ImageUploaderComponent = ImageUploaderComponent;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvYXBwLnRzIiwic3JjL3RzL2NvbXBvbmVudHMvSW1hZ2VVcGxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLGdGQUE4RTtBQUM5RSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pCLElBQU0sYUFBYSxHQUFHLElBQUksZ0RBQXNCLENBQUMsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsY0FBYyxDQUFDLENBQUM7Ozs7QUNGN0c7SUFHSSxnQ0FBWSxZQUFvQixFQUFFLFFBQWdCLEVBQUUsTUFBYztRQUM5RCxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN4QztJQUNMLENBQUM7SUFFTyw4Q0FBYSxHQUFyQixVQUFzQixTQUFpQixFQUFFLFVBQWtCO1FBQTNELGlCQWlCQztRQWhCRyxJQUFNLFNBQVMsR0FBRyxzRkFFZSxTQUFTLG9GQUNhLFVBQVUsMExBR3pELENBQUM7UUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuRSxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdELEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQTdCQSxBQTZCQyxJQUFBO0FBN0JZLHdEQUFzQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7IEltYWdlVXBsb2FkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvSW1hZ2VVcGxvYWRlci5jb21wb25lbnQnO1xuY29uc29sZS5sb2coJ2FwcCBzdGFydCcpO1xuY29uc3QgaW1hZ2VVcGxvYWRlciA9IG5ldyBJbWFnZVVwbG9hZGVyQ29tcG9uZW50KCcuaW1hZ2UtdXBsb2FkZXInLCAnWmHFgmFkdWogb2JyYXogeiBwbGlrdScsICdXeWJpZXJ6IHBsaWsnKTtcbiIsImV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZGVyQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgaHRtbEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGlucHV0VXBsb2FkO1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFF1ZXJ5OiBzdHJpbmcsIGxhYmVsVHh0OiBzdHJpbmcsIGJ0blR4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudFF1ZXJ5KTtcclxuICAgICAgICBpZiAodGhpcy5odG1sRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmlubmVySFRNTCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudChsYWJlbFR4dCwgYnRuVHh0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVFbGVtZW50KGxhYmVsVGV4dDogc3RyaW5nLCBidXR0b25UZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBpbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGZvcm0gY2xhc3M9XCJ1cGxvYWQtZm9ybVwiPlxyXG4gICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInVwbG9hZC1sYWJlbFwiPiR7bGFiZWxUZXh0fTwvbGFiZWw+XHJcbiAgICAgICAgICAgPGlucHV0IGNsYXNzPVwidXBsb2FkLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIiR7YnV0dG9uVGV4dH1cIj5cclxuICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ1cGxvYWQtaW5wdXRcIiB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlL3gtcG5nLGltYWdlL2pwZWdcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPlxyXG4gICAgICAgICAgIDxzcGFuIGNsYXNzPVwidXBsb2FkLXRleHRcIj48c3Bhbj5cclxuICAgICAgICA8L2Zvcm0+YDtcclxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTDtcclxuICAgICAgICB0aGlzLmlucHV0VXBsb2FkID0gdGhpcy5odG1sRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudXBsb2FkLWlucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgYnRuID0gdGhpcy5odG1sRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudXBsb2FkLWJ1dHRvbicpO1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2J1dHRvbiBjbGlja2VkJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRVcGxvYWQuY2xpY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmh0bWxFbGVtZW50KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlucHV0VXBsb2FkKTtcclxuICAgIH1cclxufVxyXG4iXX0=
