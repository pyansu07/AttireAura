
# AttireAura

AttireAura is a modern clothing store web application designed to offer a seamless and engaging shopping experience. The application combines various technologies to provide advanced product filtering and integrated customer support through a chatbot.
The frontend also includes pages for login and registration, with the main shopping 
functionality.


## Features

- `Product Filtering`: Advanced options to help customers find      products efficiently.
- `Customer Support`: Integrated chatbot to assist customers with their queries.
- `State Management`: Utilizes Redux for managing application state.
- `Authentication`: Secure user authentication using JWT.
- `RESTful APIs`: Efficient communication between frontend and backend using RESTful APIs.


- `Payment Processing`: Integrated Stripe for handling payments (test mode only).
## Major Technologies Used

- JavaScript
- React
- Redux
- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Tokens)
- RESTful APIs
- Stripe (Test Mode)
# Installation

## Step-1: Clone the repository:

```bash
git clone "<----->"
cd AttireAura
```
## Step-2: Navigate to the project directory:
### Open two terminal in code editor

```bash
# Install backend dependencies
cd AttireAura_API
npm install

# Install frontend dependencies
cd AttireAura_client
npm install

```

## Step-3: Set up environment variables:
### Create a `.env` file in both directory and add the following:


```bash
# AttireAura_API
MONGO_URL=  your_mongodb_connection_string ;
STRIPE_KEY= your_stripe_secret_key; 
JWT_SEC= your_jwt;

#  AttireAura_client
REACT_APP_STRIPE= your_stripe_publishable_key ;
```
## Step-5: Start the development server:



```bash
# Start backend server
cd AttireAura_API
node index.js

# Start frontend server
cd AttireAura_client
npm start

```


### Usage

Once the servers are running, access the application at `http://localhost:3000 `.

Happy Shopping with AttireAura!
![Screenshot (131)](https://github.com/user-attachments/assets/74d75a80-d641-4810-83b9-96b07a2376d9)
![Screenshot (136)](https://github.com/user-attachments/assets/52a8fbed-5010-42a2-847b-dc3d716f9749)
![Screenshot (134)](https://github.com/user-attachments/assets/5c413162-56f6-4a08-b17f-650de2260ae5)
![Screenshot (135)](https://github.com/user-attachments/assets/c076cc6c-6577-47bd-bfb1-0670518db632)
![Screenshot (137)](https://github.com/user-attachments/assets/42c987ea-b04a-40a1-a3eb-28ddaaeca2e1)

