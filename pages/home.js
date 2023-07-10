const { I } = inject();

module.exports = {

  // insert your locators and methods here

  acesso: function () {

    I.amOnPage('/')
  },

  titulo: function (t) {

    I.seeTitleEquals(t)
  },

  dadosUsuario: function ({nome, email, inst}) {
    const el = '//td[contains(text(), "")]/..'

    I.see(nome, el)
    I.see(email, el)
    I.see(inst, el)

  }
}
