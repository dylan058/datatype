> DON'T PANIC!

`datatype-checker` is a simple module with only two api for data type checking in JavaScript;

# INSTALLATION

```bash
mnpm install @mtfe/datatype-checker
```

# USAGE

```js
var datatype = require('@mtfe/datatype-checker');

var obj = {'i': 'am', 'an': 'object'};

console.log(datatype.getPrimitiveDataType(obj));
// "object"

console.log(datatype.isObject(obj));
// true
```

# APIS

- `getPrimitiveDataType` gets primitive data type of the parameter. And the result is in the set of `["string", "number", "boolean", "null", "undefined", "symbol", "object"]`.
- `isObject` returns `true` if the parameter's data type is object, otherwise `false`. Please note that `null` is **not** an object and a function is an object.
- `isString` returns `true` if the parameter's data type is string, otherwise `false`.
- `isNumber` returns `true` if the parameter's data type is number, otherwise `false`.
- `isBoolean` returns `true` if the parameter's data type is boolean, otherwise `false`.
- `isSymbol`returns `true` if the parameter's data type is symbol, otherwise `false`.
- `isFunction` returns `true` if the parameter's data type is function, otherwise `false`.
- `isArray` returns `true` if the parameter is an array, otherwise `false`.

# OTHER

Contact me if you have any question. Good luck!
