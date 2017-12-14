const backend_url = "http://localhost:3001"

const headers = {
    'Accept': 'application/json',
    'Authorization': 'whatever-you-want',
    'Content-Type':'application/json'
}

export function getAllCategories () {
    return fetch(`${backend_url}/categories`, {headers})
      .then((res) => res.json())
      .then(obj => obj.categories)
  }
  
  export function getAllPosts () {
    return fetch(`${backend_url}/posts`, {headers})
      .then((res) => res.json())
      .then(obj => obj)
  }
  
  export function getPost (id) {
    return fetch(`${backend_url}/posts/${id}`, {method: 'GET', headers: headers}) 
      .then((res) => res.json())
      .then(obj => obj)
  }
  
  export function addPost (post) {
    return fetch(`${backend_url}/posts`, {method: 'POST', headers: headers, body: JSON.stringify(post)})
      .then((res) => res.json())
      .then(obj => obj) 
  }
  
  export function deletePost (id) {
    return fetch(`${backend_url}/posts/${id}`, {method: 'DELETE', headers: headers}) 
      .then((res) => res.json())
      .then(obj => obj)
  }
  
  export function editPost (post) {
    return fetch(`${backend_url}/posts/${post.id}`, {method: 'PUT', headers: headers, body: JSON.stringify(post)})
      .then((res) => res.json())
      .then(obj => obj) 
  }
  
  export function votePost (id, option) {
    return fetch(`${backend_url}/posts/${id}`, {method: 'POST', headers: headers, body: JSON.stringify({ option }) }) 
      .then((res) => res.json())
      .then(obj => obj )
  }
  
  export function getAllCommentFromPost (post_id) {
    return fetch(`${backend_url}/posts/${post_id}/comments`, {headers})
      .then((res) => res.json())
      .then(obj => obj)
  }
  
  export function addComment (comment) {
    return fetch(`${backend_url}/comments`, {method: 'POST', headers: headers, body: JSON.stringify(comment) })
      .then((res) => res.json())
      .then(obj => obj)
  }
  
  export function deleteComment (id) {
    return fetch(`${backend_url}/comments/${id}`, {method: 'DELETE', headers: headers })
      .then((res) => res.json())
      .then(obj => obj)
  }
  
  export function editComment (comment) {
    return fetch(`${backend_url}/comments/${comment.id}`, {method: 'PUT', headers: headers, body: JSON.stringify(comment)})
      .then((res) => res.json())
      .then(obj => obj)
  }
  
  export function voteComment (id, option) {
    return fetch(`${backend_url}/comments/${id}`, {method: 'POST', headers: headers, body: JSON.stringify({ option }) }) 
      .then((res) => res.json())
      .then(obj => obj )
  }