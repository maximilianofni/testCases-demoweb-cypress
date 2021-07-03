describe('ingresar en la web',function(){
  it('Carga la web con exito', function() {
    cy.visit('https://www.demoblaze.com/index.html');
    cy.get('#nava');
  })
})
