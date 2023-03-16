describe('Form Testleri', () => {
    it('Formu başarıyla doldurup göndermek', () => {
      cy.visit('http://localhost:3000/pizza');
      cy.get('select[name="cesit"]').select('margarita');
    cy.get('input[type="radio"][name="boyut"][value="Small"]').check();
    cy.get('input[type="checkbox"][name="sucuk"]').check();
    cy.get('input[type="text"][name="isim"]').type('Fatih Erik');
    cy.get('input[type="text"][name="adres"]').type('istanbul kartal');
    cy.get('input[type="tel"][name="telefon"]').type('216-457-7744');
    cy.get('input[type="number"][name="adet"]').type('2');
    cy.get('input[name="not"]').type('Lütfen hızlı teslimat yapın.');

    cy.get('input[type="submit"]').should('be.disabled');
    
    cy.get('input[type="submit"]').should('be.disabled').then(($btn) => {
        expect($btn).to.have.attr('disabled', 'disabled');
        Cypress.$($btn).removeAttr('disabled');
      });

      cy.get('input[type="submit"]').should('be.enabled').click();
    
      
  });
})