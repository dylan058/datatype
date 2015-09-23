/**
 * Created by Dylan on 15/9/22.
 */

jest.dontMock('../index');

const cases = [
    [
        // 0: getPrimitiveDataType
        {
            input: null,
            output: 'null',
            string: 'null'
        }, {
            input: {'obj': 123},
            output: 'object',
            string: '{\'obj\': 123}'
        }, {
            input: 8888,
            output: 'number',
            string: '8888'
        }, {
            input: '123',
            output: 'string',
            string: '123'
        }, {
            input: false,
            output: 'boolean',
            string: 'false'
        }, {
            input: Symbol('DataTypes'),
            output: 'symbol',
            string: 'Symbol(\'DataTypes\')'
        }, {
            input: undefined,
            output: 'undefined',
            string: 'undefined'
        }, {
            input: NaN, // Not-A-Number
            output: 'number',
            string: 'NaN'
        }, {
            input: {},
            output: 'object',
            string: '{}'
        }, {
            input: Infinity,
            output: 'number',
            string: 'Infinity'
        }
    ], [
        // 1: isNumber
        {
            input: 12.22,
            output: true,
            string: '12.22'
        }, {
            input: 1e12345,
            output: true,
            string: '1e12345'
        }, {
            input: '561',
            output: false,
            string: '561'
        }, {
            input: NaN,
            output: true,
            string: 'NaN'
        }, {
            input: -Infinity,
            output: true,
            string: '-Infinity'
        }, {
            input: {'123': 321},
            output: false,
            string: '{\'123\': 321}'
        }, {
            input: null,
            output: false,
            string: 'null'
        }, {
            input: undefined,
            output: false,
            string: 'undefined'
        }
    ], [
        // 2: isString
        {
            input: 'a string',
            output: true,
            string: '\'a string\''
        }, {
            input: "another string",
            output: true,
            string: '"another string"'
        }, {
            input: `${'string'} in string`,
            output: true,
            string: '`${\'string\'} in string`'
        }, {
            input: '',
            output: true,
            string: '\'\''
        }, {
            input: 123,
            output: false,
            string: '123'
        }, {
            input: {string: 'string'},
            output: false,
            string: '{string: \'string\'}'
        }, {
            input: null,
            output: false,
            string: 'null'
        }, {
            input: undefined,
            output: false,
            string: 'undefined'
        }
    ], [
        // 3: boolean
        {
            input: true,
            output: true,
            string: 'true'
        }, {
            input: false,
            output: true,
            string: 'false'
        }, {
            input: 'true',
            output: false,
            string: '\'true\''
        }, {
            input: function() {},
            output: false,
            string: 'function() {}'
        }, {
            input: null,
            output: false,
            string: 'null'
        }, {
            input: undefined,
            output: false,
            string: 'undefined'
        }, {
            input: 0,
            output: false,
            string: '0'
        }, {
            input: '',
            output: false,
            string: '\'\''
        }
    ], [
        // 4: symbol
        {
            input: null,
            output: false,
            string: 'null'
        }, {
            input: undefined,
            output: false,
            string: 'undefined'
        }, {
            input: {},
            output: false,
            string: '{}'
        }, {
            input: Symbol(),
            output: true,
            string: 'Symbol()'
        }, {
            input: Symbol('test'),
            output: true,
            string: 'Symbol(\'test\')'
        }, {
            input: Symbol.iterator,
            output: true,
            string: 'Symbol.iterator'
        }, {
            input: Object(Symbol('obj')),
            output: false,
            string: 'Object(Symbol(\'obj\'))'
        }
    ], [
        // 5: object
        {
            input: [],
            output: true,
            string: '[]'
        }, {
            input: {},
            output: true,
            string: '{}'
        }, {
            input: function() {},
            output: true,
            string: 'function() {}'
        }, {
            input: Symbol(),
            output: false,
            string: 'Symbol()'
        }, {
            input: Number,
            output: true,
            string: 'Number'
        }, {
            input: Boolean(true),
            output: false,
            string: 'Boolean(true)'
        }, {
            input: new Boolean(false),
            output: true,
            string: 'new Boolean(false)'
        }, {
            input: null,
            output: false,
            string: 'null'
        }, {
            input: /\s+/,
            output: true,
            string: '/\\s+/'
        }
    ], [
        // 6: function
        {
            input: function() {},
            output: true,
            string: 'function() {}'
        }, {
            input: Number,
            output: true,
            string: 'Number'
        }, {
            input: Boolean(true),
            output: false,
            string: 'Boolean(true)'
        }, {
            input: new Function(),
            output: true,
            string: 'new Function()'
        }, {
            input: Object.assign({}, new Function()),
            output: false,
            string: 'Object.assign({}, new Function())'
        }, {
            input: isFinite,
            output: true,
            string: 'isFinite'
        }
    ], [
        // 7: array
        {
            input: [],
            output: true,
            string: '[]'
        }, {
            input: new Array(),
            output: true,
            string: 'new Array()'
        }, {
            input: {0: 'array', 1: 'like', length: 2},
            output: false,
            string: '{0: \'array\', 1: \'like\', length: 2}'
        }, {
            input: new ArrayBuffer(5),
            output: false,
            string: 'new ArrayBuffer(5)'
        }, {
            input: Array.prototype,
            output: true,
            string: 'Array.prototype'
        }, {
            input: { __proto__: Array.prototype },
            output: false,
            string: '{ __proto__: Array.prototype }'
        }, {
            input: Object.assign([], {a:1}),
            output: true,
            string: 'Object.assign([], {a:1})'
        }, {
            input: Object.assign({a:1}, []),
            output: false,
            string: 'Object.assign({a:1}, [])'
        }
    ]
];

