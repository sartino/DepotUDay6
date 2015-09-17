var library = (function(){
	return {
		// Utility --- Complete Functions Below
		identity : function(val) {
			return val;
		},

		// Collections --- Complete Functions Below
		each : function(list, iterator) {
			return iterator;
		},

		filter : function(list, test) {
			var even = [];
			var odd = [];
			for (var i = 0; i < list.length; i++) {
				if (test(list[i]) === true) {
					even.push(list[i]);
				} else {
					odd.push(list[i]);
				}
			}
			return even;
			return odd;
		},

		reject : function(list, test) {
			var even = [];
			var odd = [];
			for (var i = 0; i < list.length; i++) {
				if (test(list[i]) === true) {
					even.push(list[i]);
				} else {
					odd.push(list[i]);
				}
			}
			return odd;
			return even;
		},

		map : function(list, iterator) {
			var odd = [];
			for (var i = 0; i < list.length; i++) {

				odd.push(iterator(list[i])); 
			}
			return odd;
		},

		pluck : function(list, key) {
			return this.map(list, function(item){
				return item[key];
			});
		},
		reduce : function(list, iterator, accumulator) {
			if (accumulator === undefined) {
				accumulator = list[0];
			}	
			for (var i = 0; i < list.length; i++) {
				accumulator = iterator(list[i],accumulator);

			}
			return accumulator;
		},

		every : function(list, iterator) {
			//2 `if's` and a `for`
			var x = [];
			var y = [];
			for (var i = 0; i < list.length; i++) {
				if (list[i] === true) {
					return true;
				} else {
					return false;
				}
			}
			return x;
			return y;
		},

		some : function(list, iterator) {
			var x = [];
			var y = [];
			for (var i = 0; i < list.length; i++) {
				if (list[i] === true) {
					return true;
				} else {
					return false;
				}
			}
			return x;
			return y;
		},

		contains : function(list, target) {},

		// Advanced Collections --- Complete Functions Below
		shuffle : function(array) {},

		invoke : function(list, methodName, args) {},

		sortBy : function(list, iterator) {},

		// Objects --- Complete Functions Below
		extend : function(obj) {},

		defaults : function(obj) {},

		// Arrays --- Complete Functions Below
		first : function(array, n) {
			return n === undefined ? array[0] : array.slice(0, n);
		},

		last : function(array, n) {
			if (n > array.length) {
                // We passed in a number greater than the length of the array.
				// So we should just return the whole array.
                return array;
            } else {
                if (n === undefined) {
                    // If we didn't pass a number n, return the last element
					// of the array.
                    return array[array.length - 1];
                } else {
                    // Otherwise (aka we did pass a number in), return the last
					// n elements of the array (last 3 elements, last 4, etc.)
                    return array.slice(array.length - n);
                }
            }
			//return array.slice(-1)[0];
		},

		indexOf : function(array, target){
			for (var i = 0; i < array.length; i++) {
				var element = array[i];
				if (element === target) {
					return (i);
				}
			} return -1;
		},

		uniq : function(array) {
			return array.filter(function(x,i) {
				return array.indexOf(x) === i
			})
		},

		// Advanced Arrays --- Complete Functions Below
		zip : function() {},

		flatten : function(nestedArray, result) {},

		intersection : function() {},

		difference : function(array) {},

		// Functions --- Complete Functions Below
		once : function(func) {
			var steve = true;
		return function () {
			if (steve === true) {
				steve = false;
			} else {
				func();
			}
		}
			
		},

		memoize : function(func) {},

		delay : function(func, wait) {}
	}
})();




