# Vue Scratchpad

## Quick Start

The starter code base will contain the following files:

```bash
- app.js
- index.html
- main.css
```

![Quick Start HTML](docs/assets/code-snapshot-quick-start.png)

The Vue Javascript will instantiate a instance and the `data()` method returns shared data to the HTML.

![Quick Start JS code](docs/assets/code-snapshot-quick-start-2.png)

## Data Access

Data attributes may be accessed and modified using methods.

![Script](docs/assets/code-snapshot-data-access-1.png)

A proxy getter/setter is provided by Vue and direct assignment is possible without referring to `data()`.

![Script](docs/assets/code-snapshot-data-access-2.png)

## Methods

Methods may be defined and used for evaluating complex expressions cleanly.

![Script](docs/assets/code-snapshot-method-2.png)

![Site](docs/assets/code-snapshot-method-1.png)

## Directives

Loading time of the HTML and the script may be different and the rendering may appear broken if the HTML loads first without the script.

All directives in Vue begin with `v-` prefix.

An example is the Cloak directive

The directive `v-cloak` may be used in the HTML as an attribute. Then, the CSS can hide the attribute until the script is ready.

![Script](doc/assets/code-snapshot-directive-2.png)

![Script](doc/assets/code-snapshot-directive-1.png)

Another directive is the Model directive, using the `v-model` directive in HTML.

![Script](doc/assets/code-snapshot-directive-3.png)

The data is updated everywhere referenced when the `v-model` directive is used.
