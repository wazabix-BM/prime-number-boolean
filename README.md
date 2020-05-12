# prime-number-boolean

> This package will be used to know if a number is prime or no

# Contact me

If you have any questions do not hesitate to join me on my [`discord server`] (https://discord.gg/ES52WDg)

# Usage (Exemple)

```js
const { isPrime } = require ('prime-number-boolean');


/* => ***
* Function for randomInt ()
*/

function randomInt (x) {
	return Math.floor (Math.random () * Math.floor (x));

}

let test = randomInt (500);

/* => ***
* Expected output between 0 and 500
*/

console.log (isPrime.thisNumber (test));
```

# Other exemple

```js
const { isPrime } = require ('prime-number-boolean');

let test = 5;
let test2 = 22;

console.log (isPrime.thisNumber (test));

/* => ***
* return true
*/

console.log (isPrime.thisNumber (test2));

/* => ***
* return false
*/
```

# MIT License

Copyright (c) 2019 wazabix

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE."# prime-number-boolean" 
