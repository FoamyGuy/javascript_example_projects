
let $newItemText = $("#new-item-text");
let $addItemBtn = $("#add-item-btn");
let $firstList = $("#first-list");
let $secondList = $("#second-list");

let $rightArrowBtn = $("#right-arrow-btn");
let $leftArrowBtn = $("#left-arrow-btn");

let firstArray = [];
let secondArray = [];

function fillSelectFromArray(array, $selectElement){
  $selectElement.empty();

  let optionElements = array.map(function(curItem){
    return $('<option value="' + curItem + '">' + curItem + '</option>');
  });

  $selectElement.append(optionElements);
  /*
  for(let $optionElement of optionElements){
    $selectElement.append($optionElement);
  }*/
}

function refreshUI(){
  fillSelectFromArray(firstArray, $firstList);
  fillSelectFromArray(secondArray, $secondList);
}

function addItem(newItem, array){
  firstArray.push(newItem);
  refreshUI();
  $newItemText.val("");
}

$newItemText.on('keypress', function(event){
  if (event.which == 13){
    addItem($newItemText.val(), firstArray);
  }
});


$addItemBtn.click(function(){
  addItem($newItemText.val(), firstArray);
});


$rightArrowBtn.click(function(){
    let selectedItem = $firstList.val();
    if (selectedItem != null){
      let selectedItemIndex = firstArray.indexOf(selectedItem);
      firstArray.splice(selectedItemIndex, 1);
      secondArray.push(selectedItem);
      refreshUI();
    }
});

$leftArrowBtn.click(function(){
    let selectedItem = $secondList.val();
    if (selectedItem != null){
      let selectedItemIndex = secondArray.indexOf(selectedItem);
      secondArray.splice(selectedItemIndex, 1);
      firstArray.push(selectedItem);
      refreshUI();
    }
});
