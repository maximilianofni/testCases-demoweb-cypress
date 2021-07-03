describe('ingresar en la web',function(){
	beforeEach(function(){
		cy.visit('https://www.demoblaze.com/index.html')
	})
   it('alta de usuario', function() {
    cy.get('[class="nav-link"]').last().click();
    cy.get('#sign-username').type('pruebaCypress1');
    cy.get('#sign-password').type('pruebacypress1');
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.log("este usuario ya existe");
  })
})
