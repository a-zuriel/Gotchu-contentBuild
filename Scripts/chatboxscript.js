//Chat bot script


var txtQuestion = [];
var txtQuestionNum = [];

var txtQuestion2 = [];
var txtQuestionNum2 = [];

var txtQuestion3 = [];
var txtQuestionNum3 = [];

var ultSaveCookie1 = [];
var ultSaveCookie2 = [];
var ultSaveCookie3 = [];

var saveurText = '';


var saveOneCookie = function(cookiename, cookievalues){
        myobj = {}
        myobj["QandA"] = cookievalues
        myobj["num"] = []

        
        document.cookie = cookiename + "=" + JSON.stringify(myobj);
}

var saveCookies = function(boxnum){
    if ( boxnum == 1) {
        myobj = {}
        saveToCookie = [] ; 
        for (i=0; i< ultSaveCookie1.length; i++) {
            saveToCookie.push(ultSaveCookie1[i])
        };
        saveToCookieNum= [];



        //Storing green selected answers into a cookie
        console.log(txtQuestionNum);
        for(i=0; i < txtQuestion.length; i++){
            if(txtQuestionNum[i] == 3){
                saveToCookie.push(txtQuestion[i])
                saveToCookieNum.push(3);

            }

        }

        myobj["QandA"] = saveToCookie
        myobj["num"] = saveToCookieNum

        console.log(JSON.stringify(myobj));
        document.cookie = "QAdata1=" + JSON.stringify(myobj);
    }
    
    
   //GRAY BOX 
    
    if(boxnum == 2){
       myobj2 = {}
        saveToCookie2 = [];
        for (i=0; i< ultSaveCookie2.length; i++) {
            saveToCookie2.push(ultSaveCookie2[i])
        };
        saveToCookieNum2= [];

        console.log(txtQuestionNum2);
        for(i=0; i < txtQuestion2.length; i++){
            if(txtQuestionNum2[i] == 3){
                saveToCookie2.push(txtQuestion2[i])
                saveToCookieNum2.push(3);

            }

        }

        myobj2["QandA"] = saveToCookie2
        myobj2["num"] = saveToCookieNum2

        console.log(JSON.stringify(myobj2));
        document.cookie = "QAdata2=" + JSON.stringify(myobj2); 
    }
    
    
    
    
   //PINK BOZ 
    
    if(boxnum ==3){
        myobj3 = {}
        saveToCookie3 = [];
        for (i=0; i< ultSaveCookie3.length; i++) {
            saveToCookie3.push(ultSaveCookie3[i])
        };
        saveToCookieNum3 = [];


        console.log(txtQuestionNum3);
        for(i=0; i < txtQuestion3.length; i++){
            if(txtQuestionNum3[i] == 3){
                saveToCookie3.push(txtQuestion3[i])
                saveToCookieNum3.push(3);

            }

        }

        myobj3["QandA"] = saveToCookie3
        myobj3["num"] = saveToCookieNum3

        console.log(JSON.stringify(myobj3));
        document.cookie = "QAdata3=" + JSON.stringify(myobj3); 
    }
    
   
    
    
    
}


