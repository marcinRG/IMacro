(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// import {ImageUploaderComponent} from './components/ImageUploader.component';
// import {Observer} from 'rxjs';
//
// // window.addEventListener('load', () => {
// //     const displayCanvas = new DisplayCanvas({querySelectorString: '.display'});
// //     displayCanvas.writeText({
// //         text: 'Something something',
// //         fillStyle: 'yellow',
// //         x: 20,
// //         y: 50,
// //         fill: true,
// //         fontWeight: 'normal',
// //         fontSize: '35px',
// //         fontStyle: 'normal',
// //         fontFamily: 'Arial',
// //         shadowColor: 'green',
// //         shadowOffsetY: 10,
// //         shadowOffsetX: 10,
// //         shadowBlur: 25,
// //         alpha: 1,
// //     });
// //     displayCanvas.writeText({
// //         text: 'Something else',
// //         fillStyle: 'black',
// //         x: 40,
// //         y: 70,
// //         fill: true,
// //         fontWeight: 'normal',
// //         fontSize: '35px',
// //         fontStyle: 'normal',
// //         fontFamily: 'Tahoma',
// //         alpha: 0.25,
// //     });
// //     displayCanvas.writeText({
// //         text: 'Text',
// //         fillStyle: 'red',
// //         x: 70,
// //         y: 80,
// //         fill: false,
// //         lineWidth: 1,
// //         fontWeight: 'normal',
// //         fontSize: '45px',
// //         fontStyle: 'normal',
// //         fontFamily: 'Arial',
// //         shadowColor: 'red',
// //         shadowOffsetY: 2,
// //         shadowOffsetX: 2,
// //         shadowBlur: 5,
// //         alpha: 0.75,
// //     });
// // });
//
// const imageUploader = new ImageUploaderComponent('.image-uploader', 'Załaduj obraz z pliku', 'Wybierz plik');
//
// class MyObserver implements Observer<any> {
//     public next(value: any) {
//         console.log('next');
//         showImage(value);
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
//
// const canvas = <HTMLCanvasElement> document.querySelector('.display');
// const context = canvas.getContext('2d');
// function showImage(img) {
//     console.log(img.width);
//     console.log(img.height);
//     const imgHeight = ((600 / img.width) * img.height);
//     console.log(imgHeight);
//     canvas.height = imgHeight;
//     context.drawImage(img, 0, 0, 600, imgHeight);
// }
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsK0VBQStFO0FBQy9FLGlDQUFpQztBQUNqQyxFQUFFO0FBQ0YsNkNBQTZDO0FBQzdDLHFGQUFxRjtBQUNyRixtQ0FBbUM7QUFDbkMsMENBQTBDO0FBQzFDLGtDQUFrQztBQUNsQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLHlCQUF5QjtBQUN6QixtQ0FBbUM7QUFDbkMsK0JBQStCO0FBQy9CLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFDbEMsbUNBQW1DO0FBQ25DLGdDQUFnQztBQUNoQyxnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2IsbUNBQW1DO0FBQ25DLHFDQUFxQztBQUNyQyxpQ0FBaUM7QUFDakMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQix5QkFBeUI7QUFDekIsbUNBQW1DO0FBQ25DLCtCQUErQjtBQUMvQixrQ0FBa0M7QUFDbEMsbUNBQW1DO0FBQ25DLDBCQUEwQjtBQUMxQixhQUFhO0FBQ2IsbUNBQW1DO0FBQ25DLDJCQUEyQjtBQUMzQiwrQkFBK0I7QUFDL0Isb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQiwwQkFBMEI7QUFDMUIsMkJBQTJCO0FBQzNCLG1DQUFtQztBQUNuQywrQkFBK0I7QUFDL0Isa0NBQWtDO0FBQ2xDLGtDQUFrQztBQUNsQyxpQ0FBaUM7QUFDakMsK0JBQStCO0FBQy9CLCtCQUErQjtBQUMvQiw0QkFBNEI7QUFDNUIsMEJBQTBCO0FBQzFCLGFBQWE7QUFDYixTQUFTO0FBQ1QsRUFBRTtBQUNGLGdIQUFnSDtBQUNoSCxFQUFFO0FBQ0YsOENBQThDO0FBQzlDLGdDQUFnQztBQUNoQywrQkFBK0I7QUFDL0IsNEJBQTRCO0FBQzVCLFFBQVE7QUFDUixFQUFFO0FBQ0YsK0JBQStCO0FBQy9CLDhDQUE4QztBQUM5QyxRQUFRO0FBQ1IsRUFBRTtBQUNGLDBCQUEwQjtBQUMxQixvQ0FBb0M7QUFDcEMsUUFBUTtBQUNSLElBQUk7QUFDSixFQUFFO0FBQ0YsNkNBQTZDO0FBQzdDLEVBQUU7QUFDRix5RUFBeUU7QUFDekUsMkNBQTJDO0FBQzNDLDRCQUE0QjtBQUM1Qiw4QkFBOEI7QUFDOUIsK0JBQStCO0FBQy9CLDBEQUEwRDtBQUMxRCw4QkFBOEI7QUFDOUIsaUNBQWlDO0FBQ2pDLG9EQUFvRDtBQUNwRCxJQUFJIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gaW1wb3J0IHtJbWFnZVVwbG9hZGVyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvSW1hZ2VVcGxvYWRlci5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQge09ic2VydmVyfSBmcm9tICdyeGpzJztcclxuLy9cclxuLy8gLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbi8vIC8vICAgICBjb25zdCBkaXNwbGF5Q2FudmFzID0gbmV3IERpc3BsYXlDYW52YXMoe3F1ZXJ5U2VsZWN0b3JTdHJpbmc6ICcuZGlzcGxheSd9KTtcclxuLy8gLy8gICAgIGRpc3BsYXlDYW52YXMud3JpdGVUZXh0KHtcclxuLy8gLy8gICAgICAgICB0ZXh0OiAnU29tZXRoaW5nIHNvbWV0aGluZycsXHJcbi8vIC8vICAgICAgICAgZmlsbFN0eWxlOiAneWVsbG93JyxcclxuLy8gLy8gICAgICAgICB4OiAyMCxcclxuLy8gLy8gICAgICAgICB5OiA1MCxcclxuLy8gLy8gICAgICAgICBmaWxsOiB0cnVlLFxyXG4vLyAvLyAgICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4vLyAvLyAgICAgICAgIGZvbnRTaXplOiAnMzVweCcsXHJcbi8vIC8vICAgICAgICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcclxuLy8gLy8gICAgICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxyXG4vLyAvLyAgICAgICAgIHNoYWRvd0NvbG9yOiAnZ3JlZW4nLFxyXG4vLyAvLyAgICAgICAgIHNoYWRvd09mZnNldFk6IDEwLFxyXG4vLyAvLyAgICAgICAgIHNoYWRvd09mZnNldFg6IDEwLFxyXG4vLyAvLyAgICAgICAgIHNoYWRvd0JsdXI6IDI1LFxyXG4vLyAvLyAgICAgICAgIGFscGhhOiAxLFxyXG4vLyAvLyAgICAgfSk7XHJcbi8vIC8vICAgICBkaXNwbGF5Q2FudmFzLndyaXRlVGV4dCh7XHJcbi8vIC8vICAgICAgICAgdGV4dDogJ1NvbWV0aGluZyBlbHNlJyxcclxuLy8gLy8gICAgICAgICBmaWxsU3R5bGU6ICdibGFjaycsXHJcbi8vIC8vICAgICAgICAgeDogNDAsXHJcbi8vIC8vICAgICAgICAgeTogNzAsXHJcbi8vIC8vICAgICAgICAgZmlsbDogdHJ1ZSxcclxuLy8gLy8gICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuLy8gLy8gICAgICAgICBmb250U2l6ZTogJzM1cHgnLFxyXG4vLyAvLyAgICAgICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXHJcbi8vIC8vICAgICAgICAgZm9udEZhbWlseTogJ1RhaG9tYScsXHJcbi8vIC8vICAgICAgICAgYWxwaGE6IDAuMjUsXHJcbi8vIC8vICAgICB9KTtcclxuLy8gLy8gICAgIGRpc3BsYXlDYW52YXMud3JpdGVUZXh0KHtcclxuLy8gLy8gICAgICAgICB0ZXh0OiAnVGV4dCcsXHJcbi8vIC8vICAgICAgICAgZmlsbFN0eWxlOiAncmVkJyxcclxuLy8gLy8gICAgICAgICB4OiA3MCxcclxuLy8gLy8gICAgICAgICB5OiA4MCxcclxuLy8gLy8gICAgICAgICBmaWxsOiBmYWxzZSxcclxuLy8gLy8gICAgICAgICBsaW5lV2lkdGg6IDEsXHJcbi8vIC8vICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbi8vIC8vICAgICAgICAgZm9udFNpemU6ICc0NXB4JyxcclxuLy8gLy8gICAgICAgICBmb250U3R5bGU6ICdub3JtYWwnLFxyXG4vLyAvLyAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXHJcbi8vIC8vICAgICAgICAgc2hhZG93Q29sb3I6ICdyZWQnLFxyXG4vLyAvLyAgICAgICAgIHNoYWRvd09mZnNldFk6IDIsXHJcbi8vIC8vICAgICAgICAgc2hhZG93T2Zmc2V0WDogMixcclxuLy8gLy8gICAgICAgICBzaGFkb3dCbHVyOiA1LFxyXG4vLyAvLyAgICAgICAgIGFscGhhOiAwLjc1LFxyXG4vLyAvLyAgICAgfSk7XHJcbi8vIC8vIH0pO1xyXG4vL1xyXG4vLyBjb25zdCBpbWFnZVVwbG9hZGVyID0gbmV3IEltYWdlVXBsb2FkZXJDb21wb25lbnQoJy5pbWFnZS11cGxvYWRlcicsICdaYcWCYWR1aiBvYnJheiB6IHBsaWt1JywgJ1d5YmllcnogcGxpaycpO1xyXG4vL1xyXG4vLyBjbGFzcyBNeU9ic2VydmVyIGltcGxlbWVudHMgT2JzZXJ2ZXI8YW55PiB7XHJcbi8vICAgICBwdWJsaWMgbmV4dCh2YWx1ZTogYW55KSB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ25leHQnKTtcclxuLy8gICAgICAgICBzaG93SW1hZ2UodmFsdWUpO1xyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgcHVibGljIGVycm9yKGVycjogYW55KSB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG9jdXJyZWQnICsgZXJyKTtcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIHB1YmxpYyBjb21wbGV0ZSgpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnY29tcGxldGVkJyk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy9cclxuLy8gaW1hZ2VVcGxvYWRlci5zdWJzY3JpYmUobmV3IE15T2JzZXJ2ZXIoKSk7XHJcbi8vXHJcbi8vIGNvbnN0IGNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXknKTtcclxuLy8gY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4vLyBmdW5jdGlvbiBzaG93SW1hZ2UoaW1nKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhpbWcud2lkdGgpO1xyXG4vLyAgICAgY29uc29sZS5sb2coaW1nLmhlaWdodCk7XHJcbi8vICAgICBjb25zdCBpbWdIZWlnaHQgPSAoKDYwMCAvIGltZy53aWR0aCkgKiBpbWcuaGVpZ2h0KTtcclxuLy8gICAgIGNvbnNvbGUubG9nKGltZ0hlaWdodCk7XHJcbi8vICAgICBjYW52YXMuaGVpZ2h0ID0gaW1nSGVpZ2h0O1xyXG4vLyAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCA2MDAsIGltZ0hlaWdodCk7XHJcbi8vIH1cclxuIl19
