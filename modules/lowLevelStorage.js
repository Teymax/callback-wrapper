let lowLewelStorage = {
  a: null,
  b: null,
  c: null,
  get: function (key, callback) {
    let error = null
    if (this[key] === undefined) error = `Object don't have property ${key}`
    return callback(error, this[key])
  },
  put (key, value, callback) {
    let error = null
    let message = this[key] === undefined ? `Field ${key} created & value is written` : `Value in field ${key} updated`
    // if (this[key] === undefined) error = `Object don't have property ${key}`
    this[key] = value
    return callback(error, message)
  },
  del (key, callback) {
    let error = null
    let message = `Value in field ${key} deleted`
    if (this[key] === undefined) error = `Object don't have property ${key}`
    this[key] = null
    return callback(error, message)
  }
}

module.exports = lowLewelStorage