var drawAnswers = function(obj1, obj2, obj3){
//    alert("This is draw answers" + obj1.length.toString());
    astr = ""
    astr2 = ""
    astr3 = ""
    console.log("NOW IM DRAYONG ANSWERS");
    
    for(i=0; i < obj1.length; i++ ){
       astr += "<div class='curicpinkCHATTEXTLEFTSELECTED' id='curic1SAVEANS"+ i.toString() + 
                "'>" + obj1[i] + "</div>" 
    }
    
    for(i=0; i < obj2.length; i++ ){
       astr2 += "<div class='curicpinkCHATTEXTLEFTSELECTED' id='curic2SAVEANS"+ i.toString() + 
                "'>" + obj2[i] + "</div>" 
    }
    
     for(i=0; i < obj3.length; i++ ){
       astr3 += "<div class='curicpinkCHATTEXTLEFTSELECTED' id='curic3SAVEANS"+ i.toString() + 
                "'>" + obj3[i] + "</div>" 
    }
    
    
    
    document.querySelector("#curicsavedclientHERE").innerHTML = astr
     document.querySelector("#curicsavedfinancingHERE").innerHTML = astr2
     document.querySelector("#curicsavedfreelancingHERE").innerHTML = astr3
    
    //DELETE ANSWERS
    
    
            for(i=0; i < obj1.length; i++){
                document.querySelector("#curicsavedclientHERE").querySelector("#curic1SAVEANS" + i.toString()).addEventListener("click", function(event){

                pressedindex = parseInt( event.currentTarget.id.substring(13))
                cookievalues = getCookieObject("QAdata1");
//                <do something>    
                cookievalues.splice(pressedindex, 1)
                saveOneCookie("QAdata1", cookievalues);
                showSavedCookiesplz();
                
                
            })
        }
    
        for(i=0; i < obj2.length; i++){
                    document.querySelector("#curicsavedfinancingHERE").querySelector("#curic2SAVEANS" + i.toString()).addEventListener("click", function(event){

                    pressedindex = parseInt( event.currentTarget.id.substring(13))
                    cookievalues = getCookieObject("QAdata2");
    //                <do something>    
                    cookievalues.splice(pressedindex, 1)
                    saveOneCookie("QAdata2", cookievalues);
                    showSavedCookiesplz();


                })
            }
    
        for(i=0; i < obj3.length; i++){
                        document.querySelector("#curicsavedfreelancingHERE").querySelector("#curic3SAVEANS" + i.toString()).addEventListener("click", function(event){

                        pressedindex = parseInt( event.currentTarget.id.substring(13))
                        cookievalues = getCookieObject("QAdata3");
        //                <do something>    
                        cookievalues.splice(pressedindex, 1)
                        saveOneCookie("QAdata3", cookievalues);
                        showSavedCookiesplz();


                    })
                }
            
        
    
    
}

var drawBoxes = function() {
    //ORANGE
    astr = ""
    qstr = ""
    //GRAY
    astr2 = ""
    qstr2 = ""
    //PINK
    astr3 = ""
    qstr3 = ""
 //COPY FOR ORANGE CHAT BOX   
    for( i=0 ; i < txtQuestion.length; i++) {
        if (txtQuestionNum[i] == 1) {
            qstr += "<div class='curicpinkCHATTEXT'>" + txtQuestion[i] + "</div>"
            astr += "<div class='curicpinkCHATTEXTHIDE'>" + txtQuestion[i] + "</div>"
        } else {
            qstr += "<div class='curicpinkCHATTEXTHIDE'>" + txtQuestion[i] + "</div>"
            if(txtQuestionNum[i] == 2){
               astr += "<div class='curicpinkCHATTEXTLEFT' id='curicANS"+ i.toString() + 
                "'>" + txtQuestion[i] + "</div>"
                
               }else{
                  astr += "<div class='curicpinkCHATTEXTLEFTSELECTED' id='curicANS"+ i.toString() + 
                "'>" + txtQuestion[i] + "</div>"
                   
                    
            }
        }
    }
//COPY FOR GRAY CHAT BOX    
      for( i=0 ; i < txtQuestion2.length; i++) {
        if (txtQuestionNum2[i] == 1) {
            qstr2 += "<div class='curicpinkCHATTEXT'>" + txtQuestion2[i] + "</div>"
            astr2 += "<div class='curicpinkCHATTEXTHIDE'>" + txtQuestion2[i] + "</div>"
        } else {
            qstr2 += "<div class='curicpinkCHATTEXTHIDE'>" + txtQuestion2[i] + "</div>"
            if(txtQuestionNum2[i] == 2){
               astr2 += "<div class='curicpinkCHATTEXTLEFT' id='curic2ANS"+ i.toString() + 
                "'>" + txtQuestion2[i] + "</div>"
                
               }else{
                  astr2 += "<div class='curicpinkCHATTEXTLEFTSELECTED' id='curic2ANS"+ i.toString() + 
                "'>" + txtQuestion2[i] + "</div>"
                   
                    
            }
        }
    }
    //COPY FOR PINK CHAT BOX
    for( i=0 ; i < txtQuestion3.length; i++) {
        if (txtQuestionNum3[i] == 1) {
            qstr3 += "<div class='curicpinkCHATTEXT'>" + txtQuestion3[i] + "</div>"
            astr3 += "<div class='curicpinkCHATTEXTHIDE'>" + txtQuestion3[i] + "</div>"
        } else {
            qstr3 += "<div class='curicpinkCHATTEXTHIDE'>" + txtQuestion3[i] + "</div>"
            if(txtQuestionNum3[i] == 2){
               astr3 += "<div class='curicpinkCHATTEXTLEFT' id='curic3ANS"+ i.toString() + 
                "'>" + txtQuestion3[i] + "</div>"
                
               }else{
                  astr3 += "<div class='curicpinkCHATTEXTLEFTSELECTED' id='curic3ANS"+ i.toString() + 
                "'>" + txtQuestion3[i] + "</div>"
                   
                    
            }
        }
    }
    
    document.querySelector(".curicpiunkchatboxRIGHT").innerHTML = qstr3
    document.querySelector(".curicpiunkchatboxLEFT").innerHTML = astr3
    
    document.querySelector(".curicgraychatboxRIGHT").innerHTML = qstr2
    document.querySelector(".curicgraychatboxLEFT").innerHTML = astr2
    
    document.querySelector(".curicorangechatboxRIGHT").innerHTML = qstr
    document.querySelector(".curicorangechatboxLEFT").innerHTML = astr
    
    //alert("adding event listeners");
    
    //orange
    for( i=0 ; i < txtQuestion.length; i++) {
        if (txtQuestionNum[i] != 1) {
            
            document.querySelector(".curicorangechatboxLEFT").querySelector("#curicANS" + i.toString()).addEventListener("click", function(event){

                pressedindex = parseInt( event.currentTarget.id.substring(8))

                txtQuestionNum[pressedindex] = 5 - txtQuestionNum[pressedindex]
                drawBoxes();
                saveCookies(1);
                
                
            })
            
        } 
    };
    //FPR GRAY BOX
    console.log("gray box" + txtQuestion2.length );
    for( i=0 ; i < txtQuestion2.length; i++) {
        if (txtQuestionNum2[i] != 1) {
            
            document.querySelector(".curicgraychatboxLEFT").querySelector("#curic2ANS" + i.toString()).addEventListener("click", function(event){

                pressedindex = parseInt( event.currentTarget.id.substring(9))

                txtQuestionNum2[pressedindex] = 5 - txtQuestionNum2[pressedindex]
                drawBoxes();
                saveCookies(2);
                
                
            })
            
        } 
    };
  //FOR PINK BOX  
    for( i=0 ; i < txtQuestion3.length; i++) {
        if (txtQuestionNum3[i] != 1) {
            
            document.querySelector(".curicpiunkchatboxLEFT").querySelector("#curic3ANS" + i.toString()).addEventListener("click", function(event){

                pressedindex = parseInt( event.currentTarget.id.substring(9))

                txtQuestionNum3[pressedindex] = 5 - txtQuestionNum3[pressedindex]
                drawBoxes();
                saveCookies(3);
                
                
            })
            
        } 
    };
    
    
}

