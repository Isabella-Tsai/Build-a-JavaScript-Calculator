let preEl = document.getElementById('prev-el')
let curEl = document.getElementById('display')

function updateDisplay(inputEl){
    // clear function
    if(inputEl == 'C'){
        curEl.textContent = '0'
        preEl.textContent = ''
    }
    // input number or decimal
    else if(inputEl=='0' || inputEl=='1' || inputEl=='2' || inputEl=='3' || inputEl=='4' ||
                inputEl=='5' || inputEl=='6' || inputEl=='7' || inputEl=='8' || inputEl=='9' || inputEl=='.'){
        if(curEl.textContent == '0'){
            if (inputEl == '.'){
                curEl.textContent += inputEl
                preElDisplay(inputEl)
            }
            else{
                curEl.textContent = inputEl
                preElDisplay(inputEl)
            }
        }
        else if(inputEl == '.' && curEl.textContent.includes('.')){
            return
        }
        else if (curEl.textContent.includes('/') || curEl.textContent.includes('*') || curEl.textContent.includes('+') || curEl.textContent.includes('-')){
            curEl.textContent = inputEl
            preElDisplay(inputEl)
        }
        else{
            curEl.textContent+=inputEl
            preElDisplay(inputEl)
        }
    }
    // input operation
    else if(inputEl == '+' || inputEl == '-' || inputEl == '*' || inputEl == '/'){
        let str = []
        curEl.textContent = inputEl
        preElDisplay(inputEl)
        if(preEl.textContent.includes('=')){
            str=preEl.textContent.split('=')
            preEl.textContent = str[1]
        }
    }
    // input equal
    else if(inputEl == '=' && (preEl.textContent.includes('*') ||preEl.textContent.includes('/') || preEl.textContent.includes('+') || preEl.textContent.includes('-') )){
        let calculation = 0
        calculation = eval(preEl.textContent)
        curEl.textContent = calculation
        preElDisplay('=')
        preElDisplay(calculation)
    }
}

function preElDisplay(dataInput){

    const regex = new RegExp('[\+\*\/]$');
    const regexTwo = new RegExp('[\+\-\/\*]{2}$')

    if(dataInput == '*' || dataInput == '/' || dataInput == '+' || dataInput == '-'){
        if (regex.test(preEl.textContent)){
            if(dataInput == '-'){
                preEl.textContent+=dataInput
            }
            else{
                preEl.textContent = preEl.textContent.slice(0,-1)
                preEl.textContent+=dataInput
            }
        }
        else if(regexTwo.test(preEl.textContent)){
            preEl.textContent = preEl.textContent.slice(0,-2)
            preEl.textContent += dataInput
        }
        else{
            preEl.textContent += dataInput
        }
    } else {
        preEl.textContent += dataInput
    }
}
