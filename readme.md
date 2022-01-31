# Note-4

## Explicit & union types

- explicitly declare types of variable, object and array

```
const a:number = 1;
const b:string = 'jehad';
const c:boolean = true;
const d:object;
const e:{name:string, age:number, boy:boolean};
const f:[]; // array for all type
const g:string[]; // array of string
const h:number[]; // array of number
const i:boolean[]; // array of boolean
```

- union types = you can declare multiple types for a variable or object, array

```
const a: number | string; // variable of string or number
const b: (number | string | boolean)[];/array of number, string and boolean

```
