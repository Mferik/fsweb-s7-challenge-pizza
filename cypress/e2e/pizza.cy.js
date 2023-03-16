describe('Home Page', () => {
  it('displays the slideshow and order button', () => {
    cy.visit('http://localhost:3000/'); 

    
    cy.get('.slide-container').should('exist');

    
    cy.contains('Sipariş Ver').click();
    cy.url().should('include', '/pizza');
  });
});

describe('Navbar', () => {
  it('displays the logo and links to home and order page', () => {
    cy.visit('http://localhost:3000/'); 

   
    cy.get('.navbar').find('img').should('exist');
    cy.get('.navbar').find('img').click();
    cy.url().should('include', '/');

   
    cy.get('.mainLink').contains('Ana Sayfa').click();
    cy.url().should('include', '/');
    cy.get('.mainLink').contains('Sipariş Ver').click();
    cy.url().should('include', '/pizza');
  });
});

describe('Footer', () => {
  it('displays the social media icons and copyright information', () => {
    cy.visit('http://localhost:3000/'); 

   
    cy.get('.socialMedia').find('a').should('have.length', 3);
    cy.get('.socialMedia').find('a').eq(0).should('have.attr', 'href', 'https://github.com/Mferik');
    cy.get('.socialMedia').find('a').eq(1).should('have.attr', 'href', 'https://www.instagram.com/fatiheriik/');
    cy.get('.socialMedia').find('a').eq(2).should('have.attr', 'href', 'https://www.linkedin.com/in/muhammet-fatih-erik-472b12214/');

    
    cy.get('.footer').should('exist');
    cy.get('.footer').contains('Tüm Hakları Saklıdır © | MFE\'s Pizzas |');
    cy.get('.footer').contains('Since 1998');
  });
});



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

