/* global cy, Cypress */

describe('new post page', () => {

    let user = {
        username: 'user',
        email: 'user@mail.de',
        password: `user123`
    }

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('_session_id')
    })

    it('should log in user', () => {
        cy.visit('/login')
    
        cy.get('input[name=username]').type(user.username)
        cy.get('input[name=email]').type(user.email)
        cy.get('input[name=password]').type(user.password)
    
        cy.contains('Login').click()

        cy.getCookies()
        .then((cookies) => {
        expect(cookies[0]).to.have.property('name', '_session_id')
        })
        
    })

    it('should navigate to new post page', () => {
        cy.contains('a.nav-link', 'New Blog').click()
        cy.contains('h1', 'New Blog')

    })

    it('should submit a new post to posts page', () => {
        let uniqueTime = Date.now()
        cy.get('input[name=title]').type('Test post')
        cy.get('textarea[name=body]').type(uniqueTime)
       
        cy.contains('Submit').click()

        //should be redirected to home page with posts
        cy.contains('Blogs')
        cy.contains(uniqueTime)
    })

})