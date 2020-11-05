/* global cy, Cypress */

describe('new post page', () => {

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('_session_id')
    })

    it('should log in user', () => {
        cy.visit('/login')
    
        cy.get('input[name=username]').type('dylank09')
        cy.get('input[name=email]').type('dylank09@gmail.com')
        cy.get('input[name=password]').type(`Coolio35`)
    
        cy.contains('Login').click()

        cy.getCookies()
        .then((cookies) => {
        expect(cookies[0]).to.have.property('name', '_session_id')
        })
        
    })

    it('should navigate to new post page', () => {
        cy.contains('a.nav-link', 'New Post').click()
        cy.contains('h1', 'New Post')

    })

    it('should submit a new post to posts page', () => {
        let uniqueTime = Date.now()
        cy.get('input[name=title]').type('Test post')
        cy.get('textarea[name=body]').type(uniqueTime)
       
        cy.contains('Submit').click()

        //should be redireted to home page with posts
        cy.contains('Posts')
        cy.contains(uniqueTime)
    })

})