
let results = Papa.parse(raw_csv);

console.log(results);

let $searchBtn = $("#search_btn");
let $searchInput = $("#search_input");
let $tableHead = $("#table-head");
let $tableBody = $("#table-body");
let $searchFieldSelect = $("#search_field_select");
let $countOutput = $("#count_output_text");


function createRow(rowData, createHeader=false, index){
  if(createHeader == false){
    let $newTr = $("<tr>");


    if(index % 5 == 0 && index % 3 == 0){
      $newTr.addClass("purple");
    } else if(index % 5 == 0){
      $newTr.addClass("blue");
    } else if (index % 3 == 0){
      $newTr.addClass("red");
    }
    /*
    console.log("'" + rowData[1] + "'");
    console.log(rowData[1] == "Dr.");
    if(rowData[1] == "Dr."){
      $newTr.addClass("highlighted");
    }*/

    rowData.forEach(function(item, index){
      let $newTd = $("<td>");
      $newTd.text(item);
      $newTr.append($newTd);
    });
    return $newTr;
  }else{
    let $newTr = $("<tr>");

    rowData.forEach(function(item, index){
      let $newTh = $("<th>");
      $newTh.text(item);
      $newTr.append($newTh);
    });
    return $newTr;
  }
}

function isKansas(rowData){
  return rowData[9] == "Kansas";
}

function isGmailAccount(rowData){
  console.log("length: " + rowData.length +  " - " + rowData);

  if (rowData[5] != undefined){
    return rowData[5].endsWith("@gmail.com");
  }else{
    return false;
  }
}

function nameContains(searchString){
  return function(element){
    //console.log(element[2]);
    if (element[2].indexOf(searchString) == -1){
      // searchString was not found in name
      return false;
    }else{
      // search String was found in the name
      return true;
    }
  };
}

function fieldContains(fieldIndex, searchString){
  console.log(`Searching ${fieldIndex} for ${searchString}`);
  return function(element){
    //console.log(element[2]);
    if (element[fieldIndex].indexOf(searchString) == -1){
      // searchString was not found in name
      return false;
    }else{
      // search String was found in the name
      return true;
    }
  };
}


let curTimeoutId = -1;

$searchInput.on('input', function(param){
  clearTimeout(curTimeoutId);
  curTimeoutId = setTimeout(function(){
    console.log($searchInput.val());
    $searchBtn.click();
  }, 500);

});

/*$searchInput.on('keypress', function(event){
  if (event.which == 13){
    $searchBtn.click();
  }
});*/

$searchBtn.click(function(){
  let searchString = $searchInput.val()
  console.log("searching: " + searchString);
  $tableBody.empty();
  let searchIndex = $searchFieldSelect.val();
  let filtered_results = results['data'].filter(fieldContains(searchIndex,searchString));
  $countOutput.text(`Found: ${filtered_results.length} results.`);
  filtered_results.forEach(function(dataRow, index){
      $tableBody.append(createRow(dataRow, false, index));
  });
});

$tableHead.append(createRow(results['data'][0], true, 0));

results['data']['0'].forEach(function(header, index){
  let $new_option = $(`<option value="${index}">${header}</option>`)
  $searchFieldSelect.append($new_option);
})

results['data'].forEach(function(dataRow, index){
  if (index > 0){
    $tableBody.append(createRow(dataRow, false, index));
  }
});
