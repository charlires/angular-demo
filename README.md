# AngularDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

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

## Useful commands

Create tiny component   
`ng generate component dir/compflat --skip-tests --inline-style --inline-template --flat` 

Create small component   
`ng generate component components/compflat --skip-tests --inline-style` 

Create view component  
`ng generate component views/new1 --skip-tests --inline-style`

## Bootstrap

```
npm install --save bootstrap
npm install --save jquery
ng add @ng-bootstrap/ng-bootstrap
```

to support boostrap you will need to add the follow code to your `angular.json`
"projects"."angular-demo"."architect"."build"   
```json
"options": {
    "styles": [
    "./node_modules/bootstrap/dist/css/bootstrap.css",
    "src/styles.css"              
    ],
    "scripts": [
    "./node_modules/jquery/dist/jquery.js",
    "./node_modules/bootstrap/dist/js/bootstrap.js"
    ]
}
```