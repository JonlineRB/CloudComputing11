module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);


    //To DO: add the pattern functions and describe the logic inside the function

    function productURL(args, done){
	if(args.product_url){
            var productURL = args.product_url;
            done(null, {result: productURL});
	}
	else{
	    done(null, {result: 'dummyURL'});
	}

    }

	function productName(args, done){
		if(args.product_name){
			var productName = args.product_name;
			done(null, {result: productName});
		}
		else{
			done(null, {result: ''});
		}

	}

}