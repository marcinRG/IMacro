import {ImageUploaderComponent} from './components/ImageUploader.component';
import {Observer} from 'rxjs/Observer';

console.log('app start');
const imageUploader = new ImageUploaderComponent('.image-uploader', 'Załaduj obraz z pliku', 'Wybierz plik');
// const reader = new FileReader();
// reader.onload = (event) => {
//     console.log(event);
// };

class MyObserver implements Observer<any> {
    public next(value: any) {
        console.log(value);
    }

    public error(err: any) {
        console.log('error ocurred' + err);
    }

    public complete() {
        console.log('completed');
    }
}

imageUploader.subscribe(new MyObserver());