// write a function that takes as input an integer ranging from 0-99, it should output the english equvalent of the integer value (e.g. 12 - Twelve; 73 - Seventy three)

/*
1 one        ten
2 two        twenty
3 three      thirty
4 four       forty
5 five       fifty
6 six        sixty
7 seven      seventy
8 eight      eighty
9 nine       ninety
*/

class NumberTranslator {
  constructor () {
    this.map = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve'}
  }

  translateToEnglish (input) {
    var output

		// , 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'
    if (input <= 12) {
      output = this.map[input]
    } else if (input <= 15) {
      output = this.addStringPrefixForCategory2Numbers(input)
    } else if (input <= 19) {
      output = this.addStringPrefixForCategory3Numbers(input)
    }

    var capitalizedOutput = output.charAt(0).toUpperCase() + output.slice(1)
    return capitalizedOutput
  }

  addStringPrefixForCategory2Numbers (num) {
    var string = num.toString()
    var output
    if (string.indexOf('3') !== -1) {
      output = 'thir'
    } else if (string.indexOf('4') !== -1) {
      output = 'four'
    } else if (string.indexOf('5') !== -1) {
      output = 'fif'
    }
    return output + 'teen'
  }

  addStringPrefixForCategory3Numbers (num) {
    var keyDigit = parseInt(num.toString().split('')[1])
    var output = this.map[keyDigit]
    console.log(output)
    return output + 'teen'
  }
}

module.exports = NumberTranslator
