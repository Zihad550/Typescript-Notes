# Note-1

## About typescript

- What is typescript: It is a superset of JavaScript created by Microsoft.

  - It allows static strict typing.
  - Extra features interface, enums, tuples generics.
  - Supports modern features(arrow functions, let, const)
  - It is based on the .NET harmony specification.
  - compile time error.

- When we create something new by updating something old it is create superset of the old one.

- What's wrong with JavaScript:

  - Not suitable for large application.
  - Lacks strong typing.
  - Weird inheritance, unfamiliar syntax. Because Variable, array and object works different then other languages.
  - Only errors during runtime.
  - suffers type coercion. Like you can add integer with number, add boolean with number.

- Benefits of Typescript

  - typescript = javascript
  - compiles to javascript - runs everywhere
  - familiar object oriented programming
  - new features work everywhere

- Why we use small letter to declare types and why it is different in declaring function type?
  Object, Array, String, Number are reserved words of JavaScript. So TypeScript cannot use them. That's why it uses object, array, string, number to declare types.  
  But function is a reserved word of JavaScript. That's why when we declare function on TypeScript we write Function. Write in capital letter.

- Difference between undefined and void:
  - undefined: when we don't return anything from a function on JavaScript it returns undefined. undefine means the value is not defined.
  - void: when we don't return anything from a function on TypeScript it returns void. Void means nothing. The value is completely absent.
