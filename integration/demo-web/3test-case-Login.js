describe('iniciar sesion',function(){
	beforeEach(function(){
		cy.visit('https://www.demoblaze.com/index.html')
	})
   it('el usuario maxiQA se logueo con exito', function() {
    cy.get('[class="nav-link"]').eq(4).click();
    cy.get('#loginusername').type('maxiQA');
    cy.get('#loginpassword').type('maxiQA');
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.get('#nameofuser').should('contain','Welcome maxiQA');
  })
})
