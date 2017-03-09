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
  translateToEnglish (input) {
    var map = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve'}

    var output = map[input]
    var capitalizedOutput = output.charAt(0).toUpperCase() + output.slice(1)
    return capitalizedOutput
  }
}

module.exports = NumberTranslator
