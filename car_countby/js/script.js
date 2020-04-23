function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function getYear(car){
    return car.year
}

function getMake(car){
    return car.make
}

function getModel(car){
    return car.model
}

function isNewer(car){
    if (car.year > 2010){
        return true;
    }
    return false;
}

function lowMiles(car){
    if (car.miles < 50000){
        return true;
    }
    return false;
}

function isCheap(car){
    if (car.price < 6000){
       return true;
    }
    return false;
}

//console.log(countBy(CAR_INVENTORY.filter(lowMiles), getMake));
console.log(CAR_INVENTORY.filter(isCheap).filter(isNewer));