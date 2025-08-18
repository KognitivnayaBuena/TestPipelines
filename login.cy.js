describe('Login Flow', () => {
    it('should log in and show dashboard', () => {
      cy.visit('/login');
      cy.get('input[name="username"]').type('testuser');
      cy.get('input[name="password"]').type('password123');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/dashboard');
      cy.contains('Welcome, testuser!');
    });
  });
  