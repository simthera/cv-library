# cv-library
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To run the Weather App on your local machine, follow these steps:

Clone the repository
Navigate to the project directory: cd cv-library
Install the dependencies: npm install
Start the development server: npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Technologies Used
<ul>
  <li>nextjs 14.0.4</li>  
  <li>axios</li>
  <li>styled components</li>
  <li>next-intl</li>
</ul>


All the dependencies are free and available publickly. You will need to run npm install to get them downloaded automatically into the project. 

## Usage
Once the Weather App is running on your device, you can perform the following actions:

Start typing the first 2 letter of the location you are looking for and the app will them as query params and get the data. 
The location field will show you some suggestions based on what you have type and once you select one the field gets field with the suggestion that you have chosen and the rest will go away. 

## Known issues 
The api takes long to load the data so after you have typed in the 1st 2 letters of the location that you are looking for you'll have to wait a bit to get the suggestions. 
