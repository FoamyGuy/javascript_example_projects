var chosenAccountNumber = "8276453";
var $accountDiv = document.querySelector("#accountDiv");

var accounts = {
    "4733632": {
        "checkingAccountBalance": 510,
        "savingsAccountBalance": 2170,
        "name": "David Anderson"
        
    },
    "8276453": {
        "checkingAccountBalance": 872,
        "savingsAccountBalance": 5928,
        "name": "Angela Jones"
        
    }
}


function wrapTextInHeader(textToWrap){
    header = document.createElement("h1");
    header.textContent = textToWrap;
    return header
}

function wrapTextInParagraph(textToWrap){
    header = document.createElement("p");
    header.textContent = textToWrap;
    return header
}

function buildAccountDiv(accountNumber){
    accountDiv = document.createElement("div");
    accountDiv.appendChild(wrapTextInHeader("Hello " + accounts[accountNumber].name));
    var balanceStr = "checking: ";
    balanceStr += accounts[accountNumber].checkingAccountBalance;
		accountDiv.appendChild(wrapTextInParagraph(balanceStr));
    balanceStr = "savings: ";
    balanceStr += accounts[accountNumber].savingsAccountBalance;
    accountDiv.appendChild(wrapTextInParagraph(balanceStr));
    return accountDiv;
}


accountDiv.innerHTML = "";
accountDiv.appendChild(buildAccountDiv(chosenAccountNumber));