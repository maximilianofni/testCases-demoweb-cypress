describe('Agregar al carrito una Laptop',function(){
  beforeEach(function(){
    cy.log("ejecutando pre-condiciones")
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('[class="nav-link"]').eq(4).click();
    cy.get('#loginusername').type('maxiQA');
    cy.get('#loginpassword').type('maxiQA');
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.get('#nameofuser').should('contain','Welcome maxiQA');
    cy.get('[class="nav-link"]').eq(3).click();
  })
  beforeEach(function(){
       cy.log("Poniendo datos en estado original")
  })
  it('el usuario maxiQA agrego una laptop al carrito con exito', function() {
    cy.get('[class="nav-link"]').eq(0).click();
    cy.get('[class="list-group-item"]').eq(2).click();
    cy.get('[class="list-group-item"]').eq(2).should('contain','Laptops');
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').should('contain','Sony vaio i5').click();
    cy.get('.col-sm-12 > .btn').click();
    cy.get('#cartur').should('contain','Cart').click();
  })
})