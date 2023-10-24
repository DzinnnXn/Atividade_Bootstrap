const tabela = document.querySelector('.tabela-js')
axios.get('https://apiaulas.andresilvr232.repl.co/funcionarios').then(function (resposta) {
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
                <td> 
                <span class="material-symbols-outlined custom-icon">
                    delete
                </span>


                <span class="material-symbols-outlined custom-icon-2">
                edit
                </span> </td>
             </tr>
               
                `
    })
}