var chatBot = function(blah){
    return "chatbot says: " + blah
}
//TEXTBUBBLE FOR ORANGE BOX TEXTBUBBLE FOR ORANGE BOX TEXTBUBBLE FOR ORANGE BOX TEXTBUBBLE FOR ORANGE BOX
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
		
		console.log(resultdata);
        
        thisanswer =  resultdata.replace(/’/g, "");
            
        txtQuestion.pop()
        txtQuestionNum.pop()
        txtQuestion.push(thisanswer)
        txtQuestionNum.push(2)
 
            
            
        drawBoxes();
	    }
    } ) ;
    
}


//TXT BUBBLE2 FOR THE GRAY BOX TXT BUBBLE2 FOR THE GRAY BOX TXT BUBBLE2 FOR THE GRAY BOX TXT BUBBLE2 FOR THE GRAY BOX
var textBubble2 = function(obj1){
    
    
    txtQuestion2.push(obj1.value)
    txtQuestionNum2.push(1)
    txtQuestion2.push("thinking...")
    txtQuestionNum2.push(2)
    
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
		
		console.log(resultdata);
        
        thisanswer =  resultdata.replace(/’/g, "");
            
        txtQuestion2.pop()
        txtQuestionNum2.pop()
        txtQuestion2.push(thisanswer)
        txtQuestionNum2.push(2)
 
            
            
        drawBoxes();
	    }
    } ) ;
    
}

//pink box chat

var textBubble3 = function(obj1){
    
    
    txtQuestion3.push(obj1.value)
    txtQuestionNum3.push(1)
    txtQuestion3.push("thinking...")
    txtQuestionNum3.push(2)
    
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
		
		console.log(resultdata);
        
        thisanswer =  resultdata.replace(/’/g, "");
            
        txtQuestion3.pop()
        txtQuestionNum3.pop()
        txtQuestion3.push(thisanswer)
        txtQuestionNum3.push(2)
 
            
            
        drawBoxes();
	    }
    } ) ;
    
}


