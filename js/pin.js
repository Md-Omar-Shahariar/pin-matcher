function getPin(){
    let random = Math.round(Math.random() *10000)
    if((random + '').length == 4){
        return parseInt(random)
    }
    else{
        return getPin()
    }
}
function generatePin(){
    
    const pin = getPin()
    document.getElementById('display-pin').value = pin
    
}

document.getElementById('key-pad').addEventListener('click',function(event){
    const number=event.target.innerText;
    const calcInput = document.getElementById('typed-numbers')
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '' 
        }

    }
    else{
        
        const previousNumber = calcInput.value
        const newNumber = previousNumber + number
        calcInput.value = newNumber
    }
    

})
function verifyPin(){
    
    const pin = document.getElementById('display-pin').value
    const typedNumbers = document.getElementById('typed-numbers').value
    const success = document.getElementById('notify-success')
    const fail = document.getElementById('notify-fail')

    if(pin == typedNumbers){
        
        success.style.display = 'block'
        fail.style.display = 'none'
    }
    else{
        
        fail.style.display = 'block'
        success.style.display = 'none'
    }
}