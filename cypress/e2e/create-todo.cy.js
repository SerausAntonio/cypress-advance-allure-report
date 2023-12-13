///<reference types="cypress"/>
describe('Handle todos',()=>{
    beforeEach(function(){
        cy.visit('/signup');
        
    })
it('should be able to add a new todo',()=>{
    cy.get('[data-testid="go-login"]').click();
    cy.logMeIn("pp4567@gmail.com", "1234567*Pp")

    cy.getByClass('MuiTouchRipple-root').eq(1).click({force:true});
    
    cy.get('[data-testid="new-todo"]').type("Christmas shopping");
    cy.getByClass('MuiButton-label').contains('Create Todo').click();
    cy.get('[data-testid="todo-text"]').contains("Christmas shopping");
})

})