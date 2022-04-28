const isDevEnv = process.env.NODE_ENV === 'development';

export default {
    // App Details
    appName: 'ATM',
    // Build Configuration - eg. Debug or Release?
    isDevEnv,
    // Date Format
    dateFormat: 'Do MMM YYYY',

    // API
    apiBaseUrl: isDevEnv
        ? 'https://xxx.yyy'
        : 'https://yyy.xxx',

    // Google Analytics - uses a 'dev' account while we're testing
};