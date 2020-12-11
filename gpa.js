var s =[];//subject
var c =[];//code
var t =[];//term
var g =[];//grade
var n = 0;

function newSub(){
    var allSub = document.querySelector('#allSub');
        var subject = document.querySelector('#subject');
        var code = document.querySelector('#code');
        var term = document.querySelector('#term');
        var grade = document.querySelector('#grade');

        var line = document.createElement('li');
        var text = document.createElement('span');
        text.innerHTML = subject.value +"("+code.value+") term "+term.value+" Grade "+grade.value;
    
        line.append(text);
        allSub.append(line);

        //store data
        s[n] = subject.value;
        c[n] = parseInt(code.value);
        t[n] = term.value;
        g[n] = parseFloat(grade.value);
        n++;
        //clear input
        subject.value =' ';
        code.value ='';
        term.value='';
        grade.value='';
}

function calAll(){
    var num;
    for(var i;i<n;i++){
        num+=grade[i];
    }
    alert(num/n);
}