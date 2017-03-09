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
  translateToEnglish (string) {
		var output = 'one'
		var capitalizedOutput = output.charAt(0).toUpperCase() + output.slice(1)
		return capitalizedOutput
  }
}

module.exports = NumberTranslator
