module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);


    //To DO: add the pattern functions and describe the logic inside the function

    function productURL(args, done){
	//var parsed = JSON.parse(mockData[0]);
	//done(null, {result: parsed.product_url});
	done(null, {result: mockData[0]['product_url']});
	//for(var i = 0; i < mockData.length ; i++){}
    }

	function productName(args, done){
		if(args.product_name){
			var productName = args.product_name;
			done(null, {result: productName});
		}
		else{
			done(null, {result: args['productId']});
		}

	}

}