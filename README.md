# easyhttp
This is a sample implementation of an HTTP library from the course Modern JavaScript From The Beginning by [@bradtraversy](https://github.com/bradtraversy). This repository is for learning objectives only.

To use the library just put it in your HTML file with the following markup: `<script src="easyhttp3.js"></script>` jubt before the closing `</body>` tag. 

## Intantiate the EasyHTTP object:
```javascript 
const http = new EasyHTTP();
```

## Calling GET method:
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
 http.get(GETPOSTS)
    .then(data => console.log(data))
    .catch(err => console.log(err));
```






