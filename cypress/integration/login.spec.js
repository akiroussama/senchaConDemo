describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    });

    it('Visits the Login Page', () => {
        cy.clearLocalStorage();
        cy.visit(' http://localhost:1962/');
    });

    it('Set username and password!', () => {
        cy.get('[data-cy=username]')
            .type('Akir');
        cy.get('[data-cy=password]').find('[type="password"]')
            .type('1234');
        cy.get('[data-cy=loginBtn]').click();
    });

})

// describe('Go to Home Page', () => {
//     it('Visits the Home Page', () => {
//         cy.visit(' http://localhost:1962/#homeview')
//     });

//     it('Get ExtJs Version!', () => {
//         cy.get('[data-cy=extjsVersion]')
//             .contains('7.2')
//     });

// })