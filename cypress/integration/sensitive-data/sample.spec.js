const cypress = require("cypress")

describe('Sensitive data bad practice', () => {
  beforeEach(() => {
    cy.visit('https://notes-serverless-app.com/login')
  })

  it('fills the form with sensitive data', () => {
    cy.get('#email').type(cypress.env('user_email'))
    cy.get('#password').type(cypress.env('user_password'), { log:false }
  })
})
