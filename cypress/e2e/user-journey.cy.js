describe("User Journey", () => {
    it("a user can find a course on the home page and complete the courses lessons", () => {
        cy.visit("http://localhost:3000")
        cy.getByDataTest("course-0").find("a").contains('Get started').click()
        cy.location("pathname").should("equal", "/testing-your-first-application")
        cy.getByDataTest("next-lesson-button").click()
        cy.wait(8000)
        cy.location("pathname").should(
            "eq",
            "/testing-your-first-application/app-install-and-overview"
        )

        cy.getByDataTest("challenge-answer-0").click()
        cy.getByDataTest("next-lesson-button").should("exist").click()
        cy.wait(8000)
        cy.location("pathname").should(
            "eq",
            "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
        )

        cy.getByDataTest("challenge-answer-0").click()
        cy.getByDataTest("next-lesson-button").should("exist").click()
        cy.wait(8000)
        cy.location("pathname").should(
            "eq",
            "/testing-your-first-application/setting-up-data-before-each-test"
        )
        cy.getByDataTest("challenge-answer-0").click()
        cy.getByDataTest("next-lesson-button").should("exist").click()
        cy.wait(8000)
        cy.location("pathname").should("equal", "/")
    })
})