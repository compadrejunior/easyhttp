# easyhttp
This is a sample implementation of an HTTP library from the course Modern JavaScript From The Beginning by [@bradtraversy](https://github.com/bradtraversy). This repository is for learning objectives only.

To use the library just put it in your HTML file with the following markup: `<script src="easyhttp3.js"></script>` jubt before the closing `</body>` tag. 

## Intantiate the EasyHTTP object:
```javascript 
const http = new EasyHTTP();
```

## Calling GET method:
Gets a resource by its corresponding URL.
```javascript 
http.get(url)
```
**URL:** 

The resource to be called.

**Returns:** 

It returs a promise object with *data* and *error* objects so you can call it asychronously. 

* Data - the response data in JSON format. 
* Error - any error message.

 Example:

```javascript
 http.get('https://jsonplaceholder.typicode.com/posts')
    .then(data => console.log(data))
    .catch(err => console.log(err));
```

## Calling POST method:
Adds a new resource by its corresponding URL.
```javascript 
http.post(url, data)
```
**URL:** 

The resource to be called.

**Data:**

The data to be sent in JSON format.

**Returns:** 

It returs a promise object with *data* and *error* objects so you can call it asychronously. 

* Data - the response data in JSON format. 
* Error - any error message.

 Example:

```javascript
 const data = {
        title: document.getElementById('title').value,
        body: document.getElementById('body').value
    };

 http.post('https://jsonplaceholder.typicode.com/posts', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));
```

## Calling PUT method:
Updates a resource by its corresponding URL.
```javascript 
http.put(url, data)
```
**URL:** 

The resource to be called.

**Data:**

The data to be sent in JSON format.

**Returns:** 

It returs a promise object with *data* and *error* objects so you can call it asychronously. 

* Data - the response data in JSON format. 
* Error - any error message.

 Example:

```javascript
 const data = {
        title: document.getElementById('title').value,
        body: document.getElementById('body').value
    };

 http.put('https://jsonplaceholder.typicode.com/posts', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));
```

## Calling DELETE method:
Deletes a resource by its corresponding url.
```javascript 
http.delete(url)
```
**URL:** 

The resource to be called.

**Data:**

The data to be sent in JSON format.

**Returns:** 

It returs a promise object with *data* and *error* objects so you can call it asychronously. 

* Data - the response data in JSON format. 
* Error - any error message.

 Example:

```javascript
 http.delete('https://jsonplaceholder.typicode.com/posts', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));
```




