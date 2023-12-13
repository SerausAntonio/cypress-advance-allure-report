describe('api login request', () => {

    it('login to api with post request', () => {

        cy.request({

            method: 'POST',
            url: 'https://todo.qacart.com/api/v1/users/login',

            body: {
                "email": "pp4567@gmail.com",
                "password": "1234567*Pp"
            }
        }).then(response => {
            //console.log(JSON.stringify(response.body));
            expect(response.status).to.eq(200);
            console.log(response.body.firstName);
            console.log(response.body.access_token);
            console.log(response.body.userID);
        })
    })
    it('should add post with api registration', () => {
        cy.request({
            method: 'POST',
            url: 'https://todo.qacart.com/api/v1/users/register',
            body: {
                "email": "ln33@gmail.com",
                "password": "JYu=$6fQV*?SnK6",
                "firstName": "Liam",
                "lastName": "Neelsen"
            }
        }).then(response => {
            console.log(JSON.stringify(response.body));
            expect(response.status).to.eq(201)
        })

        cy.visit('/todo')
        cy.get('[data-testid="add"]').click();
        cy.get('[data-testid="new-todo"]').type('Learn Cypress')
        cy.get('[data-testid="submit-newTask"]').click()
        cy.get('[data-testid="todo-item"]').should('contain.text', 'Learn Cypress')

    })
    it.only('should add post with api registration', () => {
        let token;
        cy.request({
            method: 'POST',
            url: 'https://todo.qacart.com/api/v1/users/register',
            body: {
                "email": "liamn11255333@gmail.com",
                "password": "JYu=$6fQV*?SnK6",
                "firstName": "Liam",
                "lastName": "Neelsen"
            }
        }).then(response => {
            expect(response.status).to.eq(201)
            token = response.body.access_token;
        }).then(() => {
            cy.request({
                method: 'POST',
                url: 'https://todo.qacart.com/api/v1/tasks',
                body: {
                    "item": "Learn Cypress",
                    "isCompleted": false
                },
                headers: {
                    Authorization: 'Bearer ' + `${token}`,
                }
            }).then(response => {

                console.log(JSON.stringify(response));
            })

        }) 
    })


})