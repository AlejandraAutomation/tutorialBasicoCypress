describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
    cy.get("#__next").should("be.visible")
  })

  context("Testeo de cabecera", () => {
    it("the h1 contains the correct text", () => {
      cy.get("[data-test='hero-heading']").contains(
        "Testing Next.js Applications with Cypress"
      )
    })
    it("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  context("Navegación entre páginas", () => {
    it("Validar navegación en Testing Your First Next.js Application", () => {
      cy.get('[data-test="course-0"]').find("a").contains("Get started").click()
      cy.location("pathname").should("eq", "/testing-your-first-application")
    })
    it("Validar navegación en Testing Foundations", () => {
      cy.get('[data-test="course-1"]').find("a").contains("Get started").click()
      cy.location("pathname").should("eq", "/testing-foundations")
    })
    it("Validar navegación Cypress Fundamentals", () => {
      cy.get('[data-test="course-2"]').find("a").contains("Get started").click()
      cy.location("pathname").should("eq", "/cypress-fundamentals")
    })
  })
})
