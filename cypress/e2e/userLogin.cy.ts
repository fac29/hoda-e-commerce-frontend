describe('user login actions', () => {
	// Unique username and email for signup
	const username = `testuser_${Date.now()}`;
	const email = `test_${Date.now()}@example.com`;
	const password = 'validpassword123';

	beforeEach(() => {
		cy.visit('/');
	});

	it('should display the Login form', () => {
		cy.visit('/login');
		cy.contains('h1', 'Login').should('be.visible');
		cy.get('form.form').should('exist');
	});

	it('should fill out and submit the Login form', () => {
		// Create a new unique user
		cy.get('button.small').contains('Sign Up').click();

		// Fill out the Sign Up form with unique details
		cy.get('input[name="username"]').type(username);
		cy.get('input[name="email"]').type(email);
		cy.get('input[name="password"]').type(password);
		cy.get('button.medium').contains('Sign Up').click();

		cy.visit('/login');
		cy.get('input[name="email"]').type(email);
		cy.get('input[name="password"]').type(password);
		cy.get('button.medium').contains('Login').click();

		// Assert successful navigation after login
		cy.get('h1').contains('Products').should('be.visible');
	});

	it('should navigate to sign up page from Login form', () => {
		cy.visit('/login');
		cy.contains('Take me to sign up page').click();
		cy.url().should('include', '/signup');
	});

	it('should display validation errors for empty email and password', () => {
		cy.visit('/login');
		cy.get('button.medium').contains('Login').click();

		// Assert validation errors are displayed
		cy.contains('Please enter a valid email address.').should('be.visible');
		cy.contains('Password must be at least 8 characters long').should(
			'be.visible'
		);
	});

	// Additional tests for edge cases and other scenarios can be added here
});
