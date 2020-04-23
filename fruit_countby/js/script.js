
function countBy(items, groupName){
	let counts = [];
	for (let item of items){
		let name = groupName(item);
		
		function checkName(language){
			return language.name == name;
		}
		
		let known = counts.findIndex(checkName);
		//let known = counts.findIndex(c => c.name == name);
		if (known == -1){
			counts.push({name, count: 1});
		}else {
			counts[known].count++;
		}
	}
	return counts;
}

function isGreaterThanTwo(num){
	if (num > 2){
		return true;
	}else{
		return false;
	}
}

//console.log(countBy([1,2,3,4,5], isGreaterThanTwo));

fruits = [
	"apple",
	"banana",
    "pomegranate",
	"peach",
	"apricot",
	"durian",
	"elderberry",
	"pineapple",
	"starfruit",
	"lemon",
	"pear",
	"plum",
    "blueberry",
	"cranberry",
	"strawberry"
];

function firstLetter(str){
	return str[0]
}

console.log(countBy(fruits, firstLetter));

