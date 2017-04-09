var assert = require('assert'),
    chalk = require('chalk'),
	db = require('../modules/products.js');
    
const noun = 'noun', verb = 'verb', noun1 = null, verb1 = null, noun2 = '', verb2 = '';
const strId = 'id1', cate1 = 'category1', title1 = 'title1', desc1 = 'description one';
const strId2 = 'id2', cate2 = 'category1', title2 = 'title2', desc2 = 'description two';
const strId3 = 'id3', cate3 = 'category3', title3 = 'title3', desc3 = 'description three';
const strId4 = 'id4', cate4 = 'category4', title4 = 'title4', desc4 = 'description four';
const strId5 = 'id5', cate5 = 'category5', title5 = 'title5', desc5 = 'description five';
const strId6 = 'id6', cate6 = 'category6', title6 = 'title5', desc6 = 'description six';
console.log(chalk.cyan.bold('\t\t\Product Manager Test Cases'));

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

describe(chalk.yellow.bgGreen('Product Manager Test'), () => {
    describe(chalk.white.bold('Testing add method'), () => {
        it(chalk.magenta.bold.bgBlack('Should return true if the new Product object was created and added'), () => {
            var product = false;
            product = db.add(strId, cate1, title1, desc1);
            assert.notEqual(false, product);
            assert.equal(true, product);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Manager Test'), () => {
    describe(chalk.white.bold('Testing list method'), () => {
        it(chalk.magenta.bold.bgBlack('Should return an array with a length of one'), () => {
            var products = db.list();
            assert.equal(1, products.length);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Manager Test'), () => {
    describe(chalk.white.bold('Testing attempt to create and add a new Product containing an existing Product\'s title'), () => {
        it(chalk.magenta.bold.bgBlack('Should throw an Error'), () => {
            assert.throws(
				() => {db.add(strId2, cate2, title1, desc2);},
				/./
			);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Manager Test'), () => {
    describe(chalk.white.bold('Testing attempt to create and add a new Product containing an existing Product\'s ID'), () => {
        it(chalk.magenta.bold.bgBlack('Should throw an Error'), () => {
            assert.throws(
				() => {db.add(strId, cate2, title2, desc2);},
				/./
			);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Manager Test'), () => {
    describe(chalk.white.bold('Testing attempt to create and add a new Product containing an existing Product\'s description'), () => {
        it(chalk.magenta.bold.bgBlack('Should throw an Error'), () => {
            assert.throws(
				() => {db.add(strId2, cate2, title2, desc1);},
				/./
			);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Manager Test'), () => {
    describe(chalk.white.bold('Testing add method'), () => {
        it(chalk.magenta.bold.bgBlack('Adding a 2nd Product object. Should return true if the new Product object was created and added'), () => {
            var product = false;
            product = db.add(strId2, cate2, title2, desc2);
            assert.notEqual(false, product);
            assert.equal(true, product);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Manager Test'), () => {
    describe(chalk.white.bold('Testing list method'), () => {
        it(chalk.magenta.bold.bgBlack('Should return an array with a length of two'), () => {
            var products = db.list();
            assert.equal(2, products.length);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Manager Test'), () => {
    describe(chalk.white.bold('Testing add method'), () => {
        it(chalk.magenta.bold.bgBlack('Adding a 3rd Product object. Should return true if the new Product object was created and added'), () => {
            var product = false;
            product = db.add(strId3, cate3, title3, desc3);
            assert.notEqual(false, product);
            assert.equal(true, product);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Manager Test'), () => {
    describe(chalk.white.bold('Testing list method'), () => {
        it(chalk.magenta.bold.bgBlack('Should return an array with a length of three'), () => {
            var products = db.list();
            assert.equal(3, products.length);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Manager Test'), () => {
    describe(chalk.white.bold('Testing add method'), () => {
        it(chalk.magenta.bold.bgBlack('Adding a 4th Product object. Should return true if the new Product object was created and added'), () => {
            var product = false;
            product = db.add(strId4, cate4, title4, desc4);
            assert.notEqual(false, product);
            assert.equal(true, product);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Manager Test'), () => {
    describe(chalk.white.bold('Testing list method'), () => {
        it(chalk.magenta.bold.bgBlack('Should return an array with a length of four'), () => {
            var products = db.list();
            assert.equal(4, products.length);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Manager Test'), () => {
    describe(chalk.white.bold('Testing add method'), () => {
        it(chalk.magenta.bold.bgBlack('Adding a 5th Product object. Should return true if the new Product object was created and added'), () => {
            var product = false;
            product = db.add(strId5, cate5, title5, desc5);
            assert.notEqual(false, product);
            assert.equal(true, product);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Manager Test'), () => {
    describe(chalk.white.bold('Testing list method'), () => {
        it(chalk.magenta.bold.bgBlack('Should return an array with a length of five'), () => {
            var products = db.list();
            assert.equal(5, products.length);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Manager Test'), () => {
    describe(chalk.white.bold('Testing find method. Searching by title.'), () => {
        it(chalk.magenta.bold.bgBlack('Should return a Product object'), () => {
            var product = db.find(title1);
            assert.notEqual(null, product);
            assert.equal(strId, product.id);
            assert.equal(title1, product.title);
            assert.equal(desc1, product.description);
            assert.equal(cate1, product.category);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Manager Test'), () => {
    describe(chalk.white.bold('Testing find method. Searching by description.'), () => {
        it(chalk.magenta.bold.bgBlack('Should return a Product object'), () => {
            var product = db.find(desc4);
            assert.notEqual(null, product);
            assert.equal(strId4, product.id);
            assert.equal(cate4, product.category);
            assert.equal(title4, product.title);
            assert.equal(desc4, product.description);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Manager Test'), () => {
    describe(chalk.white.bold('Testing find method. Searching by ID.'), () => {
        it(chalk.magenta.bold.bgBlack('Should return a Product object'), () => {
            var product = db.find(strId2);
            assert.notEqual(null, product);
            assert.equal(strId2, product.id);
            assert.equal(title2, product.title);
            assert.equal(cate2, product.category);
            assert.equal(desc2, product.description);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Manager Test'), () => {
    describe(chalk.white.bold('Testing remove method. Remove by title.'), () => {
        it(chalk.magenta.bold.bgBlack('Should return an Array length of 4'), () => {
            var products = db.remove(title2);
            assert.equal(4, products.length);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Manager Test'), () => {
    describe(chalk.white.bold('Testing remove method. Remove by id.'), () => {
        it(chalk.magenta.bold.bgBlack('Should return an Array length of 3'), () => {
            var products = db.remove(strId3);
            assert.equal(3, products.length);
        });
    });
});

describe(chalk.yellow.bgGreen('Product Manager Test'), () => {
    describe(chalk.white.bold('Testing remove method. Removeing all products.'), () => {
        it(chalk.magenta.bold.bgBlack('Should return an Array length of zero'), () => {
            var products = db.remove();
            assert.equal(0, products.length);
        });
    });
});