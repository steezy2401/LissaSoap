import { beforeEach, cy, describe, it } from 'local-cypress';

describe('Index Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display correct heading', () => {
    cy.get('h1').should(
      'contain',
      'Explore a beautiful world of soap with us'
    );
  });

    it('clicks the link "New"', () => {
  
      cy.contains('New').click()
    })

    it('clicks the link "New"', () => {
  
      cy.contains('Popular').click()
    })
  

});