describe('datatype', function () {
    cases[0].forEach(function (testCase) {
        it('judges ' + testCase.string + ' ' + testCase.output, function () {
            var DataType = require('../index');
            expect(DataType.getPrimitiveDataType(testCase.input)).toBe(testCase.output);
        });
    });
});

describe('datatype', function () {
    cases[1].forEach(function (testCase) {
        it((testCase.output ? 'judges ' : 'does not judge ') + testCase.string + ' a number', function () {
            var DataType = require('../index');
            expect(DataType.isNumber(testCase.input)).toBe(testCase.output);
        });
    });
});

describe('datatype', function () {
    cases[2].forEach(function (testCase) {
        it((testCase.output ? 'judges ' : 'does not judge ') + testCase.string + ' a string', function () {
            var DataType = require('../index');
            expect(DataType.isString(testCase.input)).toBe(testCase.output);
        });
    });
});

describe('datatype', function () {
    cases[3].forEach(function (testCase) {
        it((testCase.output ? 'judges ' : 'does not judge ') + testCase.string + ' boolean', function () {
            var DataType = require('../index');
            expect(DataType.isBoolean(testCase.input)).toBe(testCase.output);
        });
    });
});

describe('datatype', function () {
    cases[4].forEach(function (testCase) {
        it((testCase.output ? 'judges ' : 'does not judge ') + testCase.string + ' a symbol', function () {
            var DataType = require('../index');
            expect(DataType.isSymbol(testCase.input)).toBe(testCase.output);
        });
    });
});

describe('datatype', function () {
    cases[5].forEach(function (testCase) {
        it((testCase.output ? 'judges ' : 'does not judge ') + testCase.string + ' an object', function () {
            var DataType = require('../index');
            expect(DataType.isObject(testCase.input)).toBe(testCase.output);
        });
    });
});

describe('datatype', function () {
    cases[6].forEach(function (testCase) {
        it((testCase.output ? 'judges ' : 'does not judge ') + testCase.string + ' a function', function () {
            var DataType = require('../index');
            expect(DataType.isFunction(testCase.input)).toBe(testCase.output);
        });
    });
});

describe('datatype', function () {
    cases[7].forEach(function (testCase) {
        it((testCase.output ? 'judges ' : 'does not judge ') + testCase.string + ' a array', function () {
            var DataType = require('../index');
            expect(DataType.isArray(testCase.input)).toBe(testCase.output);
        });
    });
});