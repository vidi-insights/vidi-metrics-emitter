![Banner][]
# vidi-metrics-emitter

- __Lead Maintainer:__ [Jane Quinn][Lead]
- __Sponsor:__ [nearForm][Sponsor]


Wrapper to emit metrics to vidi from javascript code

- __Work in progress__ This module is currently a work in progress.

## Install
To install the system locally, simply clone the repo,

```
git clone https://github.com/vidi-insights/vidi-metrics-emitter
```

## Running as a plugin 
Emitter takes JSON message adds time stamp, sends to newly created server and closes connection. To use as a plugin, install via npm:
```
npm install vidi-metrics-emitter
```
and use in your code :

```
var Emitter = require("vidi-metrics-emitter")
...
emitter.emit(goodJson)
...

```

## Demo
To run demo version simply use. 

```
npm run demo
```

It will create a dummy UDP server, when receives message sends it out through emitter.



## Contributing
The [nearForm][Org] organization encourages __open__ and __safe__ participation.

- [Code of Conduct][CoC]

If you feel you can help in any way, be it with documentation, examples, extra testing, or new
features please get in touch.

## License
Copyright (c) 2016, Jane Quinn and other contributors.
Licensed under [MIT][].



[Banner]: https://raw.githubusercontent.com/vidi-insights/org/master/assets/vidi-banner.png
[Lead]: http://github.com/CodeWriterWriter
[Sponsor]: http://www.nearform.com/
[Org]: https://github.com/nearform
[CoC]: ./CoC.md
[MIT]: ./LICENSE
