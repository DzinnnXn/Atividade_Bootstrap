const tabela = document.querySelector('.tabela-js')
axios.get('http://apiaulas.andresilvr232.repl.co/funcionarios').then(function (resposta) {
    getData(resposta.data)
}).catch(function (error) {
    console.log(error)
})

function getData(dados) {
    dados.map((item) => {
        tabela.innerHTML += `
            <tr>
                <th scope="row">${item.id}</th>
                <td>${item.nome}</td>
                <td>${item.cargo}</td>
                <td>${item.salario}</td>
                <td>Ação</td>
            </tr>
                `
    })
}