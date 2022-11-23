describe('Menu must be accessible', function() {
    it('Github homepage must be accessible', function (){
        cy.visit('https://github.com');
        cy.contains('Let’s build from here');
    }); 

    it('Menu pricing must work', function (){
        cy.contains('Pricing').click();
        cy.contains('Get the complete developer platform.', {timeout: 20000});
    });     
});