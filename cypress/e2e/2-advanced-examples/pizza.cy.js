describe("Form testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Pizza seçme sayfasına git", () => {
    cy.get(`[href="/pizza"]`).click();
    cy.get(".btn-group > :nth-child(2)").click();
    cy.get(
      ":nth-child(1) > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input"
    ).click();
    cy.get(".pizza-adet > :nth-child(3)").click();
  });
});
