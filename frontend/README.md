# Project

## Running locally in development mode

To get started, just clone the repository and run `npm install && npm run dev`:

    git clone link
    npm install
    npm run dev

## Building locally in development mode

If you wanted to run this site in locally development, you should install modules then build the site with `npm run build` and run it with `npm start`:

    npm install
    npm run build
    npm start

## Building and deploying in production

If you wanted to run this site in production, you should install modules then build the site with `npm run build` and run it with `npm start`:

    npm install
    npm run build
    npm start

You should run `npm run build` again any time you make changes to the site.

## Configuring

If you configure a .env file (just copy [.env.example] over to '.env' and fill in the options) you can configure a range of options.

    NEXT_PUBLIC_API_KEY=API_KEY_URL
    GENERATE_SOURCEMAP=false

## Running Jest Tests

Here is a command you should now be able to run tests once `npm test`

## Next.js + Jest

This example shows how to configure Jest to work with Next.js.

This includes Next.js' built-in support for Global CSS, CSS Modules and TypeScript.

## How to Use

Quickly get started using [Create Next App](https://nextjs.org/docs/api-reference/create-next-app)!

In your terminal, run the following command:

    npx create-next-app
    or
    yarn create-next-app
