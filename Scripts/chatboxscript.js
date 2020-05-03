//Chat bot script


var txtQuestion = [];
var txtQuestionNum = [];
var saveurText = '';

var chatBot = function(blah){
    return "chatbot says: " + blah
}

var textBubble = function(obj1){
    qstr = ""
    txtQuestion.push(obj1.value)
    txtQuestionNum.push(1)
    
    thisanswer = chatBot(obj1.value)
    txtQuestion.push(thisanswer)
    txtQuestionNum.push(2)
    astr = ""
    for( i=0 ; i < txtQuestion.length; i++) {
        if (txtQuestionNum[i] == 1) {
            qstr += "<div class='curicpinkCHATTEXT'>" + txtQuestion[i] + "</div>"
            astr += "<div class='curicpinkCHATTEXTHIDE'>" + txtQuestion[i] + "</div>"
        } else {
            qstr += "<div class='curicpinkCHATTEXTHIDE'>" + txtQuestion[i] + "</div>"
            astr += "<div class='curicpinkCHATTEXTLEFT'>" + txtQuestion[i] + "</div>"
        }
        
    }
        
    document.querySelector("#curicpiunkchatboxRIGHT").innerHTML = qstr
    
    document.querySelector("#curicpiunkchatboxLEFT").innerHTML = astr
    

    
    
  
   
    
}

var clearKeep = function(){
    document.querySelector("#curicpinkhelpchatbotaskbutton").value = '';
}

document.querySelector("#curicpinkhelpaskbutton").addEventListener("click", function(){
    textBubble(document.querySelector("#curicpinkhelpchatbotaskbutton"));
    clearKeep();
    
    
    
})

    