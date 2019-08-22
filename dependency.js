/**
* Check for Popper dependency
* Popper - https://popper.js.org
**/

if (typeof Popper === 'undefined') {
  throw new Error('Bootstrap dropdown require Popper.js (https://popper.js.org)')
}
