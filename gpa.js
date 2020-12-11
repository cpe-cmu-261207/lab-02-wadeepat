var s =[];
var c =[];
var t =[];
var g =[];
var n = 0;
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').onsubmit = function () {
        var allSub = document.querySelector('#allSub');
        var subject = document.querySelector('#subject').value;
        var code = document.querySelector('#code').value;
        var term = document.querySelector('#term').value;
        var grade = document.querySelector('#grade').value;

        var line = document.createElement('li');
        var text = document.createElement('span');
        text.innerHTML = subject +"("+code+") term "+term+" Grade "+grade;
    
        line.append(text);
        allSub.append(line);
        
        subject.value =" ";
        code.value =" ";
        term.value =" ";
        grade.value=" ";
    
        return false;
    };
});