function howManyDalmatians(number){
    var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    // var respond = number <= 10 ? dogs[0] (number <= 50 ? dogs[1] :number = 101  dogs[3] : dogs[2]);
    if (number == 101) {
        return dogs[3];
    } else if (number <= 10){
        return dogs[0];
    } else if (number > 10 && number <= 50){
        return dogs[1];
    } else if (number > 50 && number <= 100){
        return dogs[2];
    }
}

console.log(howManyDalmatians(26)); // "More than a handful!"
console.log(howManyDalmatians(8)); // "Hardly any"
console.log(howManyDalmatians(14)); // "More than a handful!"
console.log(howManyDalmatians(80)); // "Woah that's a lot of dogs!"
console.log(howManyDalmatians(100)); // "Woah that's a lot of dogs!"
console.log(howManyDalmatians(101)); //"101 DALMATIANS!!!"

  
    
    
  