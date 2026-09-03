export const StoreLocators = {
    product: {locator: 'img[src="imgs/galaxy_s6.jpg"]'},
    addToCartButton: {role: 'link', name: 'Add to cart'},
    cartLink: {role: 'link', name: 'Cart', exact: true},
    itemDeleteLink: {role: 'link', name: 'Delete'},
    placeOrderButton: {role: 'button', name: 'Place Order'},
    nameInput: {role: 'textbox', name: 'Name:'},
    countryInput: {role: 'textbox', name: 'Country:'},
    cityInput: {role: 'textbox', name: 'City:'},
    creditCardInput: {role: 'textbox', name: 'Credit card:'},
    monthInput: {role: 'textbox', name: 'Month:'},
    yearInput: {role: 'textbox', name: 'Year:'},
    purchaseButton: {role: 'button', name: 'Purchase'},
    //okButton: {id: '.confirm btn btn-lg btn-primary'},
    okButton: {role: 'button', name: 'OK'},
    categorySection: {role: 'link', name: 'CATEGORIES'}
} as const;
