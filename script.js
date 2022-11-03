function myFunction(){
    var firstPerson = document.getElementById("firstperson").value;
    var secondPerson = document.getElementById("secondperson").value;
    document.getElementById("name1").innerHTML = firstPerson.toUpperCase();
    document.getElementById("name2").innerHTML = secondPerson.toUpperCase();
    var calc = Math.floor((Math.random() * 100) + 1);
    var result =  document.getElementById("loveScore").innerHTML = calc + "%";
    if (calc <= 30) {
        document.getElementById("text").innerHTML = "UH-OH! This is bad,The chances of building a long-lasting relationship between you and your crush is extremely low," 
        + "<br>" + "It might never work out between you two, so i`d advice you let go.";
    } 
    else if( calc <= 49){
        document.getElementById("text").innerHTML = "HMM! Your crush ia gonna be a hard-catch, However,there`s still hope for you two." 
        + "<br>" + " With much effort you could build a relationship that might work out.";
    }
    else if( calc <= 65){
        document.getElementById("text").innerHTML = "NOT BAD!, there`s a chance things might work out between you two" 
        + "<br>" + "Go ahead and talk to him/her.";
    }
    else if( calc <= 85){
        document.getElementById("text").innerHTML = "GREAT!, There is a high chance your crush feels the same way about you," 
        + "<br>" + "Go ahead and approach him/her. you wont regret it";
    }
    else if( calc <= 100){
        document.getElementById("text").innerHTML = "WOW!, Congratulations,You and your crush are made for each other, Dont throw this chance away" 
        + "<br>" + "Go ahead and talk to him/her. you wont regret it";
    }
    else {
        
    }
}