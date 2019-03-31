//constructor
function easyHttps() {
    this.http = new XMLHttpRequest();
}

//Make a GET request
easyHttps.prototype.get = function(url, cb) {
    this.http.open('GET', url, true);

    //use arrow functions to eliminate creating a variable
    let self = this.http;
    this.http.onload = function() {
        if(self.status === 200) {
            //what you want to be called back, null if error
            cb(null, self.responseText);
        } else {
            cb(self.status);
        }
    }
  
    this.http.send();
}
//Make POST
easyHttps.prototype.post = function(url, data, cb) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    this.http.onload = () => {
        cb(null, this.http.responseText);
    }

//It needs to be passed from and object to a string
    this.http.send(JSON.stringify(data));
}

//Make PUT
easyHttps.prototype.put = function(url, data, cb){
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    this.http.open = () => {
        cb(null, this.http.responseText);
    };

    this.http.send(JSON.stringify(data));
}

//Make Delete
easyHttps.prototype.delete = function(url, cb) {
    this.http.open('DELETE', url, true);
    this.http.onload = () => {
        if(this.http.status === 200) {
            cb(null, 'Post Deleted');
        } else {
            cb(this.http.status);
        }
    };
    this.http.send();
}