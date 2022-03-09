// describe("My First Test", () => {
//   it("Does not do much!", () => {
//     expect(true).to.equal(true);
//   });
// });

// describe("My First Test", () => {
//   it("Visits my calculator page", () => {
//     cy.visit("http://127.0.0.1:5500/calc_practice/index.html");
//   });
// });

// describe("Query test", () => {
//   it("checks for '=' sign", () => {
//     cy.contains("=");
//   });
// });

// describe("Failing test", () => {
//   it("checks for letter P", () => {
//         cy.visit("http://127.0.0.1:5500/calc_practice/index.html");

//     cy.contains("P");
//   });
// });

const charactersArr = [
  "0",
  "1",
  "2",
  "+",
  "3",
  "4",
  "5",
  "-",
  "6",
  "7",
  "8",
  "*",
  "9",
  "/",
  "^",
  "%",
];

describe("Displays the number or symbol", () => {
  it("Check display numbers", () => {
    for (let i = 0; i <= 2; i++) {
      //Arrange
      cy.visit("http://127.0.0.1:5500/calc_practice/index.html");
      // Act
      cy.get(`.calc__buttons > :nth-child(${i + 5})`).click();
      // Assert
      cy.get(".disp_2").should("contain", `${i}`);
    }
    for (let i = 0; i <= 2; i++) {
      //Arrange
      cy.visit("http://127.0.0.1:5500/calc_practice/index.html");
      // Act
      cy.get(`.calc__buttons > :nth-child(${i + 9})`).click();
      // Assert
      cy.get(".disp_2").should("contain", `${charactersArr[i + 4]}`);
    }
    for (let i = 0; i <= 2; i++) {
      //Arrange
      cy.visit("http://127.0.0.1:5500/calc_practice/index.html");
      // Act
      cy.get(`.calc__buttons > :nth-child(${i + 13})`).click();
      // Assert
      cy.get(".disp_2").should("contain", `${charactersArr[i + 8]}`);
    }
  });
});

describe("Does basic operations with two numbers", () => {
  it("check for addition of two numbers", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5500/calc_practice/index.html");
    //Act
    cy.get(":nth-child(10)").click();
    cy.get(":nth-child(8)").click();
    cy.get(":nth-child(14)").click();
    cy.get("#equals").click();
    //Assert
    cy.get(".disp_3").should("contain", "11");
  });
  it("check for subtraction of two numbers", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5500/calc_practice/index.html");
    //Act
    cy.get(":nth-child(10)").click();
    cy.get(":nth-child(12)").click();
    cy.get(":nth-child(14)").click();
    cy.get("#equals").click();
    //Assert
    cy.get(".disp_3").should("contain", "-3");
  });
  it("check for multiplication of two numbers", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5500/calc_practice/index.html");
    //Act
    cy.get(":nth-child(10)").click();
    cy.get(":nth-child(16)").click();
    cy.get(":nth-child(14)").click();
    cy.get("#equals").click();
    //Assert
    cy.get(".disp_3").should("contain", "28");
  });
  it("check for division of two numbers", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5500/calc_practice/index.html");
    //Act
    cy.get(":nth-child(10)").click();
    cy.get(":nth-child(18)").click();
    cy.get(":nth-child(14)").click();
    cy.get("#equals").click();
    //Assert
    cy.get(".disp_3").should("contain", "0.5714285714285714");
  });
  it("check for power second number to first", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5500/calc_practice/index.html");
    //Act
    cy.get(":nth-child(10)").click();
    cy.get(":nth-child(19)").click();
    cy.get(":nth-child(14)").click();
    cy.get("#equals").click();
    //Assert
    cy.get(".disp_3").should("contain", "16384");
  });
  it("check for percentage fist number to second", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5500/calc_practice/index.html");
    //Act
    cy.get(":nth-child(10)").click();
    cy.get(":nth-child(20)").click();
    cy.get(":nth-child(14)").click();
    cy.get("#equals").click();
    //Assert
    cy.get(".disp_3").should("contain", "0.28");
  });
});

// describe("Check for correct ", () => {
//   it("checks for letter P", () => {
//         cy.visit("http://127.0.0.1:5500/calc_practice/index.html");

//     cy.contains("P");
//   });
// });
