# Ember-cli-format-number

[![Build Status](https://travis-ci.org/thriqon/ember-cli-format-number.svg)](https://travis-ci.org/thriqon/ember-cli-format-number)


## Usage

in JS:

```javascript
import numeral from 'numeral';

numeral(100).format('0,0');
```

in templates:

```handlebars
<span>
  {{format-number 100 format="0.0"}}
</span>
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above

* `ember server`
* Visit your app at http://localhost:4200.


* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`


For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