var clearKeep = function(obj1){
    document.querySelector(obj1).value = '';   
}

//PINK BOX

document.querySelector("#curicquizbutpos1").addEventListener("click", function(){
    txtQuestion3 = [];
    txtQuestionNum3 = [];
    
     document.querySelector(".curicpiunkchatboxRIGHT").innerHTML = ""
    
     document.querySelector(".curicpiunkchatboxLEFT").innerHTML = "" 
    ultSaveCookie3 = getCookieObject("QAdata3");
    
})
//Gray Box



document.querySelector("#curicquizbutpos1F").addEventListener("click", function(){
    txtQuestion2 = [];
    txtQuestionNum2 = [];
     document.querySelector(".curicgraychatboxRIGHT").innerHTML = ""
    
     document.querySelector(".curicgraychatboxLEFT").innerHTML = "" 
    ultSaveCookie2 = getCookieObject("QAdata2");
})

//ORagne BUtton
document.querySelector("#curicquizbutpos1C").addEventListener("click", function(){
    txtQuestion = [];
    txtQuestionNum = [];
    
     document.querySelector(".curicorangechatboxRIGHT").innerHTML = ""
    
     document.querySelector(".curicorangechatboxLEFT").innerHTML = "" 
    
    ultSaveCookie1 = getCookieObject("QAdata1");
//    alert("this is the length " + ultSaveCookie1.length)
    
    
})
//PINK BOX

document.querySelector("#curicpinkhelpaskbutton").addEventListener("click", function(){
    textBubble3(document.querySelector("#curicpinkhelpchatbotaskbutton"));
    clearKeep("#curicpinkhelpchatbotaskbutton");   
})



//GRAY BOX
document.querySelector("#curicgrayhelpaskbutton").addEventListener("click", function(){
    console.log(document.querySelector("#curicpinkhelpaskbox").value);
    textBubble2(document.querySelector("#curicpinkhelpaskbox"));
    clearKeep("#curicpinkhelpaskbox");
})

//ORANGE BOX

document.querySelector("#curicorangehelpaskbutton").addEventListener("click", function(){
    textBubble(document.querySelector("#curicorangehelpaskbox"));
    clearKeep("#curicorangehelpaskbox");
})



//THIS IS EVERYHTING TO DO WITH COOKIES




document.querySelector("#curicSHOWcookie").addEventListener("click", function(){
    console.log(document.cookie);
})

document.querySelector("#curicSAVEcookie").addEventListener("click", function(){
    myobj = {}
    myobj["QandA"] = txtQuestion
    myobj["num"] = txtQuestionNum
    
    console.log(JSON.stringify(myobj));
    document.cookie = "QAdata=" + JSON.stringify(myobj);
    
    
})

function getCookie(name)
	{
	var cookieLen = name.length;
	var cLen = document.cookie.length;
	var i = 0;
	var cEnd;

	while (i < cLen)
		{
		var j = i + cookieLen ;
		if (document.cookie.substring(i,j) == name)
			{
			cEnd = document.cookie.indexOf(";",j);
			
			if (cEnd == -1)
				{ cEnd = document.cookie.length; }
			
			return unescape(document.cookie.substring((j+1), cEnd));
			}
		i++;	
		}

	return " ";

	}
var getCookieObject = function(brownie){
    
    myobj = getCookie(brownie);
    console.log(myobj)
    if(myobj == " "){
        myobj ={ "QandA" : []};
    }else{
       myobj = JSON.parse(myobj); 
    }
    
    return myobj["QandA"]
    
}

var showSavedCookiesplz = function(){
    
   
    
    myobj = getCookie("QAdata1");
    console.log(myobj)
    if(myobj == " "){
        myobj ={ "QandA" : []};
    }else{
       myobj = JSON.parse(myobj); 
    }
    
    myobj2 = getCookie("QAdata2")
    
    if(myobj2 == " "){
        myobj2 = { "QandA" : []};
    }else{
       myobj2 = JSON.parse(myobj2); 
    }
    
    
    myobj3 = getCookie("QAdata3")
    
    if(myobj3 == " "){
        myobj3 = {"QandA" : [] };
    }else{
       myobj3 = JSON.parse(myobj3); 
    }
    
    
    
    
//   txtQuestion = myobj["QandA"]
//   txtQuestionNum = myobj["num"]
    
    drawAnswers(myobj["QandA"], myobj2["QandA"], myobj3["QandA"]);
    
}










    