// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import firebase from "firebase";

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyDeg5aSg8vfsP61rVER4m8UJJey9GARdoY",
    authDomain: "e-commercedb-ecd32.firebaseapp.com",
    projectId: "e-commercedb-ecd32",
    storageBucket: "e-commercedb-ecd32.appspot.com",
    messagingSenderId: "468381988364",
    appId: "1:468381988364:web:978270b7ddf23663fe2029",
    measurementId: "G-SVCEEFQJ4X"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
