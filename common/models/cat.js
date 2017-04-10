'use strict';

module.exports = function(Cat) {

	Cat.observe('after save', function(ctx, next) {
		console.log('after save being run');
		console.log(ctx.instance);
		next();
	});

	Cat.observe('before delete', function(ctx, next) {
		console.log('before delete being run');
		console.log(ctx.where);
		next();
	});

};

