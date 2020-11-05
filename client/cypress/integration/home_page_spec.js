import axios from 'axios';
/* global cy */

describe('Home page', () => {

    it('should successfully load', () => {
        cy.visit('/')
    })

    it('should contain the title Bally Blogs', () => {
        cy.contains('h1.header', 'Bally Blogs')
    })
})
