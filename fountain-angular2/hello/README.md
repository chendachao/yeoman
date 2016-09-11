# Angular2 TypeScript JSPM Karma Code Coverage Demo

## Tips:

1. JSPM's `sass` plugin can compile and load scss file on the fly, and inject sass to style tag in head element.
If you want to use it in angular2's component, maybe you need configure it like this:
```js
import _styles from './index.scss!';
let styles = _styles & _styles.default ? _styles.default : _styles;
```
1. JSPM's `scss` plugin will also compile and load on the fly, but won't inject them in html's head tag.


## TODOs:

* [x] Find a solution to use only `sass` or `scss` JSPM plugin.
* [x] Clean code, this task may last the whole lifetime of the application.
* [x] Fix UT issue to generate code coverage reporter.