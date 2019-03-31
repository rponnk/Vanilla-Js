//initialize XMLHTTPRequest
const xhr = new XMLHttpRequest();

const customer = document.getElementById('customer').addEventListener('click', loadSingle);

function loadSingle(e) {
    xhr.open('GET', 'customers.json', true);

    xhr.onload = function(){
        if(this.status === 200) {
            //because json is a string, we need to parse it to make it an object
            const customers = JSON.parse(this.responseText);
            let output = '';
            // const p = document.createElement('p');
            // p.innerText = `
            //  ${customer.name} works at ${customer.company}`
            //  singCust.appendChild(p);
            customers.forEach(function(customer){
                output = `
                <p>Name: ${customer.name}</p>`
            });
            const singCust = document.getElementById('sinCust');
            singCust.innerHTML = output;
        }
    };

    //finalize
    xhr.send();
}


//CUSTOMER(S) - Multi
const customers = document.getElementById('customers').addEventListener('click', loadMulti);

function loadMulti(e) {
    xhr.open('GET', "customers.json", true);

    xhr.onload = function(e) {
        if(this.status === 200) {
            const customers = JSON.parse(this.responseText);
            let output = '';
            //because its an array you have to loop through the JSON.Parsed data
            customers.forEach(function(customers){
                output += `
                    <p><b>Name:</b> ${customers.name}</p>
                `
                return output;
            });

            const multiCus = document.getElementById('multiCust');
            multiCus.innerHTML = output;
           
        }
    }

    xhr.send();
} 