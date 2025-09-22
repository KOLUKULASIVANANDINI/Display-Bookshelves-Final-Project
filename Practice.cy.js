describe("Practice",()=>{
    it("P1",()=>{
        cy.visit("/login")
        cy.on('window:alert', (text)=> { 
        expect(text).to.equal('This is an alert'); 
}); 
    })
})