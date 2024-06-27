# E-Commerce Website -- Frontend

This is a repo that holds the frontend functionality for an E-Commerce website created by Halimah, Oskar, Diana and Alex.

## Installation and initialisation

Here are instructions for how to install this locally on the repo:

1. Clone the repo

``` bash
git clone https://github.com/fac29/hoda-e-commerce-frontend.git
```

2. Navigate to the repo

``` bash
cd hoda-e-commerce-frontend
```

3. Install NPM packages

``` bash
npm install
```

4. Create a .env file ``` touch .env ``` and include the following line:
```
VITE_REQUEST_URL = "http://localhost:3000"
```


4. Enter the following script to run the server in the development mode.

```bash
npm run dev
```
## Prettier configuaration

Prettier should be installed with other packages upon initialisation and utilise .prettierrc config file in the repo to ensure uniform formatting among contributors. For reference, the configuration is presented below:

```json
{
    "trailingComma": "es5",
    "tabWidth": 4,
    "singleQuote": true
}
```

## Testing

This project utilises automated frontend testing using Cypress.

To run tests use:

``` 
npm run cy:run
```

To open Cypress use:

```
npm run cy:open
```
