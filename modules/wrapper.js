let wrap = function (obj) {
  let highLevel = {}
  for(let key in obj) {
    if (typeof obj[key] === 'function') {
      highLevel[key] = function () {
        return new Promise((resolve, reject) => {
          obj[key].apply(this, [...arguments, (error, result) => {
            if (error) reject(error)
            resolve(result)
          }])
        })
      }
    } else {
      highLevel[key] = obj[key]
    }
  }
  highLevel.batchPut = function (objArray) {
    let arrayOfPromises = []; 
    [...objArray].forEach(item => {
      arrayOfPromises = [...arrayOfPromises, highLevel.put(item.key, item.value)]
    })
    return Promise.all(arrayOfPromises) 
  }
  return highLevel
}

module.exports = wrap
