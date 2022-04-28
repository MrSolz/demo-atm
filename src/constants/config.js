import { RootStore } from "../store"
import { toJS } from 'mobx';
const isDevEnv = process.env.NODE_ENV === 'development';
const store = new RootStore()
const API_URL = store.mainStore?.ENV?.API_URL || "";
console.log('====================================');
console.log("API_URL", toJS(store.mainStore?.ENV));
console.log('====================================');
export default {
    // App Details
    appName: 'ATM',
    // Build Configuration - eg. Debug or Release?
    isDevEnv,
    // Date Format
    dateFormat: 'Do MMM YYYY',

    // API
    apiBaseUrl: toJS(store.mainStore?.ENV)
    // Google Analytics - uses a 'dev' account while we're testing
};