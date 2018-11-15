(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DisplayCanvas_1 = require("./components/DisplayCanvas");
window.addEventListener('load', function () {
    var displayCanvas = new DisplayCanvas_1.DisplayCanvas({ querySelectorString: '.display' });
    displayCanvas.writeText({
        text: 'Something something',
        fillStyle: 'yellow',
        x: 20,
        y: 50,
        fill: true,
        fontWeight: 'normal',
        fontSize: '35px',
        fontStyle: 'normal',
        fontFamily: 'Arial',
    });
    displayCanvas.writeText({
        text: 'Something else',
        fillStyle: 'black',
        x: 40,
        y: 70,
        fill: true,
        fontWeight: 'normal',
        fontSize: '35px',
        fontStyle: 'normal',
        fontFamily: 'Tahoma',
        shadowColor: 'red',
        shadowOffsetY: 3,
        shadowOffsetX: 3,
        shadowBlur: 12,
    });
    displayCanvas.writeText({
        text: 'Text',
        fillStyle: 'red',
        x: 70,
        y: 80,
        fill: false,
        lineWidth: 1,
        fontWeight: 'normal',
        fontSize: '45px',
        fontStyle: 'normal',
        fontFamily: 'Arial',
        shadowColor: 'blue',
        shadowOffsetY: 2,
        shadowOffsetX: 2,
        shadowBlur: 5,
    });
});
// const imageUploader = new ImageUploaderComponent('.image-uploader', 'Załaduj obraz z pliku', 'Wybierz plik');
//
// class MyObserver implements Observer<any> {
//     public next(value: any) {
//         console.log(value);
//     }
//
//     public error(err: any) {
//         console.log('error ocurred' + err);
//     }
//
//     public complete() {
//         console.log('completed');
//     }
// }
//
// imageUploader.subscribe(new MyObserver());
},{"./components/DisplayCanvas":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DisplayCanvas = /** @class */ (function () {
    function DisplayCanvas(properties) {
        this.setElements(properties);
    }
    DisplayCanvas.prototype.writeText = function (text) {
        if (this.context2d) {
            this.context2d.fillStyle = text.fillStyle;
            this.context2d.font = text.fontStyle + " " + text.fontWeight + " " + text.fontSize + " " + text.fontFamily;
            if ((text.shadowColor) && (text.shadowColor !== '')) {
                this.context2d.shadowColor = text.shadowColor;
                this.context2d.shadowBlur = text.shadowBlur;
                this.context2d.shadowCffsetX = text.shadowOffsetX;
                this.context2d.shadowOffsetY = text.shadowOffsetY;
            }
            if (text.fill) {
                this.context2d.fillText(text.text, text.x, text.y);
            }
            else {
                this.context2d.lineWidth = text.lineWidth;
                this.context2d.strokeText(text.text, text.x, text.y);
            }
            console.log(this.context2d.measureText(text.text));
        }
    };
    DisplayCanvas.prototype.setElements = function (properties) {
        this.htmlCanvasElement = document.querySelector(properties.querySelectorString);
        if (this.htmlCanvasElement) {
            this.context2d = this.htmlCanvasElement.getContext('2d');
        }
    };
    return DisplayCanvas;
}());
exports.DisplayCanvas = DisplayCanvas;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvYXBwLnRzIiwic3JjL3RzL2NvbXBvbmVudHMvRGlzcGxheUNhbnZhcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDRUEsNERBQXlEO0FBRXpELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7SUFDNUIsSUFBTSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDLEVBQUMsbUJBQW1CLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztJQUMzRSxhQUFhLENBQUMsU0FBUyxDQUFDO1FBQ3BCLElBQUksRUFBRSxxQkFBcUI7UUFDM0IsU0FBUyxFQUFFLFFBQVE7UUFDbkIsQ0FBQyxFQUFFLEVBQUU7UUFDTCxDQUFDLEVBQUUsRUFBRTtRQUNMLElBQUksRUFBRSxJQUFJO1FBQ1YsVUFBVSxFQUFFLFFBQVE7UUFDcEIsUUFBUSxFQUFFLE1BQU07UUFDaEIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsVUFBVSxFQUFFLE9BQU87S0FDdEIsQ0FBQyxDQUFDO0lBQ0gsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUNwQixJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLENBQUMsRUFBRSxFQUFFO1FBQ0wsQ0FBQyxFQUFFLEVBQUU7UUFDTCxJQUFJLEVBQUUsSUFBSTtRQUNWLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLFVBQVUsRUFBRSxFQUFFO0tBQ2pCLENBQUMsQ0FBQztJQUNILGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDcEIsSUFBSSxFQUFFLE1BQU07UUFDWixTQUFTLEVBQUUsS0FBSztRQUNoQixDQUFDLEVBQUUsRUFB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dCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQge0ltYWdlVXBsb2FkZXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9JbWFnZVVwbG9hZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge09ic2VydmVyfSBmcm9tICdyeGpzL09ic2VydmVyJztcbmltcG9ydCB7RGlzcGxheUNhbnZhc30gZnJvbSAnLi9jb21wb25lbnRzL0Rpc3BsYXlDYW52YXMnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICBjb25zdCBkaXNwbGF5Q2FudmFzID0gbmV3IERpc3BsYXlDYW52YXMoe3F1ZXJ5U2VsZWN0b3JTdHJpbmc6ICcuZGlzcGxheSd9KTtcbiAgICBkaXNwbGF5Q2FudmFzLndyaXRlVGV4dCh7XG4gICAgICAgIHRleHQ6ICdTb21ldGhpbmcgc29tZXRoaW5nJyxcbiAgICAgICAgZmlsbFN0eWxlOiAneWVsbG93JyxcbiAgICAgICAgeDogMjAsXG4gICAgICAgIHk6IDUwLFxuICAgICAgICBmaWxsOiB0cnVlLFxuICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgICAgZm9udFNpemU6ICczNXB4JyxcbiAgICAgICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcbiAgICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICB9KTtcbiAgICBkaXNwbGF5Q2FudmFzLndyaXRlVGV4dCh7XG4gICAgICAgIHRleHQ6ICdTb21ldGhpbmcgZWxzZScsXG4gICAgICAgIGZpbGxTdHlsZTogJ2JsYWNrJyxcbiAgICAgICAgeDogNDAsXG4gICAgICAgIHk6IDcwLFxuICAgICAgICBmaWxsOiB0cnVlLFxuICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgICAgZm9udFNpemU6ICczNXB4JyxcbiAgICAgICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcbiAgICAgICAgZm9udEZhbWlseTogJ1RhaG9tYScsXG4gICAgICAgIHNoYWRvd0NvbG9yOiAncmVkJyxcbiAgICAgICAgc2hhZG93T2Zmc2V0WTogMyxcbiAgICAgICAgc2hhZG93T2Zmc2V0WDogMyxcbiAgICAgICAgc2hhZG93Qmx1cjogMTIsXG4gICAgfSk7XG4gICAgZGlzcGxheUNhbnZhcy53cml0ZVRleHQoe1xuICAgICAgICB0ZXh0OiAnVGV4dCcsXG4gICAgICAgIGZpbGxTdHlsZTogJ3JlZCcsXG4gICAgICAgIHg6IDcwLFxuICAgICAgICB5OiA4MCxcbiAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgIGxpbmVXaWR0aDogMSxcbiAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICAgIGZvbnRTaXplOiAnNDVweCcsXG4gICAgICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXG4gICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICAgIHNoYWRvd0NvbG9yOiAnYmx1ZScsXG4gICAgICAgIHNoYWRvd09mZnNldFk6IDIsXG4gICAgICAgIHNoYWRvd09mZnNldFg6IDIsXG4gICAgICAgIHNoYWRvd0JsdXI6IDUsXG4gICAgfSk7XG59KTtcblxuLy8gY29uc3QgaW1hZ2VVcGxvYWRlciA9IG5ldyBJbWFnZVVwbG9hZGVyQ29tcG9uZW50KCcuaW1hZ2UtdXBsb2FkZXInLCAnWmHFgmFkdWogb2JyYXogeiBwbGlrdScsICdXeWJpZXJ6IHBsaWsnKTtcbi8vXG4vLyBjbGFzcyBNeU9ic2VydmVyIGltcGxlbWVudHMgT2JzZXJ2ZXI8YW55PiB7XG4vLyAgICAgcHVibGljIG5leHQodmFsdWU6IGFueSkge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4vLyAgICAgfVxuLy9cbi8vICAgICBwdWJsaWMgZXJyb3IoZXJyOiBhbnkpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG9jdXJyZWQnICsgZXJyKTtcbi8vICAgICB9XG4vL1xuLy8gICAgIHB1YmxpYyBjb21wbGV0ZSgpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ2NvbXBsZXRlZCcpO1xuLy8gICAgIH1cbi8vIH1cbi8vXG4vLyBpbWFnZVVwbG9hZGVyLnN1YnNjcmliZShuZXcgTXlPYnNlcnZlcigpKTtcbiIsImltcG9ydCB7SURpc3BsYXlDYW52YXNQcm9wZXJ0aWVzfSBmcm9tICcuLi9tb2RlbC9pbnRlcmZhY2VzL1Byb3BlcnRpZXMvSURpc3BsYXlDYW52YXMuUHJvcGVydGllcyc7XHJcbmltcG9ydCB7SVRleHRQcm9wZXJ0aWVzfSBmcm9tICcuLi9tb2RlbC9pbnRlcmZhY2VzL0lUZXh0UHJvcGVydGllcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlzcGxheUNhbnZhcyB7XHJcbiAgICBwcml2YXRlIGh0bWxDYW52YXNFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBjb250ZXh0MmQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcGVydGllczogSURpc3BsYXlDYW52YXNQcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50cyhwcm9wZXJ0aWVzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd3JpdGVUZXh0KHRleHQ6IElUZXh0UHJvcGVydGllcykge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQyZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQyZC5maWxsU3R5bGUgPSB0ZXh0LmZpbGxTdHlsZTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0MmQuZm9udCA9IGAke3RleHQuZm9udFN0eWxlfSAke3RleHQuZm9udFdlaWdodH0gJHt0ZXh0LmZvbnRTaXplfSAke3RleHQuZm9udEZhbWlseX1gO1xyXG4gICAgICAgICAgICBpZiAoKHRleHQuc2hhZG93Q29sb3IpICYmICh0ZXh0LnNoYWRvd0NvbG9yICE9PSAnJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dDJkLnNoYWRvd0NvbG9yID0gdGV4dC5zaGFkb3dDb2xvcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dDJkLnNoYWRvd0JsdXIgPSB0ZXh0LnNoYWRvd0JsdXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQyZC5zaGFkb3dDZmZzZXRYID0gdGV4dC5zaGFkb3dPZmZzZXRYO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0MmQuc2hhZG93T2Zmc2V0WSA9IHRleHQuc2hhZG93T2Zmc2V0WTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGV4dC5maWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQyZC5maWxsVGV4dCh0ZXh0LnRleHQsIHRleHQueCwgdGV4dC55KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dDJkLmxpbmVXaWR0aCA9IHRleHQubGluZVdpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0MmQuc3Ryb2tlVGV4dCh0ZXh0LnRleHQsIHRleHQueCwgdGV4dC55KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRleHQyZC5tZWFzdXJlVGV4dCh0ZXh0LnRleHQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRFbGVtZW50cyhwcm9wZXJ0aWVzOiBJRGlzcGxheUNhbnZhc1Byb3BlcnRpZXMpIHtcclxuICAgICAgICB0aGlzLmh0bWxDYW52YXNFbGVtZW50ID0gPEhUTUxDYW52YXNFbGVtZW50PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb3BlcnRpZXMucXVlcnlTZWxlY3RvclN0cmluZyk7XHJcbiAgICAgICAgaWYgKHRoaXMuaHRtbENhbnZhc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0MmQgPSB0aGlzLmh0bWxDYW52YXNFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
