# Note-9

## Module System

- export ,import: to use something from another file use import. To be used into another file use export.

- then you have to do two things to make it moduler.
  - edit tsconfig file
    - target = es6
    - module = es2015
    - edit your index.html script tag write
      `<script type="module" src="./output/script.js" ></script>`
    - the trickiest thing: You have to import .js file not .ts file on your main ts file
