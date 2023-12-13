///<reference types="cypress"/>
import{faker} from '@faker-js/faker'
describe('User - Registration',()=>{
    let email;
    beforeEach(function(){
        cy.visit('/signup');
        
    })
   
xit('should be able to register user',()=>{
    
    cy.get('[data-testid="header"]').contains('Register to Application')
    cy.get('[data-testid="first-name"').type(faker.person.firstName())
    cy.get('[data-testid="last-name"]').type(faker.person.lastName())
    //email = Math.random(5).toString(5).toString(2)+"@gmail.com";
    cy.get('[data-testid="email"]').type("pp4567@gmail.com")
    cy.get('[data-testid="password"]').type('1234567*Pp');
    cy.get('[data-testid="confirm-password"]').type('1234567*Pp')

    cy.getByClass('MuiButton-label').contains('Signup').click();
    cy.get('[data-testid="welcome"]').should('be.visible');

})

it('should be able to login',()=>{
    cy.get('[data-testid="go-login"]').click();
    cy.getByClass('header').contains('Login to Application')
    cy.logMeIn("pp4567@gmail.com", "1234567*Pp")
    
})

})
