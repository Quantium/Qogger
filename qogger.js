import chalk from 'chalk';
import debug from 'debug';

/**
 * Logs a warning message with different levels of severity.
 * @param {string} msg - The warning message to log.
 * @param {number} [level=1] - The severity level of the warning (1, 2, or 3).
 */
const warning_f = (msg, level = 1) => {
  switch (level) {
    case 1:
      console.warn("⚠️", chalk.red(msg));
      break;
    case 2:
      console.warn(" ⚠️", chalk.yellow(msg));
      break;
    case 3:
      console.log();
      console.warn("   ⚠️", chalk.bgYellowBright.redBright.underline.bold(msg), "⚠️");
      console.log();
      break;
    default:
      console.warn(chalk.yellow(msg));
      break;
  }
};

/**
 * Logs an error message with an optional error object.
 * @param {string} message - The error message to log.
 * @param {Error} [e] - An optional error object to log.
 */
const error_f = (message, e = undefined) => {
  console.log();
  console.error("🚨", chalk.redBright(message), "🚨");
  if (e) console.error("   👉", chalk.bgYellowBright.redBright.underline.bold(e));
  //process.exit(1);
};

/**
 * Factory function to create a logger instance.
 * @param {string} name - The name of the logger instance.
 * @returns {Object} The logger instance with various logging methods.
 */
export default function createLogger(name) {
  return {
    /**
     * Logs a message to the console.
     * @param {...any} args - The message or messages to log.
     */
    log: (...args) => console.log(chalk.gray(...args)),

    /**
     * Logs a chat message with a name and optional room.
     * @param {string} name - The name of the person sending the message.
     * @param {string} message - The chat message.
     * @param {string} [room=""] - The optional room name.
     */
    chat: (name, message, room = "") => console.log(room, chalk.bgGrey(name), "💬", chalk.yellowBright.bgGrey.italic(message)),

    /**
     * Logs a warning message.
     * @param {string} msg - The warning message to log.
     * @param {number} [level=1] - The severity level of the warning (1, 2, or 3).
     */
    warning: warning_f,

    /**
     * Logs an error message.
     * @param {string} message - The error message to log.
     * @param {Error} [e] - An optional error object to log.
     */
    error: error_f,

    /**
     * Logs a highlighted message.
     * @param {...any} args - The message or messages to log.
     */
    highlight: (...args) => console.log("📢", chalk.bgGray.underline(...args)),

    /**
     * Creates a debug instance.
     * @returns {Function} The debug instance.
     */
    debug: debug(name)
  };
}