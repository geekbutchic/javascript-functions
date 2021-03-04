# Javascript Functions
## Notable Functions

### Functions Name : `triple` | Code Line: 1
* This functions takes in a string and repeats it designated by the input.
* Fot this example the string will be repeated X 3's.
* This functions is possible by the `.repeat()` method.
```javascript
ex: str.repeat(3);
```
### Functions Name : `squared` | Code Line: 10
* This functions squares any number.
* In this example it takes in a numbered parameter and square it.
* The method used is `Math.sqrt()`
```javascript 
ex: Math.sqrt(num);
```
### Functions Name : `getFirstCharacter` | Code Line: 20
* This function returns the first character.
* Uses the method `str[0]`.
* It's important to note the use of brackets when working with indices/indexes.
* Also the 0 based counting.
```javascript
ex: str[0];
```
### Function Name : `getLastCharacter` | Code Line: 29
* This function returns the last character of a given string.
* Uses the `str[str.length - 1]`.
* This breaks down to str (string from parameter) / strings length -1.
```javascript 
ex: str[str.length - 1];
```
### Function Name : `getOneCharacter` | Code Line: 39
* This function returns an arbitrary character based on the desired index.
* Two parameters are taken `(str, i)` a string and a number.  Here we are calling i (index) a number.
* This function is made possible by using str[i];
```javascript
ex: str[i];
```
### Function Name : `getTwoCharacters` | Code Line 48
* This function returns two characters. 
* It takes in a string and two numbers and returns them.
* This function is made possible using `str[i]` twice.
```javascript
ex: str[i] + str[i];
```
### Function Name : `makeCapitalized` | Code Line 57
* This functions returns any given string and makes capitalized.
* The method being used is `str.toUpperCase()`.
* Two options are being used.
```javascript
ex: str.toUpperCase();
```
### Function Name : `getInitials` | Code Line 66
* This functions returns initials from a given string with a space.
* This functions also accounts for lower cased characters and returns them back capitalized with period after initial.
```javascript
ex: str[0] + '.' + str[str.indexOf(' ') + 1] + '.';
```
### Function Name : 'isItMedium` | Code Line 77
* if else function 
* This function if given a string between 10 and 20 characters inclusive returns "That's a regular sized string".
* Inclusive less than or equal too.
```javascript 
if (str.length >= 10 && str.length <= 20) {
    return "That's a regular sized string!"
}
```
### Function Name : `descendingOrder` | Code Line 90
*  Reverses a string or reverses number.
*  Negative number should remain negative.
*  Any leading zeros should be removed.
*  The function can accept floats or integers.
*  The function will return integers as integers.
```javascript 
parseFloat(num)
.toString()
.split(' ')
.reverse()
.join(' ')
Math.sign(num)
```
* `Convert` `num.toString()` converts the given number into a String. We do this so we can use the split function.
* `Split` the string into an Array `num.split()`
* This is done so the Array reverse function (which does not work on a String)
* `Reverse` the Array
* `num.reverse()` reverses the order of the items in the array.
* `Join` it back into a string.
* `num.join()` reassembles the reversed characters into a String.
* `Parse` the input value into a floating point number.

### Function Name : `fizzy` | Code Line 98
* This function returns `Fizz Buzz` when divisible by 3 and 5.
* Returns `Buzz` when divisible by 5.
* Returns `Fizz` when divisible by 3.
```javascript 
if (num % 15 === 0)
```
* Use the modulus operator divisible by 15 - mathematical trick.
* Or append method.

### Function Name : `evenOrOdd` | Code Line 
* This function returns even or odd.
* Uses an arrow function with a ternary.
```javascript 
return (number % 2 === 0) ? 'Even' : 'Odd';
```
### Function Name: `oneThruTwenty` | Code Line 
* Function prints out numbers from 1-20.
* Second prints out numbers 1-20 that are divisible by 3.
```javascript 
for (let i = 1; i <= 20; i++)
```
### Function Name: `sentence` | Code Line: 152
* Function prints out the characters passed into individually.
```javascript 
for (value of str) -> for of loop 
```
