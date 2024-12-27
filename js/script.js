// https://jsonplaceholder.typicode.com/posts

async function readPosts() {
    let postArea = document.querySelector('.posts')
    postArea.innerHTML = 'Carregando posts...'

    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()

    if(json.length > 0) {
        postArea.innerHTML = ''

        for(let i in json) {
            let h1 = document.createElement('h1')
            let p = document.createElement('p')
            let hr = document.createElement('hr')

            h1.append(`${json[i].title}`)
            p.append(`${json[i].body}`)
            hr.append()

            postArea.appendChild(h1)
            postArea.appendChild(p)
            postArea.appendChild(hr)

        }
    } else {
        postArea.innerHTML = 'Nenhum post encontrado.'
    }


/*
    if(json.length > 0) {
        postArea.innerHTML = ''
        for(let i in json) {
            postArea.innerHTML += `<h1>${json[i].title}</h1><p>${json[i].body}</p><hr>`
        }
    } else {
        postArea.innerHTML = 'Nenhum post encontrado.'
    } */
}

readPosts()