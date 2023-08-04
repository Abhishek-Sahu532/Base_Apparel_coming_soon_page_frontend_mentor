function getValue() {
    let inputValue = document.getElementById("email").value;
    
    let errorPara = document.getElementsByClassName('error')[0]

    let emailFormat  =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  
        if(inputValue.match(emailFormat)){
            errorPara.innerHTML = 'Email has submitted.'
           errorPara.style.display = "block"
        
        }else{
            errorPara.innerHTML = 'Please provide the valid E-Mail.'
            errorPara.style.display = "block"
        }
}
