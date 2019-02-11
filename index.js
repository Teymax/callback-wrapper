let lowLevelStorage = require('./modules/lowLevelStorage')
let wrap = require('./modules/wrapper')

let highLevelStorage = wrap(lowLevelStorage)
highLevelStorage.batchPut([{key: 'a', value: 1}, {key: 'z', value: 12}])
  .then(console.log)
  .catch(err => console.log(err))

// test get function
highLevelStorage.get('z')
  .then(console.log)
  .catch(err => console.log(err))

// test put function 
highLevelStorage.put('a', 'Hello world')
  .then(console.log)
  .catch(err => console.log(err))
highLevelStorage.get('a')
.then(console.log)
.catch(err => console.log(err))

// test del function
highLevelStorage.del('a')
  .then(console.log)
  .catch(err => console.log(err))
highLevelStorage.get('a')
  .then(console.log)
