let check = document.querySelector('.regCheck');

function clickTesting() {
    let filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!filter.test(check.value)) {
        check.style.borderColor = '#f00';
        let newDiv = document.createElement('div');
        newDiv.classList.add('failInput');
        newDiv.innerHTML = 'Please provide a valid email address';
        check.parentElement.insertBefore(newDiv, check.elementSibiling);
    }
    else {
        clearError();
    }

    function clearError() {
        check.style.borderColor = '';
        
        let errorMsg = document.querySelectorAll('.failInput');
        for (let i in errorMsg) {
            errorMsg[i].style.display = 'none';
        }
    }
}



// edit ReadME and check my whole code before posting (maybe more if i remember something else)
