import * as localForage from 'localforage';

export class AppSettings {
    public static storageConfig = {
        driver: localForage.INDEXEDDB,
        name: 'Image macro',
        version: 1.0,
        size: 4980736,
        storeName: 'baza_IMacro',
        description: 'local storage for IMacro',
    };
}
