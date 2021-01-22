
//https://github.com/Mazharul-Haque/javascript-problem-solving



//1.kilometerToMeter Conversion
function kilometerToMeter(kilo) {
    var meter = kilo * 1000;
    return meter;

}






//2.budget Calculator 
function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    var total = watchPrice + mobilePrice + laptopPrice;
    return total;

}


//3.hotelCost
function hotelCost(hotelDays) {
    var cost = 0;
    if (hotelDays <= 10) {
        cost = hotelDays * 100;

    }
    else if (hotelDays <= 20) {
        var firstSomeDays = 10 * 100;
        var remainingDays = hotelDays - 10;
        var secondSomeDays = remainingDays * 80;
        cost = firstSomeDays + secondSomeDays;
    }
    else {
        var firstSomeDays = 10 * 100;
        var secondSomeDays = 10 * 80;
        var remainingDays = hotelDays - 20;
        var thirdSomeDays = remainingDays * 50;
        cost = firstSomeDays + secondSomeDays + thirdSomeDays;
    }
    return cost;
}


//4.megaFriend
function megaFriend(friends) {
    var longest;
    var max = 0;
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length > max) {
            var max = friends[i].length;
            longest = friends[i];
        }

    }
    return longest;
}

