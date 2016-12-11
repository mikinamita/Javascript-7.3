var add = (function () {
    var counter = 0;
	 return function () {
		 return counter++;
		 }
})();

function count()
{
console.log(add());
}


