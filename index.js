/**
 * Created by Dylan on 15/9/22.
 */

"use strict";

const STRING = "string";
const NUMBER = "number";
const BOOLEAN = "boolean";
const NULL = "null";
const UNDEFINED = "undefined";
const SYMBOL = "symbol";
const OBJECT = "object";
const FUNCTION = "function";

let DataType = {
    isObject(param) {
        return param !== null  && (typeof param === OBJECT || typeof param === FUNCTION);
    },

    isString(param) {
        return typeof param === STRING;
    },

    isNumber(param) {
        return typeof param === NUMBER;
    },

    isBoolean(param) {
        return typeof param === BOOLEAN;

    },

    isSymbol(param) {
        return typeof param === SYMBOL;
    },

    isFunction(param) {
        return typeof param === FUNCTION;
    },

    isArray(param) {
        return Array.isArray(param);
    },

    getPrimitiveDataType(param) {
        var result = OBJECT;

        switch (typeof param) {
            case OBJECT:
                if (param === null) {
                    result = NULL;
                }
                break;
            case STRING:
                result = STRING;
                break;
            case NUMBER:
                result = NUMBER;
                break;
            case UNDEFINED:
                result = UNDEFINED;
                break;
            case BOOLEAN:
                result = BOOLEAN;
                break;
            case SYMBOL:
                result = SYMBOL;
                break;
            default :
                // do nothing
        }

        return result;
    }
};

module.exports = DataType;