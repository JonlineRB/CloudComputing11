module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions
	this.add('role:product,cmd:getProductPrice', productPrice);


    //To DO: add the pattern functions and describe the logic inside the function
	function getProductPrice(args, done){
		if(args.product_price){
			var productPrice = args.product_price;
			done(null, {result: productPrice});
		}
		else{
			done(null, {result: ''});
		}

	}

}