const getData = document.getElementById('getData').addEventListener('click', loadData);

function loadData() {
    //create an XHR Obejct - so it can be used
    const xhr = new XMLHttpRequest();

    //OPEN - Initializes a request. This method is to be used from JavaScript code; to initialize a request from native code, use openRequest() instead.
    // TYPE - FILE/API - BOOLEAN IF ASYNC
    xhr.open('GET', 'data.txt', true);

    /* 
    HTTP Status
    200 - OK
    403 - Forbidden
    404 - Not Found
    */
    xhr.onload = function() {
        //this refers to xhr object - xhr.status
        if(this.status === 200) {
            const dataOut = document.getElementById('dataOut');
            const p = document.createElement('p');
            p.innerText = `
            ${this.responseText}`
            dataOut.append(p);
        }
    }

    //to finalize you must use send method
    xhr.send();
}
