describe('The site must be accessible', function() {
    it('Github homepage must be accessible', function (){
        cy.visit('https://github.com');
        cy.contains('Let’s build from here');
    });    
});