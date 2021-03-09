// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: false,
  contractTypeApiURL: 'http://35.194.55.145',
  /*contractTypeApiURL:'https://sundeuscontracttypeservice.azurewebsites.net',*/
  contractApiURL:'http://34.66.23.103',
  firebaseConfig : {
    apiKey: "AIzaSyCVL20Aq64fHq1_ZHaT5JyL8EIwkzLGC7M",
    authDomain: "contract-management-8efc2.firebaseapp.com",
    databaseURL: "https://contract-management-8efc2.firebaseio.com",
    projectId: "contract-management-8efc2",
    storageBucket: "contract-management-8efc2.appspot.com",
    messagingSenderId: "700226026605",
    appId: "1:700226026605:web:9eeef30b2503e18d"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
