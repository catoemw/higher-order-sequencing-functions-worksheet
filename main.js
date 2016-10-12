// EXERCISE 1.1

function forEach (array, callback) {
	for (var i = 0; i < array.length; i++) {
		callback(array[i]);
	}
}

var values = [];
var times = 0;

forEach([1,2,3], function (value) {
	times++;
	values.push(value);
});

console.assert(times === 3);
console.assert(values[0] === 1);

// EXERCISE 1.2

function map (array, callback) {
	var result = [];
	for (var i = 0; i < array.length; i++) {
		result.push(callback(array[i]));
	}
	return result;
}

var test = [1, 2, 3];
var mapped = map(test, function (value) {
	return value += value;
}); 

console.assert(test.length === mapped.length);
console.assert(mapped[0] === 2);

// EXERCISE 1.3

function reduce (array, callback) {
	var previous = array[0];
	array = array.slice(1, array.length);
	forEach(array, function (value) {
		previous = callback(previous, value);
	});
	return previous;
}

var reduceArr = [6, 7, 8];
function add (a, b) {
	return a + b;
}

var reduceResult = reduce(reduceArr, add);

console.assert(typeof reduceResult === 'number');
console.assert(reduceResult === 21);

// EXERCISE 1.4

function filter (array, callback) {
	var result = [];
	forEach(array, function (value) {
		if (callback(value)) {
			result.push(value);
		}
	})
	return result;
}

var filterArr = [8, 9, 10];
function lessTen (value) {
	if (value < 10) {
		return true;
	} else {
		return false;
	}
}

var filtered = filter(filterArr, lessTen);

console.assert(filtered.length === 2);
console.assert(filtered[0] === 8);

// EXERCISE 1.5

function sum () {
	var result = 0;
	for (var i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] !== 'number') {
			return NaN;
		}
		result += arguments[i]; 
	}
	return result;
}

console.assert(sum(10 , 11, 12) === 33);
console.assert(typeof sum(1, 2, 'cat') === 'number');

// PART 2

var products = [
    {
        name: 'Pita bread (white)',
        price: 7.5,
        category: 'food'
    },
    {
        name: 'Denim jeans',
        price: 22.95,
        category: 'apparel'
    },
    {
        name: 'Bicycle playing cards',
        price: 5,
        category: 'novelties'
    },
    {
        name: 'Red/blue plaid button-down',
        price: 23.95,
        category: 'apparel'
    },
    {
        name: 'Bic lighter',
        price: 3,
        category: 'novelties'
    },
    {
        name: 'Greek yogurt (strawberry)',
        price: 2.25,
        category: 'food'
    },
    {
        name: 'Organic eggs (dozen)',
        price: 6,
        category: 'food'
    }
];

// EXERCISE 2.1

function avgCat (array, category) {
	var catFilter = filter(array, function (value) {
		if (value.category === category) {
			return true;
		} else {
			return false;
		}
	});
	var catValues = map(catFilter, function (value) {
		return value.price;
	});
	var catSum = reduce(catValues, function (a, b) {
		return a + b;
	});
	var catAvg = catSum / catValues.length;
	return catAvg;
}

console.assert(typeof avgCat(products, 'novelties') === 'number');
console.assert(avgCat(products, 'food') === 5.25);

// EXERCISE 2.2


function productTemplate (product) {
	return '<li>' + product.name + ' - $' + product.price + '</li>';
}

console.assert(typeof productTemplate(products[0]) === 'string');
console.assert(productTemplate(products[0]) === '<li>Pita bread (white) - $7.5</li>');

function render (array) {
	var arrayUL;
	forEach(array, function (value) {
		arrayUL += productTemplate(value);
	});
	return '<ul>' + arrayUL + '</ul>';
}

console.assert(typeof render(products) === 'string');
console.assert(render(products).slice(0, 4) === '<ul>');







