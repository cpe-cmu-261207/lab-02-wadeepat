var s =[];//subject
var c =[];//code
var t =[];//term
var u =[];//unit
var g =[];//grade
var n = 0;

function newSub(){
    var allSub = document.querySelector('#allSub');
        var subject = document.querySelector('#subject');
        var code = document.querySelector('#code');
        var term = document.querySelector('#term');
        var unit = document.querySelector('#unit');
        var grade = document.querySelector('#grade');

        var line = document.createElement('li');
        var text = document.createElement('span');
        text.innerHTML = subject.value +"("+code.value+") term"+term.value+" unit"+unit.value+" Grade "+grade.value;
    
        line.append(text);
        allSub.append(line);

        //store data
        s[n] = subject.value;
        c[n] = parseInt(code.value);
        t[n] = term.value;
        u[n] = parseInt(unit.value);
        g[n] = parseFloat(grade.value);
        n++;
        //clear input
        subject.value ='';
        code.value ='';
        term.value ='';
        unit.value ='';
        grade.value ='';
}

function calAll(){
    var num = 0; var unitAll=0;
    for(var i=0;i<n;i++){
        num+=g[i]*u[i];
        unitAll+=u[i];
    }
    alert((num/unitAll).toFixed(2));
}

function calMajor(){
    var num = 0; var unitAll=0;
    for(var i=0;i<n;i++){
        if(Math.floor(c[i]/1000) == 261 || Math.floor(c[i]/1000) == 269){
            num+=g[i]*u[i];
            unitAll+=u[i];
        }
    }
    alert((num/unitAll).toFixed(2));
}