if (process.env.NODE_ENV === 'prod') {
  module.exports = require('./config.prod');
} else {
  // Этот файл добавлен в .gitignore
  module.exports = require('./config.dev');
}
