/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * @author José Compadre Junior
 * @version 3.0
 * @license MIT
 * @since 2019-10-05 12:42:08
 * # Changelog
 * ## [3.0]
 * ### Added
 * - Support to ES7 Async & Await methods
 */

class EasyHTTP {
    //Make an HTTP GET Request
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    //Make an HTTP POST Request
    async post(url, data) {

        const response = await fetch(url, {
            method: 'POST',
            headers: { 
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
 
    }

    //Make an HTTP PUT Request
    async put(url, data) {

        const response = await fetch(url, {
            method: 'PUT',
            headers: { 
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
 
    }

    //Make an HTTP DELETE Request
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: { 
                'Content-type': 'application/json'
            }
        });
        const resData = await 'Resource deleted.';
        return resData;
        
    }
}