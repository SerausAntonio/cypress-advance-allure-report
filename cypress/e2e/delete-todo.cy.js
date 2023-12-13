///<reference types="cypress"/>
describe('Handle todos',()=>{
    beforeEach(function(){
        cy.visit('/signup');
        
    })
    it('should be able to delete todo',()=>{
        cy.get('[data-testid="go-login"]').click();
        cy.logMeIn("pp4567@gmail.com", "1234567*Pp")
    
        cy.getByClass('MuiTouchRipple-root').eq(1).click({force:true});
        cy.get('[data-testid="back"]').click();

        cy.get('[data-testid="todo-text"]').should('be.visible')
        cy.get('[data-testid="complete-task"]').check();

        cy.get('[data-testid="delete"]').click({multiple: true});
        cy.get('[data-testid="no-todos"').should('contain.text','No Available Todos')
    
    })
})