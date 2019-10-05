/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * @author José Compadre Junior
 * @version 2.0
 * @license MIT
 * @since 2019-10-05 12:42:08
 */

class EasyHTTP {
    //Make an HTTP GET Request
    get(url) {

        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));            
        });
    }

    //Make an HTTP POST Request
    post(url, data) {

        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: { 
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));            
        });
    }

    //Make an HTTP PUT Request
    put(url, data) {

        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: { 
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));            
        });
    }

    //Make an HTTP DELETE Request
    delete(url) {

        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: { 
                    'Content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(() => resolve('Resource deleted'))
            .catch(err => reject(err));            
        });
    }
}


//VERSION 1 CODE BELLOW
// function easyHTTP() {
//     this.http = new XMLHttpRequest();
// }

// //Make an HTTP GET Request
// easyHTTP.prototype.get = function (url, callback) {
    
//     this.http.open('GET', url, true);

//     let self = this;
//     this.http.onload = function () {
//         if (self.http.status === 200) {
//             callback(self.http.responseText, self.http.status);
//         } else {
//             callback(null, self.http.status)
//         }
//     }

//     this.http.send();
// }

// //Make an HTTP POST Request
// easyHTTP.prototype.post = function (url, data, callback) {
//     this.http.open('POST', url, true);
//     this.http.setRequestHeader('Content-type', 'application/json');

//     let self = this;
//     this.http.onload = function () {
//         callback(self.http.responseText, self.http.status);    
//     }

//     this.http.send(JSON.stringify(data));
// }

// //Make an HTTP PUT Request
// easyHTTP.prototype.put = function (url, data, callback) {
//     this.http.open('PUT', url, true);
//     this.http.setRequestHeader('Content-type', 'application/json');

//     let self = this;
//     this.http.onload = function () {
//         callback(self.http.responseText, self.http.status);    
//     }

//     this.http.send(JSON.stringify(data));
// }


// //Make an HTTP DELETE Request
// easyHTTP.prototype.delete = function (url, callback) {
//     this.http.open('DELETE', url, true);

//     let self = this;
//     this.http.onload = function () {
//         if (self.http.status === 200) {
//             callback(self.http.responseText, self.http.status);
//         } else {
//             callback(null, self.http.status)
//         }
//     }

//     this.http.send();
// }
