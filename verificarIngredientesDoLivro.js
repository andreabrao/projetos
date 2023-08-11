    /*  PROJETO DE VERIFICADOR DE INGREDIENTES FEITO PÔR @github.com/andreabrao COPIA E COLE NO VSCODE E RODE ATRAVÉS DO CONSOLE DO PROGRAMA   */
   
  
    //••• INGREDIENTES DA SUA GELADEIRA •••//
    let ingredienteMolhado1 = ("margarina")
    let ingredienteMolhado2 = ("leite")
    let ingredienteSecos1 = ("açúcar")
    let ingredienteSecos2 = ("nescau")
    let ingredienteSecos3 = ("trigo")
    let ingredienteSecos4 = ("fermento em pó")
    
    
     //••• INGREDIENTES DO SEU LIVRO •••//
    let ingredientesDoLivro1 = ("manteiga")
    let ingredientesDoLivro2 = ("leite")
    let ingredientesDoLivro_1 = ("açúcar") 
    let ingredientesDoLivro_2= ("chocolate meio amargo")
    let ingredientesDoLivro_3 = ("trigo")
    let ingredientesDoLivro_4 = ("fermento pó")
    
    
  
    //••• VERIFICAR SE OS INGREDIENTES DA GELADEIRA SÃO IDÊNTICOS AOS DO LIVRO •••//
    if(ingredienteMolhado1 === ingredientesDoLivro1) {
      console.log("SIM, o ingrediente " + ingredienteMolhado1 + " é o mesmo ingrediente do livro")
    }else {
      console.log("NÃO, o ingrediente " + ingredienteMolhado1 + " não é o mesmo ingrediente do livro")
    }
    
    ///
    
    if(ingredienteMolhado2 === ingredientesDoLivro2) {
      console.log("SIM, o ingrediente " + ingredienteMolhado2 + " é o mesmo ingrediente do livro")
    }else {
      console.log("NÃO, o ingrediente " + ingredienteMolhado2 + " não é o mesmo ingrediente do livro")
    }
    
    ///
    
    if(ingredienteSecos1 === ingredientesDoLivro_1) {
      console.log("SIM, o ingrediente " + ingredienteSecos1 + " é o mesmo ingrediente do livro")
    }else {
      console.log("NÃO, o ingrediente " + ingredienteSecos1 + " não é o mesmo ingrediente do livro")
    }
    
    ///

    if(ingredienteSecos2 === ingredientesDoLivro_2) {
      console.log("SIM, o ingrediente " + ingredienteSecos2 + " é o mesmo ingrediente do livro")
    }else {
      console.log("NÃO, o ingrediente " + ingredienteSecos2 + " não é o mesmo ingrediente do livro")
    }
    
    ///
    
    if(ingredienteSecos3 === ingredientesDoLivro_3) {
      console.log("SIM, o ingrediente " + ingredienteSecos3 + " é o mesmo ingrediente do livro")
    }else {
      console.log("NÃO, o ingrediente " + ingredienteSecos3 + " não é o mesmo ingrediente do livro")
    }
    
    ///
    
    if(ingredienteSecos4 === ingredientesDoLivro_4) {
      console.log("SIM, o ingrediente " + ingredienteSecos4 + " é o mesmo ingrediente do livro")
    }else {
      console.log("NÃO, o ingrediente " + ingredienteSecos4 + " não é o mesmo ingrediente do livro")
    }


    //PARTE NOVA
    
        //DIGITE 1 NA VARIÁVEL tudoCerto PARA CONFIRMAR QUE ESTÁ TUDO CERTO PARA SEGUIRMOS PARA O MODO DE PREPARO DA RECEITA
    const tudoCerto = "1"
    
    
    function modoDePreparo() {
      if(tudoCerto == 1) {
      console.log("Modo de preparo do bolo")
      console.log(`Pegue uma colher de sopa raza de ${ingredientesDoLivro1}, e coloque na mesma xícara que vai usar, depois coloque no microondas por 1 minuto. Coloque uma colher de sopa de ${ingredientesDoLivro2}, junto com a manteiga derretida. Em seguida adicione duas colher de sopa de ${ingredientesDoLivro_1}, juntamente com duas colheres de sopa de ${ingredientesDoLivro_2} e mexa muito bem. Vá colocando duas colheres de sopa cheia de ${ingredientesDoLivro_3} aos poucos e mexa com um garfo, depois de mexer tudo muito bem coloque 1/3 de colher de café de ${ingredientesDoLivro_4} e mexa devagar, logo coloque no microondas por 1 minuto e pronto.`)
    }
    }
    if(tudoCerto == 1) {
      modoDePreparo()
    }
