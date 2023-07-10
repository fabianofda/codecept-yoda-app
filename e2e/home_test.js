Feature('home')

Scenario('deve acessar home page e validar o titulo', ({ I, homePage }) => {

    homePage.acesso()
    homePage.titulo('Yodapp | QAninja')

})

Scenario('deve validar dados do usuario cadastrado', ({ I, homePage }) => {

    const data = {
        nome: 'Luke Skywalker',
        email: 'luke@jedi.com',
        inst: '@lukeskywalker'
    }

    homePage.acesso()
    homePage.dadosUsuario(data)

})

/*
 // I.wait(3)
const el = '//td[contains(text(), "")]/..'
   // I.amOnPage('/')
    // I.seeTitleEquals('Yodapp | QAninja')

     // I.amOnPage('/')
I.see('Luke Skywalker', el)
I.see('luke@jedi.com', el)
I.see('@lukeskywalker', el)

*/