import axios from 'axios'
/* global cy */

const user = {
    username:'dylank09', 
    email:'dylank09@gmail.com', 
    password:'Coolio35'
}

describe('Login page', () => {
    
    it('should load successfully', () => {
        cy.visit('/login')
    })

    it('should contain the title Log in', () => {
        cy.contains('Log In')
    })

    it('should log in a user with details', () => {
        cy.get('input[name=username]').type('dylank09')
        cy.get('input[name=email]').type('dylank09@gmail.com')

        cy.contains('Login').click()

        cy.contains('verify credentials') //shows that it didnt log in user since password wasnt entered

        cy.get('input[name=password]').type(`Coolio35`)

        cy.contains('Login').click()

    })

    it('should have redirected user to home page and be logged in', () => {
        cy.contains('Bally Blogs')
        cy.contains('New Post')
        cy.contains('Log Out')

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