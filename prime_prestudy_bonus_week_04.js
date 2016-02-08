/*Take your project and add a 'Splinter' function. The function should take in 2 numbers, 
multiply them together saved under a locally scoped variable called 'z'. 
Then create an array that stores the first argument, second argument, and z. Return that array. 
Then console log out the Splinter function, passing in 1 and 2.
Check all of this in to a repo called "prime_prestudy_bonus_week_04"*/

function splinterFunction (a, b) {
	z = a * b;
	var array = [a, b, z];
	return array;
};

console.log(splinterFunction(1,2));

//Not sure if I did this correctly, but if I understood the directions this is what I am hoping you are looking for.