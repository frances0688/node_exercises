const Logger = require("logplease");
const logger = Logger.create("esPar?");

exports.esPar = (num) => {
    return num % 2 == 0
        ? logger.info(`El número es par`)
        : logger.error(`El número no es par`);
};
