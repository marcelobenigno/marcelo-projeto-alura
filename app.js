function pesquisar(){
     let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById ("campo-pesquisa").value
  if(!campoPesquisa){
section.innerHTML= "<p>nada foi encontrado. você não enviou o nome do time</p>"
    return

  }
  campoPesquisa = campoPesquisa.toLowerCase()
     let resultados = "";
     let titulo ="";
     let descricao = "";
     let tags = "";
    // para cada dado dentro da lista de dados
     for(let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      if(dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || dado.tags.includes(campoPesquisa)){
        resultados +=`<div class="item-resultado">
        <h2><a href="#" target="_blank">${dado.titulo}</a>
       </h2>
         <p class="descricao-meta">${dado.descricao} </p>
       <a href=${dado.link} target="_blank" >Mais informações</a>
        </div>
        `
      }
      if(!resultados){
resultados = "<p>Nada foi encontrado</p>"
      }
     
     }
    section.innerHTML = resultados
    }
      

 