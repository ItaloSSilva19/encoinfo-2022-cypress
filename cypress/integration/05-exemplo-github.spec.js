describe('The site must be accessible', function() {
    it('Github homepage must be accessible', function (){
        cy.visit('https://github.com');
        cy.contains('Let’s build from here');
    });    
    it('signin page must be accessible', function(){
        cy.contains('Sign in').click();
        cy.contains('Sign in to GitHub', {timeout: 20000});
    })
    it('Forms fulfilling must be accessible', function(){
        cy.get('#login_field').type('Humberto Gessinger');
        cy.get('#password').type('engenheirosDoHawai');
        cy.get('.btn btn-primary btn-block js-sign-in-button').contains('Sign in').click();
    })
});