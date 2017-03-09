class StringCollapser {
  collapse (string) {
    var array = string.split('')
    var output = []
    for (var i = 0; i <= array.length; i++) {
      if (array[i] !== array[i - 1]) {
        output.push(array[i])
      }
    }
    return output.join('')
  }
}

module.exports = StringCollapser
