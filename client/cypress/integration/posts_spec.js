/* global cy */

describe('Posts page', () => {

    it('should show posts', () => {
        cy.contains('h1', 'Blogs')
    })
})