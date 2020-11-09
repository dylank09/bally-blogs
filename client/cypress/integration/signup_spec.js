/* global cy */

describe('Sign up', () => {

    it('should be on the home page ', () => {
        cy.visit('/')
        cy.contains('Bally Blogs')
    })

    it('should nav to sign up ', () => {
        cy.contains('a.nav-link', 'Sign Up').click()
        cy.contains('h1', 'Sign Up')
        
    })

    it('should input user details and submit user ', () => {
        let now = Date.now()
        let uniqueUsername = now + 'user'
        let uniqueEmail = now + '@mail.com'
        cy.get('input[name=username]').type(uniqueUsername)
        cy.get('input[name=email]').type(uniqueEmail)
        cy.get('input[name=password]').type('userpass')
        cy.get('input[name=password_confirmation]').type('userpass')

        cy.contains('button', 'Sign Up').click()
    })

    it('should have redirected user to homepage and logged them in', () => {
        cy.contains('h1.header', 'Bally Blogs')
        cy.contains('a.nav-link', 'Log Out')
        cy.contains('a.nav-link', 'New Blog')
    })
    
})