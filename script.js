
function cityalert(element){
    alert("Loading weather report...")
}

function cookieremove(element){
    console.log(element.parentElement.parentElement.parentElement);
    document.querySelector(".third-row").remove();
}

function tempdegree(element){
    //array containes numbers in the same side
    var a = document.querySelectorAll(".temp-red");

    //array containes numbers in the same side
    var x = document.querySelectorAll(".temp-blue");

    // if Fehrenhite degree
    if(element.value=="Feh"){
    
    for( var i = 0; i<x.length;i++){
       var fixd =((Number(a[i].innerHTML)) *(9/5))+32;
       a[i].innerHTML=fixd.toFixed();
    }

    
    for( var i = 0; i<x.length;i++){
        var fixc =((Number(x[i].innerHTML)) *(9/5))+32;
        x[i].innerHTML=fixc.toFixed();
        
    }
    }
    
    // For Celciuse degree

    else{
        for( var i = 0; i<x.length;i++){
            var fixd=(((Number(a[i].innerHTML))+32)/(1.8));
            a[i].innerHTML=fixd.toFixed();
        }
    
        
        for( var i = 0; i<x.length;i++){
            var fixc=((Number(x[i].innerHTML))+32)/(1.8);
            x[i].innerHTML=fixc.toFixed();
        }
        }
    }

