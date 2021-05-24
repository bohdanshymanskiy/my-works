/* eslint-disable no-magic-numbers */
function isFunction(functionToCheck) {
	return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

const pipe = (value, ...funcs) => {
	try {
		funcs.forEach((item, index) => {
			if (!isFunction(item)) {
				throw `Provided argument at position ${index} is not a function!`;
			}
		})
	} catch (error) {
		return error;
	}
	return funcs[2](funcs[1](funcs[0](value)));

};

const replaceUnderscoreWithSpace = (value) => value.replace(/_/g, ' ');
const capitalize = (value) =>
	value
		.split(' ')
		.map((val) => val.charAt(0).toUpperCase() + val.slice(1))
		.join(' ');
const appendGreeting = (value) => `Hello, ${value}!`;
