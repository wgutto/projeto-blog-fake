// https://jsonplaceholder.typicode.com/posts

async function readPosts() {
    let postArea = document.querySelector('.posts')
    postArea.innerHTML = 'Carregando posts...'

    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()


    if(json.length > 0) {
        postArea.innerHTML = ''
        for(let i in json) {
            postArea.innerHTML += `<h1>${json[i].title}</h1><p>${json[i].body}</p><hr>`
        }
    } else {
        postArea.innerHTML = 'Nenhum post encontrado.'
    }
}

readPosts()