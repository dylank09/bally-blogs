/* global cy */

describe('Posts page', () => {

    it('should show blogs', () => {
        cy.contains('h1', 'Blogs')
    })
})