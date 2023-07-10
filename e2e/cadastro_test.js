

Feature('cadastro')

Scenario('deve cadastrar novo usuário Cavaleiro Jedi', ({ I, cadastroPage }) => {

    const data = {
        nome: 'jedi qa to test',
        email: 'jedi@totest.com',
        select: 'Jedi',
        mes: 'janeiro',
        ano: '2000',
        dia: '31',
        inst: '@totest'
    }

    cadastroPage.acesso()
    cadastroPage.formulario(data)
    cadastroPage.messagemSucesso('Usuário cadastrado com sucesso!')

})

Scenario('deve validar campos obrigatorios nao informados', ({ I, cadastroPage }) => {

    const mensagen = {
        nome: 'O nome é obrigatório.',
        email: 'O email é obrigatório.',
        ordem: 'Escolha a ordem.',
        nasc: 'Informe a data de nascimento.',
        inst: 'O instagram é obrigatório.'
    }

    cadastroPage.acesso()
    cadastroPage.subimeterFormulario()
    cadastroPage.messagemAlerta(mensagen)

})

/*
 // I.amOnPage('/')
    // I.click('Novo')
    // I.see('Cadastrar novo usuário', 'p')
    // I.fillField('#nome', 'jedi qa to test')
    // I.fillField('#email', 'jedi@totest.com')
    // I.selectOption('.is-fullwidth select', 'Jedi')
    // I.click('Cavaleiro Jedi')
    // I.click('input[placeholder*="Selecione"]');
    // I.selectOption('(//header[@class="datepicker-header"]//select)[1]', 'junho')
    // I.selectOption('(//header[@class="datepicker-header"]//select)[2]', '2000')
    // I.click('//a[contains(@class, "datepicker-cell")]//span[text()="2"]')
    // I.fillField('#insta', '@totest')
    // I.click('//input[@name="comunications"]/../span[@class="check"]')
    // I.click('Cadastrar')

    // I.see('Usuário cadastrado com sucesso!', '.toast div')

    // I.amOnPage('/new')
    // I.click('Cadastrar')
    // I.see('O nome é obrigatório.', '//form //p')
    // I.see('O email é obrigatório.', '//form //p')
    // I.see('Escolha a ordem.', '//form //p')
    // I.see('Informe a data de nascimento.', '//form //p')
    // I.see('O instagram é obrigatório.', '//form //p')
*/