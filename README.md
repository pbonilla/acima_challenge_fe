This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.


## About the React application

The main goal of this project has been to cover a coding challenge requested during a recruitment process.

The application will be consuming a NodeJS API created with Express. For more information, you can visit this public repository [https://github.com/pbonilla/acima_challenge_be](https://github.com/pbonilla/acima_challenge_be).

The project is a calculator that is gathering the data from an encoded base64 HTML string.
The calculator supports the addition, substraction, multiplication and division.

For general purposes, it is just processing two operands at this moment. But, ideally this project will be refactored to include new Math operations and will handle multiple operands.

It is a React application mounted on Next.js that is using Typescript on the majority of the files. As a CSS Framework, Material UI was added to the project in order to take advantage of their UI components.

This application was developed and tested against NodeJS v20.

In order to install the packages required for the application, you can run:

```
npm install
```

Also, Jest has been added as the library for unit tests. For now, there are just examples for a service that is validating the expressions against some basic rules. To run the test suite, you can run:

```
npm test
```
