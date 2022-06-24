// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { initializeApp } from "firebase/app";

export const environment = {
  production: false,
  urlapi : 'https://localhost:44347/', //'http://api.dev.comercial.gsctech.com.mx/', //  'https://sap-comercial.azurewebsites.net/', // 'http://api.qas.comercial.gsctech.com.mx/', //'http://api.prod.comercial.gsctech.com.mx/'
  apiContextDrivers : 'api/',
  



  firebaseConfig : {
    apiKey: "AIzaSyBRC1z4fQiZMaxSwdn4wHIDmHBN2WsGg-Y",
    authDomain: "sap-comercial.firebaseapp.com",
    projectId: "sap-comercial",
    storageBucket: "sap-comercial.appspot.com",
    messagingSenderId: "296066331591",
    appId: "1:296066331591:web:3db0d3725e884c43001fe2"
  }
















    // firebaseConfig : {
  //   apiKey: "AIzaSyAxP0rUahxCXjtf7qBEadUXfr3WvWk1alU",
  //   authDomain: "tp-ppsii.firebaseapp.com",
  //   databaseURL: "https://tp-ppsii-default-rtdb.firebaseio.com",
  //   projectId: "tp-ppsii",
  //   storageBucket: "tp-ppsii.appspot.com",
  //   messagingSenderId: "756468356457",
  //   appId: "1:756468356457:web:c12be35b2de3dfff1619f8",
  //   measurementId: "G-3827X50ZTP"
  // }
  // firebaseConfig : {
  //   apiKey: "AIzaSyAxP0rUahxCXjtf7qBEadUXfr3WvWk1alU",
  //   authDomain: "tp-ppsii.firebaseapp.com",
  //   // databaseURL: "https://tp-ppsii-default-rtdb.firebaseio.com",
  //   projectId: "tp-ppsii",
  //   storageBucket: "tp-ppsii.appspot.com",
  //   messagingSenderId: "756468356457",
  //   appId: "1:756468356457:web:c12be35b2de3dfff1619f8",
  //   // measurementId: "G-3827X50ZTP"
  // }

  // firebaseConfig: {
  //   apiKey: 'AIzaSyBRC1z4fQiZMaxSwdn4wHIDmHBN2WsGg-Y',
  //   authDomain: 'sap-comercial.firebaseapp.com',
  //   projectId: 'sap-comercial',
  //   storageBucket: 'sap-comercial.appspot.com',
  //   messagingSenderId: '296066331591',
  //   appId: '1:296066331591:web:3db0d3725e884c43001fe2',
  // }

};

