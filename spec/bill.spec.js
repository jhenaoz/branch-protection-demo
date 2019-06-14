const { calculateBill } = require('../src/bill');

describe("Given a best buy store", () => {
  describe("When the user want to chek out", () => {
    it("it should calculate the taxes", () => {
      // Arrange
      const items = [
        {name: 'orange', price: 50},
        {name: 'apple', price: 50}
      ];
      
      // Act
      const resultado = calculateBill(items);

      // Assert
      expect(resultado.taxes).toBe(20);
    });

    it("it should calculate the price", () => {
      // Arrange
      const items = [
        {name: 'orange', price: 50},
        {name: 'apple', price: 50}
      ];
      
      // Act
      const result = calculateBill(items);

      // Assert
      expect(result.price).toBe(100);
    });
  });
});
