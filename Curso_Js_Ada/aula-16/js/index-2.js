async function getUsers() {
    const resposta = await fetch('https://dummyjson.com/users/')
    const users = await resposta.json()
    console.log(users)
}
getUsers()
async function getUser() {
    const resposta = await fetch ('https://dummyjson.com/users/1')
    const user = await resposta.json()
    console.log(user)
}
getUser()

async function createUser() {
    const userData = {
        "firstName": "Lara",
        "lastName": "Freitas",
        "age": 21
    }
    try {
        await fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        }catch (erro) {
            console("Deu ruim ao tentar criar um usuário. ", erro)
        }
    }

createUser()