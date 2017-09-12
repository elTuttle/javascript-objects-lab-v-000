var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, obj)
  newObj[key] = value
  return newObj
}
