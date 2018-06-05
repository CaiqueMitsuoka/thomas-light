module.exports = function() {
  if(process.env.LIGHT_LIGHTER_ENV) {
    return require('./lib/light-lighter')
  } else {
    return require('./lib/light-lighter-mock')
  }
}()
