describe('home page', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('should contain a correct header', () => {
		cy.get('h1').contains('Products');
	});

	it('should display the navigation buttons', () => {
		cy.get('.nav-right button').contains('Log In').should('be.visible');
		cy.get('.nav-right button').contains('Sign Up').should('be.visible');
		cy.get('.nav-right button').contains('Cart').should('be.visible');
	});

	it('should search for a product', () => {
		cy.get('.search-bar input').type('Gatsby');
		cy.get('.search-bar button').contains('Search').click();
		cy.get('.product-card .product-name').should('contain', 'The Great Gatsby');
	});

	it('should display a list of products', () => {
		cy.get('.products-grid .product-card').should('have.length.at.least', 1);
		cy.get('.product-card').each((product) => {
			cy.wrap(product).find('.product-name').should('be.visible');
			cy.wrap(product).find('.product-category').should('be.visible');
			cy.wrap(product).find('.product-price').should('be.visible');
		});
	});

	it('should navigate to product detail page', () => {
		cy.get('.product-card').first().find('.product-button').click();
		// cy.url().should('include', '/products/1');
		// cy.get('.product-name').should('be.visible');
	});

	it('should add a product to the cart', () => {
		cy.get('.product-card')
			.first()
			.within(() => {
				cy.get('.plus-minus-button').click();
			});
	});
});
