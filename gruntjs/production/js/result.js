/*! gruntjs - v1.0 - 2020-12-18 */
console.log("test console");
var enter = "<br />";
// Cách 02
this.myValidate2 = function(value1, value2){
	
	// Thuộc tính
	this.data	=	"First value";		// Public
	this.msg	=	value2;		// Public
	var private	= 	"Private text";			// Private
	
	// Phương thức
	this.getData	= getData;
	this.getMsg		= getMsg;
	this.getPrivate	= getPrivate;
	this.setData	= setData;
	
	// Xây dựng phương thức
	function getData(){
		return this.data;
	}
	
	function getMsg(){
		return this.msg;
	}
	
	function getPrivate(){
		return private;
	}
	
	function setData(val){
		this.data = val;
	}
}

this.myValidate3 = function(){
	myValidate2.call(this);
}

var myObj = new myValidate3();
document.write("Properties: " + myObj.data + enter);
myObj.setData("Second value");
document.write("Properties: " + myObj.data);
console.log("FIle 02");