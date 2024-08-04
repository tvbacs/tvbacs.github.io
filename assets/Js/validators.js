function Validator(options) {
    var formElement= document.querySelector(options.form);
     if(formElement){
        options.rules.forEach(function(rule){
            var inputElement = formElement.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector('.form-message');
            if(inputElement){
                inputElement.onblur = function(){
                    var errorMessage = rule.test(inputElement.value);
                    if(errorMessage){
                        errorElement.innerText=errorMessage;
                        errorElement.classList.add('invalid');
                        inputElement.classList.add('invalid');
                    }else{
                        errorElement.innerText='';
                        errorElement.classList.remove('invalid');
                        inputElement.classList.remove('invalid');

                    }
                }
            }
        });
     }
}

isRequired=function(selector){
    return {
        selector: selector,
        test: function(value){
            return value.trim() ? undefined : 'Please enter this field'
        }
    }
}
isEmail=function(selector){
    return {
        selector: selector,
        test: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'This field must be Email'
        }
    }
}
minlength=function(selector,quantity){
    return {
        selector: selector,
        test: function(value){
            return value.length >= quantity ? undefined : `Minimum ${quantity} characters` 
        }
    }
}
