

function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length ===4){
        return pin;
    }else{
        // console.log('pin not 4 digit', pin)
        return getPin()
    }
    
}


function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}


// for(let i = 0; i < 10; i ++){
//     console.log(getPin())
// }

document.getElementById('generate-pin').addEventListener('click' , function(){
    const pin = getPin();

    //display pin
    const pinField = document.getElementById('display-pin');
    pinField.value = pin
})




document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value= ''
        }else if ( number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber
    }
})


document.getElementById('verify-pin').addEventListener('click', function(){

    // get the generatePin value 
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value

    
    // get the typedNumber value 
    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value
    const pinSuccess = document.getElementById('pin-success')
    const pinFailure = document.getElementById('pin-failure');
    if(typedNumber === currentPin){
        pinSuccess.style.display = 'block'
        pinFailure.style.display = 'none'
        
    }else {
        pinFailure.style.display = 'block'
        pinSuccess.style.display = 'none'
        
    }
})