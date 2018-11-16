(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// import {ImageUploaderComponent} from './components/ImageUploader.component';
// import {Observer} from 'rxjs/Observer';
// import {DisplayCanvas} from './components/DisplayCanvas';
// window.addEventListener('load', () => {
//     const displayCanvas = new DisplayCanvas({querySelectorString: '.display'});
//     displayCanvas.writeText({
//         text: 'Something something',
//         fillStyle: 'yellow',
//         x: 20,
//         y: 50,
//         fill: true,
//         fontWeight: 'normal',
//         fontSize: '35px',
//         fontStyle: 'normal',
//         fontFamily: 'Arial',
//         shadowColor: 'green',
//         shadowOffsetY: 10,
//         shadowOffsetX: 10,
//         shadowBlur: 25,
//         alpha: 1,
//     });
//     displayCanvas.writeText({
//         text: 'Something else',
//         fillStyle: 'black',
//         x: 40,
//         y: 70,
//         fill: true,
//         fontWeight: 'normal',
//         fontSize: '35px',
//         fontStyle: 'normal',
//         fontFamily: 'Tahoma',
//         alpha: 0.25,
//     });
//     displayCanvas.writeText({
//         text: 'Text',
//         fillStyle: 'red',
//         x: 70,
//         y: 80,
//         fill: false,
//         lineWidth: 1,
//         fontWeight: 'normal',
//         fontSize: '45px',
//         fontStyle: 'normal',
//         fontFamily: 'Arial',
//         shadowColor: 'red',
//         shadowOffsetY: 2,
//         shadowOffsetX: 2,
//         shadowBlur: 5,
//         alpha: 0.75,
//     });
// });
// const imageUploader = new ImageUploaderComponent('.image-uploader', 'Załaduj obraz z pliku', 'Wybierz plik');
//
// //
// class MyObserver implements Observer<any> {
//     public next(value: any) {
//         console.log(value);
//         // const img = new Image();
//         // img.src = value.result;
//         // console.log(value.name);
//         // img.addEventListener('load', () => {
//         //     console.log('loaded');
//         // });
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
var canvas = document.querySelector('.display');
var context = canvas.getContext('2d');
var btn = document.querySelector('.upload-button');
console.log(btn);
var inputUpload = document.querySelector('.upload-input');
console.log(inputUpload);
btn.addEventListener('click', function () {
    inputUpload.click();
});
inputUpload.addEventListener('change', function (event) {
    var file = event.target.files[0];
    var fileReader = new FileReader();
    fileReader.onload = function (event) {
        console.log(event);
        var img = new Image();
        img.src = event.target.result;
        img.addEventListener('load', function () {
            console.log(img.width);
            console.log(img.height);
            var imgHeight = ((600 / img.width) * img.height);
            console.log(imgHeight);
            canvas.height = imgHeight;
            console.log('image loaded');
            context.drawImage(img, 0, 0, 600, imgHeight);
        });
    };
    fileReader.readAsDataURL(file);
});
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsK0VBQStFO0FBQy9FLDBDQUEwQztBQUMxQyw0REFBNEQ7QUFFNUQsMENBQTBDO0FBQzFDLGtGQUFrRjtBQUNsRixnQ0FBZ0M7QUFDaEMsdUNBQXVDO0FBQ3ZDLCtCQUErQjtBQUMvQixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLHNCQUFzQjtBQUN0QixnQ0FBZ0M7QUFDaEMsNEJBQTRCO0FBQzVCLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0IsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0IsMEJBQTBCO0FBQzFCLG9CQUFvQjtBQUNwQixVQUFVO0FBQ1YsZ0NBQWdDO0FBQ2hDLGtDQUFrQztBQUNsQyw4QkFBOEI7QUFDOUIsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQixzQkFBc0I7QUFDdEIsZ0NBQWdDO0FBQ2hDLDRCQUE0QjtBQUM1QiwrQkFBK0I7QUFDL0IsZ0NBQWdDO0FBQ2hDLHVCQUF1QjtBQUN2QixVQUFVO0FBQ1YsZ0NBQWdDO0FBQ2hDLHdCQUF3QjtBQUN4Qiw0QkFBNEI7QUFDNUIsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQix1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCLGdDQUFnQztBQUNoQyw0QkFBNEI7QUFDNUIsK0JBQStCO0FBQy9CLCtCQUErQjtBQUMvQiw4QkFBOEI7QUFDOUIsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1Qix5QkFBeUI7QUFDekIsdUJBQXVCO0FBQ3ZCLFVBQVU7QUFDVixNQUFNO0FBRU4sZ0hBQWdIO0FBQ2hILEVBQUU7QUFDRixLQUFLO0FBQ0wsOENBQThDO0FBQzlDLGdDQUFnQztBQUNoQyw4QkFBOEI7QUFDOUIsc0NBQXNDO0FBQ3RDLHFDQUFxQztBQUNyQyxzQ0FBc0M7QUFDdEMsa0RBQWtEO0FBQ2xELHdDQUF3QztBQUN4QyxpQkFBaUI7QUFDakIsUUFBUTtBQUNSLEVBQUU7QUFDRiwrQkFBK0I7QUFDL0IsOENBQThDO0FBQzlDLFFBQVE7QUFDUixFQUFFO0FBQ0YsMEJBQTBCO0FBQzFCLG9DQUFvQztBQUNwQyxRQUFRO0FBQ1IsSUFBSTtBQUNKLEVBQUU7QUFDRiw2Q0FBNkM7QUFFN0MsSUFBTSxNQUFNLEdBQXVCLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdEUsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4QyxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQixJQUFNLFdBQVcsR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMvRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDMUIsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3hCLENBQUMsQ0FBQyxDQUFDO0FBQ0gsV0FBVyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBQyxVQUFDLEtBQVk7SUFDL0MsSUFBTSxJQUFJLEdBQTZCLEtBQUssQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlELElBQU0sVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7SUFDcEMsVUFBVSxDQUFDLE1BQU0sR0FBRyxVQUFDLEtBQUs7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFNLEdBQUcsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ3hCLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDOUIsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QixJQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QixNQUFNLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDO0lBQ0YsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIGltcG9ydCB7SW1hZ2VVcGxvYWRlckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL0ltYWdlVXBsb2FkZXIuY29tcG9uZW50Jztcbi8vIGltcG9ydCB7T2JzZXJ2ZXJ9IGZyb20gJ3J4anMvT2JzZXJ2ZXInO1xuLy8gaW1wb3J0IHtEaXNwbGF5Q2FudmFzfSBmcm9tICcuL2NvbXBvbmVudHMvRGlzcGxheUNhbnZhcyc7XG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuLy8gICAgIGNvbnN0IGRpc3BsYXlDYW52YXMgPSBuZXcgRGlzcGxheUNhbnZhcyh7cXVlcnlTZWxlY3RvclN0cmluZzogJy5kaXNwbGF5J30pO1xuLy8gICAgIGRpc3BsYXlDYW52YXMud3JpdGVUZXh0KHtcbi8vICAgICAgICAgdGV4dDogJ1NvbWV0aGluZyBzb21ldGhpbmcnLFxuLy8gICAgICAgICBmaWxsU3R5bGU6ICd5ZWxsb3cnLFxuLy8gICAgICAgICB4OiAyMCxcbi8vICAgICAgICAgeTogNTAsXG4vLyAgICAgICAgIGZpbGw6IHRydWUsXG4vLyAgICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuLy8gICAgICAgICBmb250U2l6ZTogJzM1cHgnLFxuLy8gICAgICAgICBmb250U3R5bGU6ICdub3JtYWwnLFxuLy8gICAgICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuLy8gICAgICAgICBzaGFkb3dDb2xvcjogJ2dyZWVuJyxcbi8vICAgICAgICAgc2hhZG93T2Zmc2V0WTogMTAsXG4vLyAgICAgICAgIHNoYWRvd09mZnNldFg6IDEwLFxuLy8gICAgICAgICBzaGFkb3dCbHVyOiAyNSxcbi8vICAgICAgICAgYWxwaGE6IDEsXG4vLyAgICAgfSk7XG4vLyAgICAgZGlzcGxheUNhbnZhcy53cml0ZVRleHQoe1xuLy8gICAgICAgICB0ZXh0OiAnU29tZXRoaW5nIGVsc2UnLFxuLy8gICAgICAgICBmaWxsU3R5bGU6ICdibGFjaycsXG4vLyAgICAgICAgIHg6IDQwLFxuLy8gICAgICAgICB5OiA3MCxcbi8vICAgICAgICAgZmlsbDogdHJ1ZSxcbi8vICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4vLyAgICAgICAgIGZvbnRTaXplOiAnMzVweCcsXG4vLyAgICAgICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXG4vLyAgICAgICAgIGZvbnRGYW1pbHk6ICdUYWhvbWEnLFxuLy8gICAgICAgICBhbHBoYTogMC4yNSxcbi8vICAgICB9KTtcbi8vICAgICBkaXNwbGF5Q2FudmFzLndyaXRlVGV4dCh7XG4vLyAgICAgICAgIHRleHQ6ICdUZXh0Jyxcbi8vICAgICAgICAgZmlsbFN0eWxlOiAncmVkJyxcbi8vICAgICAgICAgeDogNzAsXG4vLyAgICAgICAgIHk6IDgwLFxuLy8gICAgICAgICBmaWxsOiBmYWxzZSxcbi8vICAgICAgICAgbGluZVdpZHRoOiAxLFxuLy8gICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbi8vICAgICAgICAgZm9udFNpemU6ICc0NXB4Jyxcbi8vICAgICAgICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcbi8vICAgICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbi8vICAgICAgICAgc2hhZG93Q29sb3I6ICdyZWQnLFxuLy8gICAgICAgICBzaGFkb3dPZmZzZXRZOiAyLFxuLy8gICAgICAgICBzaGFkb3dPZmZzZXRYOiAyLFxuLy8gICAgICAgICBzaGFkb3dCbHVyOiA1LFxuLy8gICAgICAgICBhbHBoYTogMC43NSxcbi8vICAgICB9KTtcbi8vIH0pO1xuXG4vLyBjb25zdCBpbWFnZVVwbG9hZGVyID0gbmV3IEltYWdlVXBsb2FkZXJDb21wb25lbnQoJy5pbWFnZS11cGxvYWRlcicsICdaYcWCYWR1aiBvYnJheiB6IHBsaWt1JywgJ1d5YmllcnogcGxpaycpO1xuLy9cbi8vIC8vXG4vLyBjbGFzcyBNeU9ic2VydmVyIGltcGxlbWVudHMgT2JzZXJ2ZXI8YW55PiB7XG4vLyAgICAgcHVibGljIG5leHQodmFsdWU6IGFueSkge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4vLyAgICAgICAgIC8vIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuLy8gICAgICAgICAvLyBpbWcuc3JjID0gdmFsdWUucmVzdWx0O1xuLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZS5uYW1lKTtcbi8vICAgICAgICAgLy8gaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4vLyAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnbG9hZGVkJyk7XG4vLyAgICAgICAgIC8vIH0pO1xuLy8gICAgIH1cbi8vXG4vLyAgICAgcHVibGljIGVycm9yKGVycjogYW55KSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBvY3VycmVkJyArIGVycik7XG4vLyAgICAgfVxuLy9cbi8vICAgICBwdWJsaWMgY29tcGxldGUoKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdjb21wbGV0ZWQnKTtcbi8vICAgICB9XG4vLyB9XG4vL1xuLy8gaW1hZ2VVcGxvYWRlci5zdWJzY3JpYmUobmV3IE15T2JzZXJ2ZXIoKSk7XG5cbmNvbnN0IGNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXknKTtcbmNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGxvYWQtYnV0dG9uJyk7XG5jb25zb2xlLmxvZyhidG4pO1xuY29uc3QgaW5wdXRVcGxvYWQgPSA8SFRNTElucHV0RWxlbWVudD4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwbG9hZC1pbnB1dCcpO1xuY29uc29sZS5sb2coaW5wdXRVcGxvYWQpO1xuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlucHV0VXBsb2FkLmNsaWNrKCk7XG59KTtcbmlucHV0VXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsKGV2ZW50OiBFdmVudCk9PntcbiAgICBjb25zdCBmaWxlOiBGaWxlID0gKDxIVE1MSW5wdXRFbGVtZW50PiBldmVudC50YXJnZXQpLmZpbGVzWzBdO1xuICAgIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGZpbGVSZWFkZXIub25sb2FkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5zcmMgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGltZy53aWR0aCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbWcuaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnN0IGltZ0hlaWdodCA9ICgoNjAwIC8gaW1nLndpZHRoKSAqIGltZy5oZWlnaHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaW1nSGVpZ2h0KTtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWdIZWlnaHQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW1hZ2UgbG9hZGVkJyk7XG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWcsIDAsIDAsIDYwMCwgaW1nSGVpZ2h0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG59KTtcbiJdfQ==
