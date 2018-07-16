import { IIMageFile } from './IImageFile';

export interface IFileCollection {
    name: string;
    getAllFiles(): IIMageFile[];
    addFile(file: IIMageFile): Promise<any>;
}
