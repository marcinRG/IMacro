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

const canvas = <HTMLCanvasElement> document.querySelector('.display');
const context = canvas.getContext('2d');
const btn = document.querySelector('.upload-button');
console.log(btn);
const inputUpload = <HTMLInputElement> document.querySelector('.upload-input');
console.log(inputUpload);
btn.addEventListener('click', () => {
    inputUpload.click();
});
inputUpload.addEventListener('change',(event: Event)=>{
    const file: File = (<HTMLInputElement> event.target).files[0];
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
        console.log(event);
        const img = new Image();
        img.src = event.target.result;
        img.addEventListener('load', () => {
            console.log(img.width);
            console.log(img.height);
            const imgHeight = ((600 / img.width) * img.height);
            console.log(imgHeight);
            canvas.height = imgHeight;
            console.log('image loaded');
            context.drawImage(img, 0, 0, 600, imgHeight);
        });
    };
    fileReader.readAsDataURL(file);
});
