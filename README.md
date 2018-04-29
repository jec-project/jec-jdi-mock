# JEC JDI-MOCK Project

JEC JDI is a [JavaScript Enterprise Container][jec-url] project mocking functionalities for testing objects built over the JavaScript Dependency Injection API (JDI).

[![][jec-logo]][jec-url]

## Requirements

JEC JDI-MOCK needs the following system parameters in order to work correctly:

- Node 6+
- npm 3+
- TypeScript 2+

## Installation

Set up the JEC JDI-MOCK module with:

```bash
$ npm install jec-jdi-mock --save
```

## Using Components

All JEC JDI-MOCK components have to be imported with the ES6 syntax:

```javascript
import { TestStats } from "jec-juta";
import { Tiger, TigerFactory } from "jec-tiger";
import { JdiMock } from "jec-jdi-mock";

const factory:TigerFactory = new TigerFactory();
const tiger:Tiger = factory.create();
tiger.beforeProcess(()=> {
  JdiMock.getInstance().createContext();
});
tiger.process((stats:TestStats)=> {
  if(stats.error) console.error(stats.error);
  else {
    console.log(
`Test stats:
- test lookup process duration: ${stats.time}
- number of test suites: ${stats.numTestSuites}
- number of disabled test suites: ${stats.numDisabledTestSuites}
- number of synchronous test cases: ${stats.numTests}
- number of asynchronous test cases: ${stats.numAsyncTests}
- number of disabled test cases: ${stats.numDisabledTests}`
    );
  }
});
```

For a complete list of available components, please refer to the [API Reference](#api-reference) documentation.

## Running Tests

To execute all unit tests, use:

```bash
$ grunt test
```

## API Reference

The API Reference documentation is not included into the JEC JDI-MOCK node module. To build the API reference documentation, use:

```bash
$ grunt doc
```

Documentation will be generated in the `docs/api-reference` repository.
The online version of the  API reference documentation will be available soon at the JEC Website.

The documentation generator is [TypeDoc](http://typedoc.org/)

## Update Release Notes

**Current stable release:** [1.0.0](CHANGELOG.md#jec-jdi-mock-1.0.0)
 
For a complete listing of release notes for all JEC JDI-MOCK update releases, see the [CHANGELOG](CHANGELOG.md) file. 

## License
This JEC JDI-MOCK Project is licensed under Apache 2.0. Full license text is available in [LICENSE](LICENSE).

```
Copyright 2016-2018 Pascal ECHEMANN.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

[jec-url]: http://jecproject.org
[jec-logo]: https://raw.githubusercontent.com/pechemann/JEC/master/assets/jec-logos/jec-logo.png