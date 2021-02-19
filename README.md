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
### Functions Name : `getFirstCharacter` | Code Line: 19
* This function returns the first character.
* Uses the method `str[0]`.
* It's important to note the use of brackets when working with indices/indexes.
* Also the 0 based counting.
```javascript
ex: str[0];
```
### Function Name : `getLastCharacter` | Code Line: 26
* This function returns the last character of a given string.
* Uses the `str[str.length - 1]`.
* This breaks down to str (string from parameter) / strings length -1.
```javascript 
ex: str[str.length - 1];
```
### Function Name : `getOneCharacter` | Code Line: 33
* This function returns an arbitrary character based on the desired index.
* Two parameters are taken `(str, i)` a string and a number.  Here we are calling i (index) a number.
* This function is made possible by using str[i];
```javascript
ex: str[i];
```
### Function Name : `getTwoCharacters` | Code Line 40
* This function returns two characters. 
* It takes in a string and two numbers and returns them.
* This function is made possible using `str[i]` twice.
```javascript
ex: str[i] + str[i];
```
### Function Name : 'makeCapitalized` | Code Line 51
* This functions returns any given string and makes capitalized.
* The method being used is `str.toUpperCase()`.
* Two options are being used.
```javascript
ex: str.toUpperCase();
```
### Function Name : `getInitials` | Code Line 
* This functions returns initials from a given string with a space.
* This functions also accounts for lower cased characters and returns them back capitalized with period after initial.
```javascript
ex: str[0] + '.' + str[str.indexOf(' ') + 1] + '.';
```
