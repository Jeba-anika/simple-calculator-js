document.getElementById('btn-clr-all').addEventListener('click', function(){
    const element = document.getElementById('first-number');
    element.innerText= '';
})
document.getElementById('btn-clr').addEventListener('click', function(){
    const element = document.getElementById('first-number');
    const elementValue = element.innerText;
    element.innerText = elementValue.slice(0, -1);
})

document.getElementById('btn-1').addEventListener('click', function(){
    inputNumber('first-number', '1')
 
 })

 document.getElementById('btn-2').addEventListener('click', function(){
    inputNumber('first-number', '2')
 
 })

 document.getElementById('btn-3').addEventListener('click', function(){
    inputNumber('first-number', '3')
 
 })

 document.getElementById('btn-4').addEventListener('click', function(){
    inputNumber('first-number', '4')
 
 })
 document.getElementById('btn-5').addEventListener('click', function(){
    inputNumber('first-number', '5')
 
 })
 document.getElementById('btn-6').addEventListener('click', function(){
    inputNumber('first-number', '6')
 
 })

document.getElementById('btn-7').addEventListener('click', function(){
   inputNumber('first-number', '7')

})
document.getElementById('btn-8').addEventListener('click', function(){
   inputNumber('first-number', '8')

})
document.getElementById('btn-9').addEventListener('click', function(){
   inputNumber('first-number', '9')

})
document.getElementById('btn-0').addEventListener('click', function(){
   inputNumber('first-number', '0')

})
document.getElementById('btn-plus').addEventListener('click', function(){
   inputNumber('first-number', '+');

})
document.getElementById('btn-minus').addEventListener('click', function(){
   inputNumber('first-number', '-');

})
document.getElementById('btn-mult').addEventListener('click', function(){
   inputNumber('first-number', 'x');

})
document.getElementById('btn-div').addEventListener('click', function(){
   inputNumber('first-number', '/');

})

document.getElementById('btn-percent').addEventListener('click', function(){
   inputNumber('first-number', '%')

})
document.getElementById('btn-1-brac').addEventListener('click', function(){
   inputNumber('first-number', '(')

})
document.getElementById('btn-2-brac').addEventListener('click', function(){
   inputNumber('first-number', ')')

})

document.getElementById('btn-equal').addEventListener('click', function(){
    const element = document.getElementById('first-number');
    const elementValue = element.innerText;
    if(elementValue.includes('+')){
        add();
    element.innerText='';
    }else if(elementValue.includes('-')){
        minus();
        element.innerText = '';
    }else if(elementValue.includes('/')){
        divide();
        element.innerText='';
    }else if(elementValue.includes('x')){
        mult();
        element.innerText='';
    }else if(elementValue.includes('%')){
        percent();
        element.innerText = '';
    }
})