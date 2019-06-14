function calculateBill(items = []) {
    let factura = items.map(item => {
        return {
            price: item.price,
            taxes: calculateTaxes(item)
        };
    });

    return factura.reduce((prev, current) => {
        prev.taxes += current.taxes;
        prev.price += current.price;
        return prev;
    }, { price: 0, taxes: 0 })
}

function calculateTaxes(item) {
    return item.price * 0.16;
}

module.exports = {
    calculateBill
};