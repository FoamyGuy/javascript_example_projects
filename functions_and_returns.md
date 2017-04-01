# Functions and returns


Let's start with a bit about variables.

```javascript
var first_name = "John";
console.log(first_name);
```
When the computer executes the above code, it will do so in two steps. The first step is to replace the variable with its value, and the second step is to execute the `console.log()` function.

Step 1:

```javascript
console.log("John"); // <- after step 1, the code looks like this
```
Step 2:
```javascript
>>> John
```
Output from step 2 is in the console.

---

This concept works the same way when you use variables in math equations:

```javascript
var x = 12;
var answer = x + 15; // <- this statement will get evaluated in 2 steps
```
After step 1 it looks like this:
```javascript
var answer = 12 + 15; 
```
After step 2: the ```answer``` variable will hold the value ```27```.

---
---

When you execute statements that call functions, the system breaks them down into steps. The process is similar to the one it uses for variables.

Let's say we have some functions like these:

```javascript
function add(a,b){
	return a + b;
}

function double(a){
	return 2 * a;
}
```
We can use use them like this:
```javascript
console.log(add(10, 4)); // This will get executed in 2 steps like how the variables did.
```
In this case, step 1 will be evaluating the `add()` function. The reason we can use the ```add()``` function inside of the parentheses of another function is because the `add()` function returns a value.

After step 1, it looks like this:
```javascript
console.log(14);
```
Step 2:
```javascript
>>> 14
```
Output from step 2 is in the console.

---

You can call a function inside the parentheses of any other function. The system will always work from the innermost function all the way to the outermost function. So if we had more function calls, it could look like this:


```javascript
console.log(add(double(5), 7)); // <- will get executed in 3 steps.
```
After the 1st step  it looks like this:
```javascript
console.log(add(10, 7));
```
After the 2nd step  it looks like this:
```javascript
console.log(17); 
```
3rd step will output to the console finally:
```javascript
>>> 17
```

---
---

Now let's look at why the ```return``` statement is important. For this we will imagine our functions declared this way:
```javascript
function add(a,b){
	console.log(a + b); // <- no return
}

function double(a){
	console.log(2 * a); // <- no return
}
```
We will execute the same statement as last time:
```javascript
console.log(add(double(5), 7)); // <- will get executed in 3 steps.
```
The ```double()``` still goes first, but this time it outputs its answer to the console instead of returning it.
```javascript
>>> 10
```
Since we don't have a ```return``` statement in our function, JavaScript returns ```undefined``` for us by default. So after step 1 is complete, the statement now looks like this:

```javascript
console.log(add(undefind, 7)); 
```
During step 2, the ```add()``` function executes. When this happens the system tries to add ```undefined + 7``` but it can't because ```undefined``` is not a number. It results in the system returning ```NaN``` to us.

So after step 2 it will look like this:
```javascript
console.log(NaN);
```
Step 3 will execute and print to the console:
```javascript
>>> 10 //<- step 1 printed this
>>> NaN //<- step 3 printed this
```

Because we didn't have a ```return``` statement in `double()`, JavaScript ended up returning ```undefined``` by default. This messed up the ```add()``` function. So unlike the first example, we don't get the correct result of the equation. 

---
---

Now a slightly bigger and more practical example of how functions that return things can be a useful tool for us as developers.

We have some data like this:
```javascript
var accounts = {
	"4733632": {
    	"checkingAccountBalance": 510,
        "savingsAccountBalance": 2170,
        "account_holder_name": "David Anderson"
        
    },
    "8276453": {
    	"checkingAccountBalance": 872,
        "savingsAccountBalance": 5928,
        "account_holder_name": "Angela Jones"
        
    }
}
```
We will set up some helper functions that `return` some DOM elements to us when they are called. 
```javascript
// this function wraps some input text inside of an <h1> tag.
function wrapTextInHeader(textToWrap){
	header = document.createElement("h1");
    header.textContent = textToWrap;
	return header
}

// this function wraps some input text inside of an <p> tag.
function wrapTextInParagraph(textToWrap){
	header = document.createElement("p");
    header.textContent = textToWrap;
	return header
}

/*
	This function uses our wrapper functions to make a div
	that contains basic account information.
	
	It expects to receive one parameter, the accountNumber
	of the account that you want to show.
*/
function buildAccountDiv(accountNumber){
	//create a <div>
	accountDiv = document.createElement("div");
	
	// use our helper function to make a welcome message for the user and append it to the div
	accountDiv.appendChild(wrapTextInHeader("Hello " + accounts[accountNumber].name));
	
	// make a string for checking account balance
	var balanceStr = "checking: " + accounts[accountNumber].checkingAccountBalance;
	
	// make a <p> element from our string and append it to the div
	accountDiv.appendChild(wrapTextInParagraph(balanceStr));
	
	// make a string for savings account balance
	balanceStr = "savings: " + accounts[accountNumber].savingsAccountBalance;
	
	// make a <p> element from our string and append it to the div
	accountDiv.appendChild(wrapTextInParagraph(balanceStr));
	
	return accountDiv;
}
```
Now we can use these to make a simple output interface for the bank account program.

In our HTML we have a `<div>` like this:
```html
<div id="accountDiv"></div>
```

In JavaScript we lookup the div and use the buildAccountDiv() method to built the content for it.
Then we empty out our div and add the one that we just created to it.
```javascript
// Hardcoded for this example. But would likely come from the user.
var chosenAccountNumber = "8276453";

// lookup the div from our HTML
var $accountDiv = document.querySelector("#accountDiv");

// empty it out in case it had something in it previously
accountDiv.innerHTML = "";

// use buildAccountDiv() to make the content for us and append it to the accountDiv in the HTML.
accountDiv.appendChild(buildAccountDiv(chosenAccountNumber));
```






