describe('simple cypress template', () => {
  it('pass example scenario', () => {
    cy.visit('https://example.cypress.io')
  })

  it('test', function() {
    cy.visit('https://play1.automationcamp.ir/forms.html?');
    cy.get('#check_python').check();
    cy.get('#check_python').uncheck();
    cy.get('#check_javascript').check();
    cy.get('#check_validate').should('have.text', 'JAVASCRIPT');
    cy.get('#exp').type('hi');
    cy.get('#exp_help').should('have.text', 'hi');
    cy.get(':nth-child(1) > :nth-child(3) > .form-group > :nth-child(1)').click();
    cy.get('#rad_selenium').check();
    cy.get('#rad_protractor').check();
    cy.get('#rad_validate').should('have.text', 'PROTRACTOR');
    cy.get('#rad_selenium').check();
    cy.get('#rad_validate').should('have.text', 'SELENIUM');
    cy.get('#select_lang').select(['javascript']);
    cy.get('#select_tool').select('cyp');
    cy.get('#select_tool_validate').should('have.text', 'cyp');
    cy.get('#notes').click();
    cy.get('#notes').type('hello');
    cy.get('#area_notes_validate').should('have.text', 'hello');
    cy.get('#area_notes_validate').should('be.visible');
    cy.get('#area_notes_validate').should('have.id', 'area_notes_validate');
    cy.get('#area_notes_validate').should('have.text', 'hello');
    cy.get('.custom-control-label').click();
    cy.get('#german').check();
    cy.get('#german_validate').should('have.text', 'true');
    cy.get('.custom-control-label').click();
    cy.get('#german').uncheck();
    cy.get('#german_validate').should('have.text', 'false');
    cy.get('#fluency').click();
    cy.get('#fluency_validate').should('be.visible');
    cy.get('#fluency_validate').should('have.text', '3');
    cy.get('#validationCustom03').type('tj');
    cy.get('.needs-validation > .form-row > :nth-child(2)').click();
    cy.get('#validationCustom04').type('s');
    cy.get('#validationCustom05').type('s');
    cy.get('#invalidCheck').check();
    cy.get('.needs-validation > .btn').click();
    cy.url().should('eq','https://play1.automationcamp.ir/forms.html?');
  });
});
