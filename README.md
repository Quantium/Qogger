# Qogger

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/qogger-library.svg)](https://badge.fury.io/js/qogger-library)

Qogger is a versatile logging library for Node.js applications, providing colorful console output and debug capabilities.

## Features

- Colorful console output using [chalk](https://github.com/chalk/chalk)
- Debugging support using [debug](https://github.com/visionmedia/debug)
- Various logging levels: log, chat, warning, error, highlight

## Installation

Install the library using npm:

```bash
npm install qogger-library
```

## Usage

Import the `Qogger` library and create a logger instance:

```javascript
import Qogger from 'qogger-library';

const logger = Qogger('myLogger');

logger.log('This is a log message');
logger.chat('user', 'Hello, world!', 'room1');
logger.warning('This is a warning message', 2);
logger.error('This is an error message');
logger.highlight('This is a highlighted message');
logger.debug('This is a debug message');
```

## API

### `Qogger(name)`

Creates a new logger instance.

#### Parameters

- `name` (string): The name of the logger instance.

#### Returns

- An object with the following methods:

### Methods

#### `log(...args)`

Logs a message to the console.

#### `chat(name, message, room = "")`

Logs a chat message with a name and optional room.

#### `warning(msg, level = 1)`

Logs a warning message with different levels of severity.

#### `error(message, e = undefined)`

Logs an error message with an optional error object.

#### `highlight(...args)`

Logs a highlighted message.

#### `debug(message)`

Creates a debug instance.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request. see the [CONTRIBUTING.md](CONTRIBUTING.md) file for details.

### Version Management

When contributing to this project, be aware that the npm publish workflow automatically patches the version number in `package.json` and `package-lock.json`. After pushing your changes:

```bash
git push origin main
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
