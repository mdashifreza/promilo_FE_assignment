import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="container mx-auto p-4">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-4">About Page</h1>
                <p className="text-gray-700">
                    Welcome to the About Us page! Here's an overview of the project structure and key functionalities.
                </p>
            </div>

            {/* Project Folder Structure */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Project Folder Structure</h2>
                <p className="text-gray-700">
                    In the project, we follow a well-organized folder structure. Key components include:
                </p>
                <ul className="list-disc pl-8">
                    <li>
                        <span className="font-semibold">components:</span> Contains pages of the application, including the About page.
                    </li>
                    <li>
                        <span className="font-semibold">Navbar:</span> Houses the navigation bar components.
                    </li>
                    <li>
                        <span className="font-semibold">About.js:</span> Renders the content of the About page.
                    </li>
                    <li>
                        <span className="font-semibold">Login:</span> Contains Logic.js for handling authentication logic.
                    </li>
                    <li>
                        <span className="font-semibold">Product:</span> Holds productList.js for fetching and displaying product data.
                    </li>
                </ul>
            </div>

            {/* Challenges Faced */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Challenges Faced</h2>
                <p className="text-gray-700">
                    During the development, a significant challenge was ensuring seamless authentication and authorization.
                    This was addressed by implementing logic in the Login/Logic.js file to secure and authorize user access.
                </p>
            </div>

            {/* Redux for Access Token */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Redux for Access Token</h2>
                <p className="text-gray-700">
                    We leverage Redux to manage the access token data securely. The access token is stored in the Redux store,
                    providing a centralized location for authentication-related information.
                </p>
                <p className="text-gray-700">
                    When a user successfully logs in, the access token is obtained and dispatched to the Redux store.
                    This token is then utilized as a header when making API calls, ensuring proper authorization.
                </p>
                <p className="text-gray-700">
                    This approach enhances the scalability and maintainability of the application, as authentication-related
                    data is handled through a global state management solution like Redux.
                </p>
            </div>

            {/* Starting the Project Step by Step */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Starting the Project Step by Step</h2>
                <ol className="list-decimal pl-8">
                    <li>
                        <span className="font-semibold">Navigate to the Project Directory:</span>
                        <br />
                        <code>cd move-to-project-directory</code>
                    </li>
                    <li>
                        <span className="font-semibold">Install Dependencies:</span>
                        <br />
                        <code>npm install</code>
                    </li>
                    <li>
                        <span className="font-semibold">Run the Application:</span>
                        <br />
                        <code>npm start</code>
                    </li>
                    <li>
                        <span className="font-semibold">Explore the About Page:</span>
                        <br />
                        - Click on the "<Link to="/about" className="text-blue-500">About Us</Link>" button in the navigation bar.
                    </li>
                    <li>
                        <span className="font-semibold">Login and View Product List:</span>
                        <br />
                        - Utilize the login functionality to obtain a valid token.
                        <br />
                        - Navigate to the Product page to view the list of products fetched from the API.
                    </li>
                </ol>
            </div>

        </div>
    );
}

export default About;
