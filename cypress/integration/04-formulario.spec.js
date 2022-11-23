describe('Forms must work', function() {

    it('Site must be accessible', function() {
        cy.visit('https://jhemesonmotta.github.io/testaveis-curso-cypress/index-1.html');
    });
    it('User fulfill the form correctly', function() {
        cy.get('#nome').type('Humberto Gessinger');
        cy.get('#idade').type('53');

    });
    it('Must correctly be submited', function() {
        cy.get('button').contains('Enviar').click();
        cy.get('#success-message').contains('Sucesso, meu patrão')
    });
    it('', function() {});

    
});