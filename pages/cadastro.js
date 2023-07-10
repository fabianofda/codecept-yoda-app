const { I } = inject();

module.exports = {
  // insert your locators and methods here

  acesso: function () {

    I.amOnPage('/')
    I.click('Novo')
    I.see('Cadastrar novo usuário', 'p')
  },

  formulario: function ({ nome, email, select, mes, ano, dia, inst }) {

    I.fillField('#nome', nome)
    I.fillField('#email', email)
    I.selectOption('.is-fullwidth select', select)
    I.click('Cavaleiro Jedi')
    I.click('input[placeholder*="Selecione"]');
    I.selectOption('(//header[@class="datepicker-header"]//select)[1]', mes)
    I.selectOption('(//header[@class="datepicker-header"]//select)[2]', ano)
    I.click(`//a[contains(@class, "datepicker-cell")]//span[text()="${dia}"]`)
    I.fillField('#insta', inst)
    I.click('//input[@name="comunications"]/../span[@class="check"]')
    I.click('Cadastrar')
  },

  subimeterFormulario: function () {
    I.click('Cadastrar')
  },

  messagemSucesso: function (msg) {

    I.see(msg, '.toast div')
  },

  messagemAlerta: function ({ nome, email, ordem, nasc, inst }) {
    const el = '//form //p'

    I.see(nome, el)
    I.see(email, el)
    I.see(ordem, el)
    I.see(nasc, el)
    I.see(inst, el)
  }

}
