const Qogger = require('./qogger').default;
const chalk = require('chalk');
const debug = require('debug');

// Mock the chalk module to test the output without actual coloring
jest.mock('chalk', () => ({
  red: jest.fn((msg) => msg),
  yellow: jest.fn((msg) => msg),
  bgGray: {
    yellowBright: {
      bold: {
        underline: jest.fn((msg) => msg)
      }
    }
  },
  redBright: jest.fn((msg) => msg),
  bgYellowBright: {
    redBright: {
      underline: {
        bold: jest.fn((msg) => msg)
      }
    }
  },
  gray: jest.fn((...args) => args.join(' ')),
  yellowBright: {
    bgGrey: {
      italic: jest.fn((msg) => msg)
    }
  },
  bgGrey: jest.fn((msg) => msg),
  bgGray: {
    underline: jest.fn((...args) => args.join(' '))
  }
}));

// Mock the debug module to test the debug functionality
jest.mock('debug', () => jest.fn(() => jest.fn()));

// Test suite for the Qogger library
describe('Qogger', () => {
  let logger;

  // Initialize a new logger instance before each test
  beforeEach(() => {
    logger = Qogger('testLogger');
  });

  // Test the log method
  test('log method should call console.log with gray message', () => {
    console.log = jest.fn();
    logger.log('test message');
    expect(console.log).toHaveBeenCalledWith('test message');
  });

  // Additional tests for other methods can be added here
});