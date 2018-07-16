import { AppSettings } from '../settings/AppSettings';
import * as localForage from 'localforage';

class StorageService {

    public config() {
        return new Promise((resolve, reject) => {
            try {
                localForage.config(AppSettings.storageConfig);
                resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    }

    public read(): Promise<any> {
        return new Promise((resolve, reject) => {
            reject(new Error('Not implemented'));
        });
    }

    public save(): Promise<any> {
        return new Promise((resolve, reject) => {
            reject(new Error('Not implemented'));
        });
    }
}

export const storageService: StorageService = new StorageService();
