//ES6
class EasyHTTP {
    //make HTTP get request
    get(url) {
        return new Promise((resolve, reject)=> {
            fetch(url)
            .then(res => res.json())
            .then(data=> resolve(data))
            .catch(err => reject(err));
        });
    }

    post(url, data) {
        return new Promise((resolve, reject)=> {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        });
    }
//put
    put(url, data) {
        return new Promise((resolve, reject)=> {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        });
    }

    //delete - cdont need body because were not sending data
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "DELETE",
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(() => resolve())
                .catch(err => reject(err))
        })
    }
}

//ES8
