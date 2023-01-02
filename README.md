# 5.1. Real-Time Chat App 💬

Multi-room real-time chat app built with the following technologies:

- **Back-end**:  NodeJs - ExpressJs - Socket.io - Mongoose - MongoDB 

- **Front-end**: HTML - CSS - JavaScript
## 📢 Features

- Registered users access the general channel and are able to create and access multiple channels.
## 🚀 Getting Started

As the project is organized, client and server are completely decoupled. This means that, though the project is set up to run on localhost, client and server will each run on a different port.
## 🔧 Installing

> **Step 1** - Clone the repository

````
git clone https://github.com/reinevernunft13/nodeInitialDemo.git
````

> **Step 2** - Install necessary project dependencies for the **client-side** via NPM:

````
cd server
npm install
````

> **Step 3** - Install necessary project dependencies for the **server-side** via NPM:

```
cd client
npm install
```

> **Step 4** - Set your environment variables and values -- for each the server and the client-side -- by creating a new **.env** file. A file called '.env-template' contains a list of required environment variables. Copy these onto a **.env** file and fill in the values so as to be able to run the project in your local machine.

````
API_PORT=[your_port]
````

**TIP**: To generate a secure token secret for your JWT, you can use NodeJs' common core module 'crypto' by opening a new terminal and running:

```
$ node
> require('crypto').randomBytes(64).toString('hex')
```

## Run the project

⚠️ Given the client/server setup for the project, the client-side and the server-side need to be started separately. To do this, open two terminal windows or split your terminal. Now run the following commands on each terminal window/pane:

* For the **client-side**:

````
cd client
npm run start
npm run dev
````

* For the **server-side**:

````
cd server
npm run start
npm run dev
````









 