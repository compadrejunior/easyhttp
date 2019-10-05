const http = new EasyHTTP();

//Setting Routes
const GETPOSTS = 'https://jsonplaceholder.typicode.com/posts';
const POSTPOSTS = 'https://jsonplaceholder.typicode.com/posts';
const PUTPOSTS = 'https://jsonplaceholder.typicode.com/posts/';
const DELETEPOSTS = 'https://jsonplaceholder.typicode.com/posts/';

//Load data
function loadData(){
    const loadStarted = new Date();
    let output = '';
    http.get(GETPOSTS)
    .then((data) => {
        console.log(data);
        data.forEach(post => {
            output += `

            <div class="card mb-1" id="post-row-${post.id}">
            <h5 class="card-header">${post.title}</h5>    
                <div class="card-body">    
                    <p class="card-text">${post.body}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${post.id} User ID: ${post.userId}</li>
                </ul>
                <div class="card-body text-right">
                    <input type="button" class="btn btn-secondary" value="Delete" onClick="deletePost(${post.id})">
                </div>
            </div>
            `;
        });
        document.querySelector('.posts').innerHTML = output;
        const loadFinished = new Date();
        console.log(`Last load time: ${loadFinished.toLocaleString()}`);
        const diffTime = Math.abs(loadFinished - loadStarted);
        console.log(`Total load time: ${diffTime} miliseconds`);
    }).catch((err) => {
        output = '<p>Something went wrong.</p>';
        console.log(err);
    });
    
}
loadData();

//Add Event Listeners
document.getElementById('btn-add-post').addEventListener('click', addPost);


//Action Functions
function addPost(e) {
    const data = {
        title: document.getElementById('title').value,
        body: document.getElementById('body').value
    };

    http.post(POSTPOSTS, data)
        .then(data => console.log(data))
        .catch(err => console.log(err));
    e.preventDefault();
}

function deletePost(postID) {
    console.log(`delete clicked:${postID}`);
        
    http.delete(`${DELETEPOSTS + postID}`)
        .then(data => console.log(data))
        .then(() => loadData())
        .catch(err => console.log(err));
    document.getElementById(`post-row-${postID}`).remove();
}
