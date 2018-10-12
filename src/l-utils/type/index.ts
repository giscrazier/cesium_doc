/**
 * 对数据类型的操作
 * Created by yyl on 2017/12/8.
 */
const class2type = {};
// Save a reference to some core methods
const coreToString = class2type.toString;

// Populate the class2type map
("Boolean Number String Function Array Date RegExp Object Error".split(" ")).forEach((name) => {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

export function getType( obj:any ) {
	if ( obj == null ) {
		return String( obj );
	}
	// Support: Safari <= 5.1 (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ coreToString.call(obj) ] || "object" :
		typeof obj;
}

export function isFunction(obj:any) {
    return getType(obj) === 'function';
}

export function isBoolean(obj:any) {
    return getType(obj) === 'boolean';
}

export function isNumber(obj:any) {
    return getType(obj) === 'number';
}

export function isString(obj:any) {
    return getType(obj) === 'string';
}

export function isArray(obj:any) {
    return getType(obj) === 'array';
}

export function isDate(obj:any) {
    return getType(obj) === 'date';
}

export function isRegExp(obj:any) {
    return getType(obj) === 'regExp';
}

export function isObject(obj:any) {
    return getType(obj) === 'object';
}