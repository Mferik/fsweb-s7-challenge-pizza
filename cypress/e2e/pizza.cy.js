describe('Sipariş Formu', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pizza');
  });

  it('Doğru alanları doldurarak formu gönderebilmeli', () => {
    cy.get('[name="cesit"]').select('Margarita');
    cy.get('[name="boyut"]').check('Small');
    cy.get('[name="sucuk"]').check();
    cy.get('[name="isim"]').type('Fatih Erik');
    cy.get('[name="adres"]').type('Kartal İstanbul');
    cy.get('[name="telefon"]').type('5535484578');
    cy.get('[name="not"]').type('Ekstra kaşar peyniri lütfen.');
    cy.get('[name="adet"]').clear().type('2');
    cy.get('[name="button"]').click();
    cy.url().should('include', '/siparisonay');
    cy.contains('Fatih Erik').should('exist');
  })
  
});