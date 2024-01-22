# Provision Store E-shop Website

Provision Store is a virtual provision marketplace where users can buy various types of provision products. This E-shop website 
includes a login module, an about page, and a product list page.

# Live Project

Welcome to the live project! You can experience the Provision Store E-shop website by following the link below:

🌐 [Live Project](https://promilo-fe-assignment.vercel.app/)

## Project Flow

1. When the user opens the website, a login page appears first.
2. After successful login, the user can access the product list page where all products are displayed.
3. From the product list, the user can navigate to the About page.
4. The website features a logo in the favicon and header.

## Login Module

- Users can log in with their email and password.
- Email field has email validation.
- Password field has validation criteria: 8 characters long, at least one capital letter, one small letter, numbers allowed, and one special character.
- Password is converted into sha256 format before calling the Login API.

## Product List Module

- Includes a search filter and displays products as cards.
- Cards show product name and image using Angular Material.
- Search filter works based on product name.
