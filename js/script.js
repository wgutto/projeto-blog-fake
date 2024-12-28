// https://jsonplaceholder.typicode.com/posts


// Adicionando os posts do blog
async function readPosts() {
    let postArea = document.querySelector('.posts')
    postArea.innerHTML = 'Carregando posts...'

    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()

    if(json.length > 0) {
        postArea.innerHTML = ''

        for(let i in json) {
            let title = document.createElement('h1')
            let body = document.createElement('p')
            let hr = document.createElement('hr')

            title.append(`${json[i].title}`)
            body.append(`${json[i].body}`)
            hr.append()

            postArea.appendChild(title)
            postArea.appendChild(body)
            postArea.appendChild(hr)
        }
    } else {
        alert('Nenhum post encontrado.')
    }
    
/*
    if(json.length > 0) {
        postArea.innerHTML = ''
        for(let i in json) {
            postArea.innerHTML += `<h1>${json[i].title}</h1><p>${json[i].body}</p><hr>`
        }
    } else {
        postArea.innerHTML = 'Nenhum post encontrado.'
    } 
*/
}

// Requisição de postagem
async function addNewPost(title, body) {
    await fetch(
        'https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
                userId: 2
            })
        }
    )
    document.querySelector('#title').value = ''
    document.querySelector('#body').value = ''

    readPosts()
}

// Evento de clique no botão
document.getElementById('button').addEventListener('click', () => {
    let title = document.querySelector('#title')
    let body = document.querySelector('#body')

    if(title.value && body.value) {
        addNewPost(title, body)
    } else {
        alert('Preencha os campos para continuar.')
    }
})


readPosts()