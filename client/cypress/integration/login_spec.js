import axios from 'axios'
/* global cy */

describe('Login page', () => {
    
    let user = {
        username: 'user',
        email: 'user@mail.de',
        password: `user123`
    }

    it('should load successfully', () => {
        cy.visit('/login')
    })

    it('should contain the title Log in', () => {
        cy.contains('h1', 'Log In')
    })

    it('should log in a user with details', () => {
        cy.get('input[name=username]').type(user.username)
        cy.get('input[name=email]').type(user.email)

        cy.contains('button', 'Login').click()

        cy.contains('h3.error', 'verify credentials') //shows that it didnt log in user since password wasnt entered

        cy.get('input[name=password]').type(user.password)

        cy.contains('button', 'Login').click()

    })

    it('should have redirected user to home page and be logged in', () => {
        cy.contains('Bally Blogs')
        cy.contains('a.nav-link', 'New Blog')
        cy.contains('a.nav-link','Log Out')

        cy.getCookies()
        .should('have.length', 2)
        .then((cookies) => {
        expect(cookies[0]).to.have.property('name', '_session_id')
        })
    })

    it('should log the user out', () => {
        cy.contains('Log Out').click()
        cy.contains('Log In')
        cy.contains('Sign Up')
    })
})