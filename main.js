function changeProgress(){
    var bar = document.getElementsByClassName('progress')[0];
    var curr = bar.style.width,
    box = document.getElementsByClassName('text')[0];
    console.log(curr);
    if(curr == "0%"){
        bar.classList.add("anim25");
        bar.innerText = "25%";
        setTimeout(function(){document.getElementsByClassName('progress')[0].style.width = "25%"}, 3000);
    }
    else if(curr == "25%"){
        bar.classList.add("anim50");
        bar.innerText = "50%";
        setTimeout(function(){document.getElementsByClassName('progress')[0].style.width = "50%"}, 3000);
    }
    else if(curr == "50%"){
        bar.classList.add("anim75");
        bar.innerText = "75%";
        setTimeout(function(){document.getElementsByClassName('progress')[0].style.width = "75%"}, 3000);
    }
    else{
        bar.classList.add("anim100");
        bar.innerText = "100%";
        setTimeout(function(){document.getElementsByClassName('progress')[0].style.width = "100%"}, 3000);
    }
}

function fillGreen(){
    var bar_2 = document.getElementById('green');
    bar_2.classList.add("anim50");
    bar_2.innerText = "50%";
    setTimeout(function(){document.getElementById('green').style.width = "50%"}, 3000);
}

function fillYellow(){
    var bar_2 = document.getElementById('yellow');
    bar_2.classList.add("anim25");
    bar_2.innerText = "25%";
    setTimeout(function(){document.getElementById('yellow').style.width = "25%"}, 3000);
}

function fillRed(){
    var bar_2 = document.getElementById('red');
    bar_2.classList.add("anim25");
    bar_2.innerText = "25%";
    setTimeout(function(){document.getElementById('red').style.width = "25%"}, 3000);
}