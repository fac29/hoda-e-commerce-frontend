describe('shopping cart page', () => {
	beforeEach(() => {
		cy.visit('/shopping-cart');
	});

	it('should contain a correct header', () => {
		cy.get('h2').contains('Cart Items');
	});

	

	it('should add a product to the cart', () => {
		let productName;
        cy.visit('/')
		cy.get('.product-card')
			.first()
			.within(() => {
				cy.get('.plus-minus-button').click();

				// Use .invoke('text') to get the text content and assign it to productName
				cy.get('.product-name')
					.invoke('text')
					.then((text) => {
						productName = text.trim();
					});
			});

		// Navigate to the cart and assert correct location
		cy.get('.nav-right button').contains('Cart').click();
		cy.get('h2').contains('Cart Items');
		cy.get('ul li').should('be.visible');

		// Assert that the product added to the cart matches the captured product name
		cy.get('ul li')
			.first()
			.within(() => {
				cy.get('p').should('contain', productName);
			});
	});

    it('minus button should remove a product from the cart', () => {
		let productName;
        cy.visit('/')
		cy.get('.product-card')
			.first()
			.within(() => {
				cy.get('.plus-minus-button').click();

				// Use .invoke('text') to get the text content and assign it to productName
				cy.get('.product-name')
					.invoke('text')
					.then((text) => {
						productName = text.trim();
					});
			});

		// Navigate to the cart and assert correct location
		cy.get('.nav-right button').contains('Cart').click();
		cy.get('h2').contains('Cart Items');
		cy.get('ul li').should('be.visible');

		// Assert that the product added to the cart matches the captured product name
		cy.get('ul li')
			.first()
			.within(() => {
				cy.get('.plus-minus-button').first().click();
			});

        // Verify the product is removed from the cart
		cy.get('ul li').should('not.exist');
	});

    it('plus button should add a product to the cart', () => {
		let productName;
        cy.visit('/')
		cy.get('.product-card')
			.first()
			.within(() => {
				cy.get('.plus-minus-button').click();

				// Use .invoke('text') to get the text content and assign it to productName
				cy.get('.product-name')
					.invoke('text')
					.then((text) => {
						productName = text.trim();
					});
			});

		// Navigate to the cart and assert correct location
		cy.get('.nav-right button').contains('Cart').click();
		cy.get('h2').contains('Cart Items');
		cy.get('ul li').should('be.visible');

		// Assert that the product added to the cart matches the captured product name
		cy.get('ul li')
			.first()
			.within(() => {
				cy.get('.plus-minus-button').eq(1).click();
			});

        // Verify the product is removed from the cart
		cy.get('ul li')
			.first()
			.within(() => {
				cy.get('p').eq(1).should('contain', '2');
			});;
	});

});
