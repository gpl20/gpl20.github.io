errors=0;
pkt=0;
toggle=0;
difficulty=2;
hints = 0;
word = [
    "MUG", "TELEPHONE", "CAR", "HORSE", "MOUSE", "DOG", "TABLE", "TANK", "SQUARE", "HOUSE", "MEADOW", "BULL", "TOWEL", "BAG", "BOOK", "PLATE", "PERFUME", "PEN", 
    "BENCH","BLOCK", "ELEPHANT", "COMMODE", "LAPTOP", "CABLE", "CAN", "SPOON", "HAND", "EAR", "PIERCE", "DRESS", "BLANKET", "SHOES", "CAT", "SAND", "LAVA", "SHARK", 
    "DRAWER", "FIGURE", "DESK", "WIPER", "WATER", "SANDWICH", "TRUCK", "DOLL", "GUITAR", "DRUM", "PIANO", "PLATTER", "PUZZLE", "TIGER", "BEAR", "LINOLEUM", "STICKER",
    "FOLDER", "FILE", "LIST", "CLOCK", "FOX", "BUTTERFLY", "KEYBOARD", "CAMERA", "LENS", "SMARTPHONE", "FISHNET", "STOCKING", "CLOTH", "TURTLE", "FISH", "BONE", "ICE", 
    "GROUND", "SALAD", "BIKE", "PLANE", "TRAIN", "METRO", "SHIP", "VEST", "PHOTO", "STRING", "CHAIN", "BRACELET", "COLLAR", "FUR", "DISH", "SINK", "COOKER", "AQUARIUM", "WOOL",
    "PILLOW", "CAP", "BAND", "BANDANA", "DRAGON", "SHELL", "GLOBE", "MICROSCOPE", "JACKET", "PICTURE", "KARMA", "RIPE", "RUBBER", "COUNTER", "CASES", "SWITCH", "ILO",
    "BROOM", "BIN", "SHEET", "LEAF"
    ];

$(document).ready(function(){
    $("#alphabet span").click(function(){
        var input = $(this).html();
        var styyl = $(this).attr("id");
        check(input, styyl);
    });
    $("#difficulty").html("DIFFICULTY: "+difficulty);
    $("#back").hide();
    $(".hint").click(function(){
        if(hints==1){
            alert("Hints will be available soon");
        }
        else{
            alert("Only available in easy mode");
        }
    });
});

function showMenu() {
    $("#menu").show();
    $("#game").hide();
    $("#opcje").hide();
    $("#autor").hide();
    $(".title").show();
    $("#back").toggle();

}
function showOptions() {
    $("#back").toggle();
    $("#menu").hide();
    $("#opcje").show();
}
function showInfo() {
    $("#back").toggle();
    $("#menu").hide();
    $("#autor").show();
}
function exit(){
    c=confirm("Are you sure?");
    if (c===true){
        window.location.href = "http://www.threeg.ct8.pl/index_en.html";
    }
}
function hide() {
    $("#svg svg").hide();
}
function startpass(){
    boxy = new Array();
    hiden="";
    hub=wordp;
    i=hub.length;
    for(i=0; i<hub.length; i++)
    {
        hiden=hiden+"*";
        boxy[i]="*";
    }
    $("#pass").text(hiden);
}
function startGame(){
    switch(difficulty){
        case 1:
        errors=0;
        hide();
        hints=1;
        $(".hint").css("opacity","1.0");
        break;
        case 2:
        errors=0;
        hide();
        hints=0;
        $(".hint").css("opacity","0.4");
        break;
        case 3:
        if(errors==11){
            errors=0;
        }
        hints=0;
        $(".hint").css("opacity","0.4");
        break;
    }
    n=Math.floor(Math.random() * 110);
    wordp=word[n];
    clearAlphabet();
    startpass();
    $("#menu").hide();
    $("#game").show();
    $(".title").hide();
    $("#back").show();
}
function switchDifficulty(){
    switch(difficulty){
        case 1:
        difficulty++;
        $("#difficulty").html("DIFFICULTY: "+difficulty);
        break;
        case 2:
        difficulty++;
        $("#difficulty").html("DIFFICULTY: "+difficulty);
        break;
        case 3:
        difficulty=1;
        $("#difficulty").html("DIFFICULTY: "+difficulty);
        break;
    }
}

function addError(){
    errors++;
    if(errors<11){
        $("#t"+errors).show();
    }
    else{
        $("#t"+errors).show();
        alert("You lost! \nWord is: "+wordp+"\nFinal score is: "+pkt);
        window.setTimeout(gameOver, 600);
    }
}
function gameOver(){
    pkt=0;
    hide();
    showMenu();
}
function clearAlphabet(){
    $("#alphabet span").removeClass("red green");
}
function check(val,styl){
    if (wordp.indexOf(val) > -1){
        $("#"+styl).addClass("green");
        slowa(val);
    }
    else{
        $("#"+styl).addClass("red");
        addError();
    }
}
function slowa(val){
    n=wordp.length;
    for(i=0; i<n; i++){
        st=wordp.indexOf(val, i);
        boxy[st]=val;}
        hiden='';
    for(d=0; d<n; d++){
        hiden+=boxy[d];
        $("#pass").text(hiden);
    }
    checkWords();
}
function checkWords(){
    if(hiden==wordp){
    window.setTimeout(win, 600);
    }
}
function win(){
        pkt++;
    alert("Congratulations! \nYour score is: "+pkt+"\nLet's continue!");
    startGame();
}
function jump(){
    if(toggle==0){
        $("#stickman").css("animation","jmp 4s ease-out infinite");
        toggle=1;
    }
    else{
        $("#stickman").css("animation","none");
        toggle=0;
    }
}