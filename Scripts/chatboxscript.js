//Chat bot script


var txtQuestion = [];
var txtQuestionNum = [];
var saveurText = '';


var drawBoxes = function() {
    astr = ""
    qstr = ""
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

var chatBot = function(blah){
    return "chatbot says: " + blah
}

var textBubble = function(obj1){
    
    
    txtQuestion.push(obj1.value)
    txtQuestionNum.push(1)
    txtQuestion.push("thinking...")
    txtQuestionNum.push(2)
    
    drawBoxes();
    
    
    
    
    var url = "https://curicchatbot.azurewebsites.net/qnamaker/knowledgebases/5544aa64-cd44-4a7e-b04f-704229a6cda3/generateAnswer";
    $.ajax({
        url : url ,
        type : 'POST' , 
        data : '{"question" : "' + obj1.value + '" }' , 
        headers : {
              "Authorization" : "EndpointKey adc6953c-2bd8-47e2-806c-c8ef4275c0ea" ,
             "Content-Type" : "application/json" 
        },
        success :  function(data ){
		resultdata = data.answers[0].answer;
		// only 1 result, so all object names directly off results/data object
//		alert("successfully loaded data for " + data.name + " ... check console log");
		console.log(resultdata);
            
            
        //thisanswer = chatBot(obj1.value)
        thisanswer =  resultdata.replace(/’/g, "");
            
        txtQuestion.pop()
        txtQuestionNum.pop()
        txtQuestion.push(thisanswer)
        txtQuestionNum.push(2)
//        astr = ""
//        qstr = ""
//        for( i=0 ; i < txtQuestion.length; i++) {
//            if (txtQuestionNum[i] == 1) {
//                qstr += "<div class='curicpinkCHATTEXT'>" + txtQuestion[i] + "</div>"
//                astr += "<div class='curicpinkCHATTEXTHIDE'>" + txtQuestion[i] + "</div>"
//            } else {
//                qstr += "<div class='curicpinkCHATTEXTHIDE'>" + txtQuestion[i] + "</div>"
//                astr += "<div class='curicpinkCHATTEXTLEFT'>" + txtQuestion[i] + "</div>"
//            }
//
//        }
//            
//        document.querySelector("#curicpiunkchatboxRIGHT").innerHTML = qstr
//    
//        document.querySelector("#curicpiunkchatboxLEFT").innerHTML = astr   
            
            
        drawBoxes();
	    }
    } ) ;
    
    
    
    
    
    
        
    
    

    
    
  
   
    
}

var clearKeep = function(){
    document.querySelector("#curicpinkhelpchatbotaskbutton").value = '';   
}

//PINK BOX

document.querySelector("#curicquizbutpos1").addEventListener("click", function(){
    txtQuestion = [];
    txtQuestionNum = [];
    
     document.querySelector("#curicpiunkchatboxRIGHT").innerHTML = ""
    
     document.querySelector("#curicpiunkchatboxLEFT").innerHTML = "" 
})

document.querySelector("#curicpinkhelpaskbutton").addEventListener("click", function(){
    textBubble(document.querySelector("#curicpinkhelpchatbotaskbutton"));
    clearKeep();   
})

//GRAY BOX

//ORANGE BOX

    