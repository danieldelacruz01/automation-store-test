beforeEach(() => {
	cy.visit('http://automationpractice.com/')
})

function searchForItem(itemName) {
	cy.get('#searchbox').within(() => {
		cy.get('#search_query_top')	
			.type(itemName)
		cy.get('button[name="submit_search"]')
			.click()
	})
}

function getCheapestItem() {
	cy.get('#selectProductSort')
		.select	('Price: Lowest first')
	return cy.get('.product-container')
		.first()
}

function addProductToCart(quantity, size, colour) {
	cy.get('#quantity_wanted')
		.clear()
		.type(quantity)

	cy.get('fieldset')
		.contains('fieldset', 'Size')
		.find('select')
		.select(size)

	cy.get('#color_to_pick_list')
		.find(`a[name="${colour}"]`)
		.click()

	cy.contains('Add to cart')
		.click()

}

describe('Search and add items to Cart', function() {
	it('should total $34.80 when 2 dresses are added to Cart', function() {
		searchForItem('Printed Summer Dress')

		getCheapestItem()
			.find('a[title="View"]')
			.click()

		addProductToCart(2, 'M', 'Green')

		cy.contains('Proceed to checkout')
			.click()

		cy.get('#total_price').should('have.text', '$34.80')

		cy.screenshot('cart')
	})
})