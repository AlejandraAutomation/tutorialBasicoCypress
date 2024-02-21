describe("susbcription", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })
    it("Validar ingreso de correo sin subscribir", () => {
        cy.getByDataTest("email-input").type("tom@aol.com")
        cy.getByDataTest("submit-button").click()
        cy.getByDataTest("success-message").contains("Success: tom@aol.com has been successfully subscribed")
    })
    it("Validar ingreso de correo subscrito", () => {
        cy.getByDataTest("email-input").type("john@example.com")
        cy.getByDataTest("submit-button").click()
        cy.getByDataTest("server-error-message").contains("Error: john@example.com already exists. Please use a different email address.")
    })
    it("Validar correo no ingresado", () => {
        cy.getByDataTest("email-input").type(" ")
        cy.getByDataTest("submit-button").click()
        cy.getByDataTest("error-message").contains("Email is required")
    })
})