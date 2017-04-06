# as-ng2-components

## Installation

The following method works with a project generated with angular-cli. I wasn't suppose to call `forRoot()` in the first place. But not calling it threw an exception so... I don't know I'm not Jesus

To install this library, run:

```bash
npm i --save as-ng2-components 
```

And then from your Angular `AppModule`:

```typescript
... // other imports
import { AsNg2Module } from 'as-ng2-components'; // import the module here
... // other imports

@NgModule({
  declarations: [/* declarations */],
  imports: [
    AsNg2Module.forRoot() // Specify it as an import => don't forget to call .forRoot() ... or not
  ],
  providers: [/* providers */],
  bootstrap: [/* main component to bootstrap */]
})
export class AppModule { }
```

## Usage

### Toast
> TODO: Write ToastComponent references


## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## Created with [generator-angular2-library](https://github.com/jvandemo/generator-angular2-library)
With a few tweaks : Mainly got from [here](https://blog.thoughtram.io/angular/2016/06/08/component-relative-paths-in-angular-2.html) and [there](https://github.com/jvandemo/generator-angular2-library/issues/15)
+ Added scripts to package.json
```json
"htmlcopy": "copyfiles src/**/*.html dist",
"lesscopy": "copyfiles src/**/*.css dist",
"dist": "npm run tsc && npm run htmlcopy && npm run lesscopy"
```
+ Changed template and styles importation method (in components)
```typescript
template: require('./[template-file].html'),
styles: [require('./[style-file].css')]
```
+ Compiles and copy files with
```bash
npm run dist
```

## Versions

### 0.0.1
Got the thing to work and compile with external template and style files.

## License

MIT © [Antoine Souesme](mailto:antoine.souesme@gmail.com)
