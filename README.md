# SyncfusionMenu

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

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

## installation guide

ng new syncfusion-menu
cd syncfusion-menu
npm install --save @angular/material @angular/cdk @angular/animations
ng add @angular/material

npm install @syncfusion/ej2-base --save
npm install @syncfusion/ej2-angular-navigations --save
ng add @syncfusion/ej2-angular-navigations --theme="material"

# add material to app.module.ts
imports: [
	// Material
	MatIconModule,
	MatMenuModule,
	MatTableModule,
	MatPaginatorModule,
	MatFormFieldModule,
	MatInputModule,
	MatButtonModule,
	MatSidenavModule,
	MatToolbarModule

package.json 
	@syncfusion/ej2-angular-theme
angular.json 
	styles: [
		"src/styles.css",
		"../node_modules/@syncfusion/ej2-material-theme/styles/material.css"
	]
app.module.ts 
	import { MenuModule } from '@syncfusion/ej2-angular-navigations';
	imports: [
		...
		MenuModule
	]

style.css
	@import "../node_modules/@syncfusion/ej2-material-theme/styles/material.css";

	
	