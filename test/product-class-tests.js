var assert = require('assert'),
    chalk = require('chalk'),
	db = require('../modules/products.js');

const strId = 'id1', category = 'category1', title = 'title1', description = 'description one';
const obj = {'id':'OU812?','category':'Drinkable','title':'Gene Replenisher','description':'Codes DNA to regenerate damaged genes'};

console.log(chalk.cyan.bold('\t\t\Product Class Test Cases'));

describe(chalk.white.bold('Array - Dummy Test'), function() {
	describe('#indexOf()', function() {
		it(chalk.magenta.bold('should return -1 when the value is not present'), function() {
			assert.equal(-1, [1,2,3].indexOf(4));
		});
	});
});

describe(chalk.white.bold('Array - Dummy Test'), function() {
	describe('#elementAt()', function() {
		it(chalk.magenta.bold('should return b'), function() {
			assert.equal('b', ['a','b','c'][1]);
		});
	});
});

 /* 
    @param String ID
    @param String category
    @param String title
    @param String description
*/

describe(chalk.yellow.bgGreen('Product Class Test'), () => {
    describe(chalk.white.bold('Testing valid constructor arguments'), () => {
        it(chalk.magenta.bold.bgBlack('Should return a new Product object'), () => {
            var newProduct = db.create(strId, category, title, description);
            assert.equal(strId, newProduct.id);
            assert.equal(category,newProduct.category);
            assert.equal(title,newProduct.title);
            assert.equal(description,newProduct.description);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Class Test'), () => {
    describe(chalk.white.bold('Testing constructor null first argument'), () => {
        it(chalk.magenta.bold.bgBlack('Should throw an Error'), () => {
            assert.throws(
				() => {db.create(null, category, title, description)},
				/./
			);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Class Test'), () => {
    describe(chalk.white.bold('Testing constructor null second argument'), () => {
        it(chalk.magenta.bold.bgBlack('Should throw an Error'), () => {
            assert.throws(
				() => {db.create(strId, null, title, description)},
				/./
			);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Class Test'), () => {
    describe(chalk.white.bold('Testing constructor null third argument'), () => {
        it(chalk.magenta.bold.bgBlack('Should throw an Error'), () => {
            assert.throws(
				() => {db.create(strId, category, null, description)},
				/./
			);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Class Test'), () => {
    describe(chalk.white.bold('Testing constructor null fourth argument'), () => {
        it(chalk.magenta.bold.bgBlack('Should throw an Error'), () => {
            assert.throws(
				() => {db.create(strId, category, title, null)},
				/./
			);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Class Test'), () => {
    describe(chalk.white.bold('Testing constructor empty first argument'), () => {
        it(chalk.magenta.bold.bgBlack('Should throw an Error'), () => {
            assert.throws(
				() => {db.create('', category, title, description)},
				/./
			);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Class Test'), () => {
    describe(chalk.white.bold('Testing constructor empty second argument'), () => {
        it(chalk.magenta.bold.bgBlack('Should throw an Error'), () => {
            assert.throws(
				() => {db.create(strId, '', title, description)},
				/./
			);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Class Test'), () => {
    describe(chalk.white.bold('Testing constructor empty third argument'), () => {
        it(chalk.magenta.bold.bgBlack('Should throw an Error'), () => {
            assert.throws(
				() => {db.create(strId, category, '', description)},
				/./
			);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Class Test'), () => {
    describe(chalk.white.bold('Testing constructor empty fourth argument'), () => {
        it(chalk.magenta.bold.bgBlack('Should throw an Error'), () => {
            assert.throws(
				() => {db.create(strId, category, title, '')},
				/./
			);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Class Test'), () => {
    describe(chalk.white.bold('Testing constructor not a String first argument'), () => {
        it(chalk.magenta.bold.bgBlack('Should throw an Error'), () => {
            assert.throws(
				() => {db.create(obj, category, title, description)},
				/./
			);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Class Test'), () => {
    describe(chalk.white.bold('Testing constructor not a String second argument'), () => {
        it(chalk.magenta.bold.bgBlack('Should throw an Error'), () => {
            assert.throws(
				() => {db.create(strId, obj, title, description)},
				/./
			);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Class Test'), () => {
    describe(chalk.white.bold('Testing constructor not a String third argument'), () => {
        it(chalk.magenta.bold.bgBlack('Should throw an Error'), () => {
            assert.throws(
				() => {db.create(strId, category, obj, description)},
				/./
			);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Class Test'), () => {
    describe(chalk.white.bold('Testing constructor not a String fourth argument'), () => {
        it(chalk.magenta.bold.bgBlack('Should throw an Error'), () => {
            assert.throws(
				() => {db.create(strId, category, title, obj)},
				/./
			);
        });
    });
});
