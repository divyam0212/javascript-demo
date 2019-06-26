let area = function (length,breadth){
	let a=length*breadth;
	console.log("Area of rectangle is: "+a+"sq units");
}
let perimeter=function (length,breadth){
	let p=2*(length+breadth);
	console.log("Perimeter of rectangle: "+p+"units");
}
module.exports = {
	area,
	perimeter
};