# kava

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

npm install -g firebase-tools

firebase login
firebase init


firebase deploy

## Setup PWA

bash```
ng add @angular/pwa
npm install -g http-server
npm i http-server
````

check changes
1. package.json
 - add service worker package
 - add pwa package
 - 
2. add new file as name ngsw-config.json

3. angular.json
-  "assets": [
              "src/favicon.ico",
              "src/assets",
              "src/manifest.webmanifest"
            ],
- 
   "serviceWorker": true,
   "ngswConfigPath": "ngsw-config.json"            

4. index.html
-  <link rel="manifest" href="manifest.webmanifest">

5. assets
- icons -> icon*

6. Updated runing build
-     
   "kavabuild": "ng build --prod --output-hashing=none",
   "kavaserviceworker": "npm run kavabuild && cd dist/kava && http-server -c-1"

7. npm run  kavaserviceworker

8. open browser  
-  http://127.0.0.1:8080
-  spect element  
    - application -> service worker

9. Template Cache     
- 

10. Api Datacache 
        "strategy": "performance",

11. PushNotification 
- sudo npm install web-push -g
web-push generate-vapid-keys --json
npm i web-push --save