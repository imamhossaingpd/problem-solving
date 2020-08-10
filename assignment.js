//feetToMile // 

function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}

var result = feetToMile(60000);
console.log("Mile is:", result)



//woodCalculator

function woodCalculator(chair, table, bed) {
    var chairWoodCount = chair * 1;
    var tableWoodCount = table * 3;
    var bedWoodCount = bed * 5;
    var totalWood = chairWoodCount + tableWoodCount + bedWoodCount;
    return totalWood;
}

var totalWoodResult = woodCalculator(11,2,3);
console.log("Total Wood Need in Cubic Inches:", totalWoodResult);




//brickCalculator 


function brickCalculator(numberOfFloor){
    var firstTenFloor = 10;
    var secondTenFloor = 10;
    if (numberOfFloor>20){
        numberOfBricks = (firstTenFloor * 15 * 1000) + (secondTenFloor * 12 * 1000) +  ((numberOfFloor-20)*10*1000) ;  
    }
    else if(numberOfFloor>10){
        numberOfBricks =  (firstTenFloor * 15 * 1000)+  ((numberOfFloor-10)*12*1000) ;
    }
    else if(numberOfFloor>0){
        numberOfBricks = (numberOfFloor * 15 * 1000);
    }
    else {   
        console.log("Number of floor > 0");
    }
    return numberOfBricks;
}
var totalBreakCount = brickCalculator(11);
console.log("Total Bricks:", totalBreakCount);




//tinyFriend

function tinyFriend(names) {
    var shortest = names[0];

    for (var i = 0; i < names.length; i++) {
        var currentName = names[i];
        if (currentName.length < shortest.length) {
            shortest = currentName;
        }
    }
    return shortest;
}


var shortestNameFriend = tinyFriend(['shakil', 'robin', 'mehedi', 'salman', 'abdul', 'shihab']);
console.log("My tiny named friend is:", shortestNameFriend);