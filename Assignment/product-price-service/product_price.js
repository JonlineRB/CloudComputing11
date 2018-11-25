module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions
	this.add('role:product,cmd:getProductPrice', getProductPrice);


    //To DO: add the pattern functions and describe the logic inside the function
    function getProductPrice(args, done){
	var productId = args['productId'];
	for(var i = 0; i < mockData.length ; i++){
		if(mockData[i]['product_id'] == productId){
			done(null, {result: mockData[i]['product_price']});
		}
	}
	done(null, {result: ''});
    }

}