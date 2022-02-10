// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  urlapi : 'https://sap-comercial.azurewebsites.net/',
  apiContextDrivers : 'api/',
  firebaseConfig: {
    apiKey: 'AIzaSyBRC1z4fQiZMaxSwdn4wHIDmHBN2WsGg-Y',
    authDomain: 'sap-comercial.firebaseapp.com',
    projectId: 'sap-comercial',
    storageBucket: 'sap-comercial.appspot.com',
    messagingSenderId: '29606633159',
    appId: '1:296066331591:web:3db0d3725e884c43001fe2',
  }
};
