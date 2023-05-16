-add proper code blocks via ``
-add headers 
-add it to server repo as well 
-include a link to front end and back end repo to github
-usage instrutctions last 

Welcome to PayMyRent! This application allows renters to pay their individual portion of rent and utilities each month using credit card.

##Tech stack used: 
-React, SaSS, Axios (front-end)
-Node, Express, Knex (back-end)

##Usage instructions: 
To test out this application clone the paymyrent and paymyrentapi repositories first.

Link to client repo and server repo 

In the client repo on your local device, run `npm i` to ensure all the necessary packages are installed. Do to the same from the server folder. 

In the server folder you'll need to run the migration to create the property management database.You can use the commaand CREATE DATABASE property_management. Then create tables and seed them. Use `npm run migrate` and `npm run seed`. 

There is no public site for this application. 

ADD serve and client site 

##API references
I used Stripe's API to allow the PayMyRent application to facilitate transactions. The npm package is installed by npm install stripe --save https://www.npmjs.com/package/stripe. 

This API allowed me to create a Stripe checkout session and redirect the user to a stripe checkoutpage. 

##Lessons learned & next steps

Next I would try to build a utilities table in my database (again) so I could bring in utilities data per tenant dynamically. I did actually do this successfully but when I dropped the table to adjust a column name, the entire knex migration process was corrupted and I didn't have time to drop my entire database and start over. 

I would also try to replace stripe with another payment provider that was better suited to the needs of this product. Stripe is built for retail businesses with products that have set prices. Ideally I want to have tenants set up recurring rent payments via credit card; the only option that could support this was Stripe Subscriptions, but this would mean that any tenant could see multiple suscription options / rental prices for other suites and this is not what a landlord would want. In short, in future iterations I'd switch to a payment provider that could support the admin creating subscription packages and assigning them to specific users only, and then having the user/customer subscibe to their package. 



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


#### `node server.js`
Runs the app in the development mode. This will open http://localhost:8000 in your browser and get the server online. 

