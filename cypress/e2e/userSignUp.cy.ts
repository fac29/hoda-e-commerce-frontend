describe('user Sign Up actions', () => {
	beforeEach(() => {
		cy.visit('/signup');
	});

	it('should display the Sign Up form', () => {
		cy.contains('h1', 'SignUp').should('be.visible');
		cy.get('form.form').should('exist');
	});

	it('should fill out and submit the Sign Up form', () => {
		// Generate unique username and email using timestamps
		const username = `testuser_${Date.now()}`;
		const email = `test_${Date.now()}@example.com`;

		// Fill out the form with unique username, email, and valid password
		cy.get('input[name="username"]').type(username);
		cy.get('input[name="email"]').type(email);
		cy.get('input[name="password"]').type('validpassword123');

		// Click Sign Up button
		cy.get('button.medium').contains('Sign Up').click();

		// Assert successful navigation after submission
		cy.get('h1').contains('Products');
	});

	it('should navigate to login page from Sign Up form', () => {
		cy.contains('I have an account already. Take me to login.')
			.should('have.attr', 'href', '/login')
			.click();

		cy.url().should('include', '/login');
	});

	it('should display validation errors for empty username, invalid email, and short password', () => {
		// Click Sign Up button without filling out the form
		cy.get('button.medium').contains('Sign Up').click();

		// Assert validation errors are displayed
		cy.contains('Username cannot be empty.').should('be.visible');
		cy.contains('Please enter a valid email address.').should('be.visible');
		cy.contains('Password must be at least 8 characters long.').should(
			'be.visible'
		);

		// Fill out the form with invalid data

		cy.get('input[name="email"]').type('invalidemail'); // Invalid email format
		cy.get('input[name="password"]').type('123'); // Short password

		// Click Sign Up button again
		cy.get('button.medium').contains('Sign Up').click();

		// Assert validation errors are displayed
		cy.contains('Username cannot be empty.').should('be.visible');
		cy.contains('Please enter a valid email address.').should('be.visible');
		cy.contains('Password must be at least 8 characters long.').should(
			'be.visible'
		);
	});
});
