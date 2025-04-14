
# HTML Boilerplate

  

## Table of Contents

  
- [Core](#html-boilerplate)
- - [Setup](#setup)
- - [Commands](#commands)
- - [Docker](#docker)
- - [How It Works](#how-it-works)
- - [Features](#features)
- - [Packages Used](#packages-used)
- [Build Checklist](#build-checklist)
- [Lead Library](#lead-library)
- [Calendly Integration](#calendly-integration)
- [International Tel Input](#international-tel-input)
- [CrazyEgg](#crazyegg)
- [Project Launch Processes](#project-launch-processes)
- [Troubleshooting](#troubleshooting)
- [Multistep Form](#multistep-form)
- [GTM Setup](#gtm-setup)
- [CRM Integrations](#crm-integrations)
- - [Salesforce Example](#salesforce-example)
- - [Hubspot Example](#hubspot-example)
- - [InfusionSoft (Keap) Example](#infusionsoft-keap-example)
- [Ecommerce Landing Page Product Integrations](#ecommerce-landing-page-product-integrations)
- - [Get-Product Script](#get-product-script)

  

## Setup

  

### Prerequisites

  

You will need [nvm](https://heynode.com/tutorial/install-nodejs-locally-nvm/) set up to manage your Node version, or alternatively be using the version of Node that is contained in the .nvmrc file.

  

You can also choose to run the project in Docker if you prefer. Instructions follow below.

  

### Starting a new project

  

Clone this repo, `cd` into the folder, run `nvm use` to switch to the proper node version for this project, and run `npm install`.

  

## Commands

  

`npm run dev` will spin up a localhost serving your pages from system memory. This means your files do not compile when you run this. Hot Module Replacement is set up by default, so development should be super fast.

  

`npm run build` will build your files for production. All of the minification, image compression, and compilation happens here. Your files will be output into the `/dist/` folder, which is the folder you should point Netlify to if you are pushing it up there, or this is the folder you should copy to a client's server if you are making it live somewhere else.

  

`npm run preview` this will load up your compiled files into the browser so you can see what has been compiled.

  

`npm run storybook` will spin up a localhost serving your storybook pages from system memory.

  

## Docker

  

If you choose to run the project in docker, you can download this repository and simply run `docker-compose up`. This will spin up a docker container running Node's image for version 18, and link your repo's working directory to the container so any changes made in this folder will reflect in your running Docker environment. The container only runs the `npm run dev` command by default.

  

## How it works

  

This boilerplate utilises Vite as a bundler. Rollup plugins can be used out of the box in Vite, so some of these are used as part of the build process - specifically to generate our responsive images.

  

The input file for the bundler is the src/index.html file (and any others you reference in the vite.config.js). This file has a the main.js file loaded, but notice there are no css files referenced in our input file.

  

Any of the pages you wish to include in the project should go inside the `/src/` folder inside a subfolder named with the page slug. We have a few example pages in there under `/free-ebook/`  `/questionnaire/` and `/thank-you/`. Make sure to include the trailing slash in your urls when you are developing. These pages have basic layouts that utilise Bootstrap. Please remove any of these pages that are not in use from your final file.

  

Check out the features below for some info on how to embed inline SVGs, how to structure your image paths, and add new pages to your project.

  

## Prebuilt Components and Sections

  

The boilerplate comes with a few prebuilt components and sections that you can use in your project. You can preview these elements in one of two ways:

  

- Run `npm run storybook` and navigate to `localhost:6006` to see the library of prebuilt components and sections.

  

and/or

  

- Run `npm run preview` and navigate to `localhost:3000/sections` to see a page displaying all the prebuilt components and sections.

  
  

## Features

  

### TailwindCSS

  

We're using tailwind instead of writing plain CSS/SCSS or using bootstrap.

  

The tailwind docs can be found [here](https://tailwindcss.com/docs/).

  

#### Custom Tailwind Styles

  

By default Tailwind jit mode is enabled, so you can create your own custom classes on the fly.

  

If you need something super custom that tailwind doesn't provide out of the box, you can add a new class/value to **tailwind.config.js**.

  

Refer to the [official tailwind docs](https://tailwindcss.com/docs/) for the right syntax to use.

  

You will see some existing custom styles in there for the sections page.

  

### Automatic inline SVGs

  

Place your SVGs in the src/images folder, and reference your svg files like this `<icon src="FILENAME.svg"></icon>`. <ins>You don't need to reference the folder before your filename as this gets added by a Vite plugin.</ins> If for some reason you want to load your SVG like an image, you can just reference it as you would an image with an `<img>` tag. To load an SVG via an `<img>` tag, the SVG must be added to the /src/public folder eg. `<img src="svg-img.svg"/>`

  

### Automatic image processing

  

Place your images in the src/images folder, and reference your image files like this `<img src="FILENAME.png" />`. <ins>You don't need to reference the folder before your filename as this gets added by postHTML.</ins> The Vite plugin will wrap the `<img>` in `<picture>` tags and generate the corresponding .webp format image. It also applies height and width attributes to the image, and an empty alt attribute for any images that don't have one. Please make sure that any bitmap images (ie. not vectors) are exported at 2x size from the design.

  

To disable lazyloading for a specific image, add a 'nolazy' class to your image. eg. `<img src="FILENAME.png" class="nolazy" />`

  

To disable image processing on a specific image - for example when using a gif - you can add the `skip` attribute to the image, eg. `<img src="FILENAME.gif" skip />` and the compiler should skip your image when building.

  

For more information on how the image processing works, see the [@kingkongdevs/vite-plugin-image-sizes](https://github.com/kingkongdevs/vite-plugin-image-sizes) docs.

  

### Adding new pages

  

In the vite.config.js file update the build.rollupOptions.input to include your additional HTML files. This will allow Vite to parse these in addition to the defaults. Additional pages can be accessed using a trailing `/`- so if you add `/thank-you`, in the browser it must be accessed via `localhost:3000/thank-you/`.

  
  

### Reusable Components

  

If you add a html file to the ./src/components folder, you can reuse it throughout your project by linking it in an <include> element like the below:

```html

  

<include  src="yourfile.html"></include>

  

```

  

You can also pass custom variables to a component, like below:

```html

<include  src="yourfile.html"  locals='{

"variable1" : "Some text",

"variable2" : "Some other text"

}'></include>

```

  

Then this would be output in the component like so:

  

```html

<include  src="yourfile.html">

<p>Some text</p>

<p>Some other text</p>

</include>

```

This setup been used to create dummy T&Cs and Privacy Policies on the homepage.

  

Please see the readme for the @kingkongdevs/vite-plugin-html-includes package for more information on how these features work, and you can see an example on the `/sections/` page (unfortunately Storybook won't render these components at present).

  
  

### Form Validation

  

Add the class `kk-validation` to the form, and un-comment/add the lead library script to the bottom of the page `https://scripts.kingkong.net.au/tracker.min.js`.

  

Validation will work automatically assuming the correct `type` is set on each field, i.e. `text` for name, `email` for email addresses, `tel` for phone numbers.

  

Be sure to **NOT** include the large activecampaign script for validation, as this will interfere with the lead library and tracking.

  

With forms other than ActiveCampaign or Infusionsoft, this process will not apply.

  

### Custom Recapcha V3 For Forms

Add your own recaptcha v3 to our forms. The form must be using our custom validation, so the `kk-validation` class must be applied to the form. Here's how to set it up:

- Add `kk-recaptcha` class to the form.

- Create a new site/secret key pair in google's recaptcha console (inside the accounts@kingkong.com.au account)

- Put the site key in the data-recaptcha attribute on the script element:

  

```<script src="https://scripts.kingkong.net.au/tracker.min.js" data-recaptcha="XXXXXX_YOUR_RECAPTCHA_KEY_HERE_XXXXXX"></script>```

  

- Put the secret key in to the secret key field on the edit client page in the lead library

  

That's it!

  

Note:

If the client is deleted/made inactive, the endpoint will report all leads as valid. If the recaptcha account itself is deleted the form will throw an error & not submit.

  
  

## Packages Used

  

**@kingkongdevs/vite-plugin-image-sizes**

  

This is used to replace image tags with `<picture>` tags, generate `.webp` format images and image sizes and corresponding srcset attributes, adds height and width attributes to images, and adds an empty alt attribute to any images that don't have one.

  

**vite-plugin-compression**

  

Compresses assets generated by vite and assets from the public directory with Brotli, svgo, imagemin for pngs.

  

**tailwind**

  

A css class library, we use this instead of writing custom css.

  

**postcss**

  

Used to compile and purge tailwind.

  

**@kingkongdevs/vite-plugin-html-includes**

  

This plugin allows you to include HTML components in your project. It also allows you to pass variables to the component, and it will automatically replace the variables with the values you pass in.

  

**vite-plugin-posthtml**

  

This plugin allows post processing of the HTML generated by Vite.

  

**posthtml-inline-svg**

  

Replaces `<icon>` tags with svg src with inline svgs. See above section on how to use this.

  

**posthtml-plugin-picture-srcset**

  

This is a custom posthtml plugin that was started to process the HTML and output picture tags along with the image height and width attributes. Currently it only functions if clearing the dist folder is turned off, and the files already exist.

  
  

# Build Checklist
[Back to top](#html-boilerplate)

-  **Delete unused pages** - Delete any pages that are not in use. If your project doesnt include an ebook, remove the ```/src/free-ebook/``` directory, and if it doesn't have a questionnaire, remove the ```/src/questionnaire/``` directory.

  

-  **Thank you page** - Always include a thank you page. There is a template for this page located in the ```/src/thankyou/``` folder, please allow your CSS styles to apply to this page so it fits in with the design of the project we are building.

  

-  **Validation:** - Make sure that the form is validating properly. Activecampaign scripts should be stripped entirely from the form (anything between the ```<script>``` tags) and Infusionsoft forms should have all ```<script src="..."``` tags removed except the ```getTrackingCode```, ```timezoneInputJs```, and ```overwriteRefererJs``` scripts. More information on implementing this can be found [here](#form-validation)

  

-  **Opt in success message** - All opt in pages (the free-ebook and similar pages) should utilise the opt in success message built into the boilerplate. How to implement this is explained [here](#thank-you-message).

  

-  **Remove unused scripts** - Any scripts that are not used in the project should be commented out so they do not compile with the rest of the JS. This can be done in the ```/src/assets/js/main.js``` file, by commenting out the import statement and the function that calls that item.

  

-  **Upload ebook PDF** - If your project contains an opt in page, it should have a downloadable PDF that is uploaded to the project repository in the ```/public/``` folder. This will allow it to persist when the project is built. There is an example file in the ```/public/free-ebook/ebook.pdf``` folder. You can delete this ```ebook.pdf``` file and add the supplied PDF from the brief into this folder.

  

-  **Include fonts locally** - When including fonts please convert the font file into woff and woff2 using a tool like [transfonter](https://transfonter.org), and importing the font using CSS. There is an example of how to include the font inside of the ```/src/main.css``` file.

If you wish to use this font as a tailwind class (e.g font-gotham), you will need to add the font to both the main.css file AND the tailwind.config.js, according to [their docs](https://tailwindcss.com/docs/font-family#customizing-your-theme).

  

-  **Only lazyload above the fold** - The ```nolazy``` attribute should only be added to images above the fold (images that are visible in the hero section when the page initially loads), and slider images (the slider has its own lazyloading). All other images should not have this attribute as it stops the image from being lazyloaded, thus reducing our load times.

  

---

  

# Lead Library

[Back to top](#html-boilerplate)  

The lead library script should be included at the bottom of every page that contains a form.

This is the script:

  

```javascript

<script  src="https://scripts.kingkong.net.au/tracker.min.js"></script>

```

  

## Classes & Utilities

  

You can add these classes to the ```<form>``` element to use different utilities:

  

-  ```kk-validation```

- Adds form validation to all fields

- Ensure the fields have the correct ```[type]``` and ```[required]``` attributes set.

-  ```kk-global```

- Exposes a global JS function called ```_sendToLeadLibrary()```

- This function sends the lead to the lead library and fires dataLayer events as if the form had submitted normally.

- Handy if the form doesn't redirect or fire "submit" events.

```javascript

let yourForm = document.querySelector('#your-form-id');

_sendToLeadLibrary(yourForm);

```

-  ```kk-showthankyou```

- When the form is submitted it will store a variable in localStorage

- If the opt-in page loads with this variable in localStorage the thankyou popup will appear

-  ```kk-nosend```

- GTM Tracking will fire but it won't be saved in the lead library

-  ```disable-honeypot```

- Will stop the lead library from adding the ```<input name="planet"/>``` honeypot

-  ```skip-lead-library```

- The lead library won't process this form at all

  

### Input Field Classes

  

-  ```kk-novalidate```

- Can be added to an email field to prevent the script from validating the email address

-  ```kk-numeric```

- Can be added to a text input to only allow digits 0-9

-  ```kk-allow```

- Overrides any ban protections and sends it to the lead library. Add this to the input field itself that's being banned.

  

### Contact Form 7

  

ContactForm7, if you include a hidden field with the name ```kkredirect```, the lead library will wait for the "wpcf7mailsent" dom event from CF7, and redirect the form to the value of that hidden field.

  

### Form Messages

  

The following form messages can be overwritten, by adding a ```<div>``` with the class ```.form-messages```.

  

Then a data attribute for each relevant message:

  

```data-success``` - Successful form submit

  

```data-required``` - When any required field is missed

  

```data-requiredfield``` - Individual required field error

  

```data-invalidemail``` - When email field is invalid

  

```data-invalidphone``` - When phone field is invalid

  

e.g

```html

<div  class="form-messages"  data-success="Success Message"  data-required="Please ensure all required fields have been completed."></div>

```

  

# Calendly Integration

  [Back to top](#html-boilerplate)

Open the booking/index.html file in your project.

  

Locate the Calendly script toward the bottom of the page. You'll see a section similar to the one below:

  

```html

<script>

Calendly.initInlineWidget({

url:  '#Add calendly url here',

parentElement: document.getElementById('calendly-widget'),

});

</script>

```

  

Replace '#Add calendly url here' with your actual Calendly scheduling link. For instance, if your Calendly link is https://calendly.com/yourusername, the script should look like this:

  

```html

<script>

Calendly.initInlineWidget({

url:  'https://calendly.com/yourusername',

parentElement: document.getElementById('calendly-widget'),

});

</script>

```

# International Tel Input

  [Back to top](#html-boilerplate)

To enable international telephone functionality, add the 'intl-phone' class to 'tel' input fields.

  

```html

<input  type="tel"  class="phone intl-phone"  id="phone"  name="phone"  placeholder="Phone Number*"  required />

```

  

To customize the countries displayed at the top, open the 'intl-tel-input.js' file and modify the 'preferredCountries' property's value.

  

```javascript

itiFields[index] =  intlTelInput(el, {

utilsScript:  "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",

preferredCountries: ['au','us','ca','gb','nz'], // Add/Remove the country iso code.

geoIpLookup:  function(callback) {

fetch("https://ipapi.co/json")

.then(function(res) { return res.json(); })

.then(function(data) { callback(data.country_code); })

.catch(function() { callback("au"); });

},

hiddenInput: ogName,

autoPlaceholder:  'aggressive',

});

```

  

Refer to the docs for more info on the package we are using for this.

  

https://github.com/jackocnr/intl-tel-input

  

# CrazyEgg

  [Back to top](#html-boilerplate)

A crazyegg script is in the head section of every page, it looks like the script below.

  

This should be left here on every page unless you are asked explicitly to remove it.

  

```html

<script  type="text/javascript"  src="//script.crazyegg.com/pages/scripts/0000/0000.js"  async="async" ></script>

```

  

# Project Launch Processes
[Back to top](#html-boilerplate)
[Check out the index of processes for launching a project here.](https://github.com/kingkongdevs/boilerplate/docs/index.md)

  
  

# Troubleshooting

  [Back to top](#html-boilerplate)

## My project won't deploy for some reason

Run `npm run build` on your local machine. You should be able to replicate any build errors from the staging server on your local machine (1 in 100 times the problem is localised to Netlify and you should reach out for help to someone with access to the staging server logs).

  
  

# Multistep Form
[Back to top](#html-boilerplate)
  
The multistep form (/js/multistep) features custom functionality that includes:

1. One way input mapping

2. Partial form submission

3. International phone number with validation

4. Conditional skip-steps based on answers

5. Global previous button

  

## One-way Input Mappings

  

There are two types of mapping that we can do here.

The first type maps an input value into a a HTML element using the data-mapkey attribute:

  

```html

#data attribute on input

<input  data-mapkey="lastnameget" />

  

#target to map from input

<span  id="firstnameget"></span>

  

```

  

The second type maps an input to another input element using the data-map-input attribute. So once a user enters a value, the script will look for any inpiut with the same name an maps it accordingly:

  

```html

#data attribute on input

<input  data-map-input="true"  name="test"/>

  

#target to map from input

<input  name="test">

```

  

## Partial Form Submission

  

In order for the form to do a partial submission, head to the partial_form.html and drop the form code there and add id="partial-form". Then, add data-partial-submission attribute to the step-item element.

  
  

```html

# main form step

<step-item  index="0"  data-partial-submit="true">

<input  data-map-input="true"  name="test"/>

</step-item>

  

# partial form

<form  id="partial-form">

<input  name="test"/>

</form>

  

```

  

In order for the partial submission to work as intended, make sure all the input names match from the main form into the partial form. This is because we use input mappings to transfer input values upon user interaction.

  

## International Phone Number With validation

  

This international phone field uses an external package "intl-tel-input" that is added as a package dependency, In order to validate this field, we use the package function isValidNumberPrecise() to check if the phone exist based on the selected country.

  

```html

# html

<div>

<label  for="intl-phone">International Phone?</label>

<input  type="tel"  data-map-input="true"  data-intlid="1"  id="intl-phone"  name="intl-phone"  data-validate="intltel"  data-error="Please ensure this field has a value."  placeholder="Phone Number*" />

</div>

```

  

```js

// validation in validation.js file

intltel: (input) => {

if (!input.value || input.value ==  "") {

return  false

}

const intl = window.itiFields.find((itiInput) => itiInput.telInput.dataset.intlid === input.dataset.intlid)

return intl?.isValidNumberPrecise()

}

```

  

## Conditional Skip Step Based on answers

  

To allow skip step based on provided answer, add the data-skipStep attribute on the input, this will trigger a check on the input level. As the user progress to the next step, it will evaluate whether there are any steps to skip based on the answer selected.

You can pass in multiple steps to skip based on the index of inputs in the main form, pass the index in separated by ",".

  

```html

<div  class="mb-4">

<input  type="radio"  name="field[2]"

data-nicename="By myself as the receiver"

data-skipStep="5,6"

value="By myself as the receiver"  data-validate="radio">

</div>

```

  

## Global Previous Button

  

Navigate to components/questionnaire_header.html, add this snippet into the header before the logo container. When the form initialize, it will get a button with id "prev-button-top" and add the right event listeners to allow navigation to previous steps on the form.

  

```html

<div  class="btn-prev-container">

<button  id="prev-button-top">

<icon  src="chevron-left.svg"  class="img-fluid view-animation"></icon>

</button>

</div>

```

  

# GTM Setup
[Back to top](#html-boilerplate)
These are the list of triggers and tags contained in the JSON file that are generally used in a Mini Sales Funnel:  

## 1. Offer Form Submission

#### Event Name: kk_offer_form_submission

Tracking for the main form that resides on the root page of the funnel

  

## 2. Optin Form Submissions

#### Event Name: kk_optin_form_submission

Tracking for the Ebook page form

  

## 3. Questionnaire Form Submission

#### Event Name: kk_questionnaire_form_submission

Tracking for the Questionnaire page form

  

## 4. Calendar Booking

#### Event Name: kk_calendar_booking

Tracking for any user booking. Please note that the base setup of this tracking only works for calendly bookings that redirects

back to the funnel's thank you page.

  

## 5. Phone Clicks

#### Event Name: kk_phone_click

Tracking for all phone clicks on any page in the funnel. It checks for any link clicks with a click url that contains tel:

  

## 6. Email Clicks

#### Event Name: kk_email_click

Tracking for all email clicks on any page in the funnel. Just like phone click tracking, it checks for any link clicks with a click url that contains mailto:

  

# CRM Integrations

  [Back to top](#html-boilerplate)

For majority of our forms, we use ActiveCampaign. The form code will be provided to us, but because of our custom styling and formatting during build, the only things we're getting from those formcodes are:

  

- The form action.

- Hidden form fields necessary to the CRM.

- Specific input field name values.

  

  

## Submitting via API - What we need from the client:

  

- The API endpoint.

  

- Specific field names and their expected values.

  

- Any private key or token values necessary to access their API.

  

  

## Submitting via API - The General Process

  

- In the netlify.toml file, you'll want to head down to the [Functions] section and ensure it's not commented-out; as well as the line specifying the functions path, e.g: directory = "functions/". This folder is where the script responsible for submitting leads to the designated CRM will reside. *Important note:* after build, the full path will actually be prefixed with a '.netlify/' parent folder, so even if your root project folder holds '/functions/your-script.js', the full path in production will actually be domain.com/.netlify/functions/your-script.js. This means that your form action will be the latter: ".netlify/functions/your-script" (without the file extension).

  

- Refer to the below examples as a basis for each of the major CRM platforms we integrate. Much of it is the same between cases. Be sure to check things like the expected content-type in the request header, and that the payload body is in the right format.

  

## Salesforce Example

```javascript
import fetch from 'node-fetch';

export async function handler(event) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const { firstName, lastName, email } = JSON.parse(event.body);

    const tokenResponse = await fetch('https://login.salesforce.com/services/oauth2/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            grant_type: 'password',
            client_id: process.env.SALESFORCE_CLIENT_ID,
            client_secret: process.env.SALESFORCE_CLIENT_SECRET,
            username: process.env.SALESFORCE_USERNAME,
            password: process.env.SALESFORCE_PASSWORD,
        }),
    });

    const { access_token, instance_url } = await tokenResponse.json();

    const response = await fetch(`${instance_url}/services/data/v56.0/sobjects/Contact`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ FirstName: firstName, LastName: lastName, Email: email }),
    });

    const result = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify(result),
    };
}
```

## HubSpot Example

```javascript
import fetch from 'node-fetch';

export async function handler(event) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const { firstName, lastName, email } = JSON.parse(event.body);

    const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            properties: {
                firstname: firstName,
                lastname: lastName,
                email: email,
            },
        }),
    });

    const result = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify(result),
    };
}
```

## Infusionsoft (Keap) Example

```javascript
import fetch from 'node-fetch';

export async function handler(event) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const { firstName, lastName, email } = JSON.parse(event.body);

    const response = await fetch('https://api.infusionsoft.com/crm/rest/v1/contacts', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.INFUSIONSOFT_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            given_name: firstName,
            family_name: lastName,
            email_addresses: [{ email }],
        }),
    });

    const result = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify(result),
    };
}
```

  

## The Netlify Side of Things

  

Here are some key things to bear in mind which are prone to being forgotten about/overlooked and usually lead to errors:

  

- Ensure that the netlify.toml file not only has the [functions] block and specified directory **not** commented out, but also that the functions directory is correct. (It's /functions by default, so your script should be in a /functions folder in your project root.)

- The form needs the netlify attribute, or data-netlify="true" (treated as the same thing), as well as a name attribute value which it'll be referred to by in the netlify back-end (I don't know with certainty if this is vital but I've had issues that have been resolved by including this).

- Enable form detection in the netlify back-end config (in the browser), otherwise forms won't be detected, and you'll be sad and/or confused.

  

# Ecommerce Landing Page Product Integrations
[Back to top](#html-boilerplate)
  

For our ecomm landers, there're a few dynamic components we integrate using the JSON data of the product the lander is for. They are:

  

- The original price + discounted price.

- The AfterPay/Zip/etc. payment plan instalment amounts (just discounted price / 4 or whatever the plan is).

- Linking to the main website checkout with the specified quantity.

  

Here's the Shopify.js script we use that's responsible for things like updating the front-end pricing, quantity selection, and generating the dynamic checkout link for add-to-cart buttons:

  

```javascript
export default async function updatePrices() {
    let pricesToUpdate = document.querySelectorAll('[data-price]');
    let oriPricesToUpdate = document.querySelectorAll('[data-oriPrice]');
    let uniqueProducts = {};
    let cartButton = document.querySelectorAll('[data-checkout]');

    pricesToUpdate.forEach(function (el, index) {
        const variantId = el.dataset.variant;

        if (!uniqueProducts[variantId]) {
            uniqueProducts[variantId] = {
                product_id: el.dataset.product,
                variant_id: variantId,
                elements: [],
            };
        }
        uniqueProducts[variantId].elements.push(el);
    });

    console.log('uniqueProducts:', uniqueProducts);

    for (const item of Object.values(uniqueProducts)) {
        const response = await fetch('/.netlify/functions/get-product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                product_id: item.product_id,
                variant_id: item.variant_id,
            }),
        });

        if (!response) {
            continue;
        }

        const data = await response.json();
        console.log('data:', data);
        const price = parseFloat(data.price);

        const formattedPrice = price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        item.elements.forEach(function (el) {
            el.textContent = formattedPrice;
            el.classList.add('loaded');
        });
    }

    // Function to update the href attribute based on UTM parameters
    function updateCartLink() {
        // Get the quantity from the quantity input
        const quantity = document.querySelector('.quantity input[type="number"]').value;

        // Get UTM parameters from the URL
        const urlParams = new URLSearchParams(window.location.search);
        let source = 'direct'; // Default source

        for (const [key, value] of urlParams.entries()) {
            if (key === "utm_source") {
                source = value;
            }
        }

        // Update the href attribute of the Add to Cart link
        const addToCartLinks = document.querySelectorAll('a[data-checkout]');
        if (addToCartLinks.length > 0) {
            addToCartLinks.forEach((addToCartLink) => {
                addToCartLink.href = `https://www.glotopix.com/cart/49810321146157:${quantity}?attributes[utm_source]=${source}&attributes[page_source]=kk_lander&${urlParams}`;
            });
        }
    }

    const minusBtn = document.querySelector('.quantity__minus');
    const plusBtn = document.querySelector('.quantity__plus');
    const input = document.querySelector('.quantity__input');

    minusBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const currentValue = parseInt(input.value);
        if (currentValue > 1) {
            input.value = currentValue - 1;
            updateCartLink();
        }
    });

    plusBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const currentValue = parseInt(input.value);
        input.value = currentValue + 1;
        updateCartLink();
    });

    // Initial call to set the link correctly on page load
    updateCartLink();
}
```

  

## Note:

Key items to change in the above code:

- In the addToCartLink.href, make sure you change domain.com to the intended domain.

- In the same URL, *variant_id* also needs to be changed to the specifically intended variant_id. This should of course be dynamically controlled if there are multiple variants on the ecomm lander, but feel free to keep it static if it's a single product.

- In the fetch request used to run the Netlify function, make sure you rename */.netlify/functions/get-product* to your project-specific function path and filename if either or both differ.

- And of course, change any document.querySelector arguments to match your HTML elements as needed if their classnames also differ.

## Get-Product Script
[Back to top](#html-boilerplate)
```javascript 
import fetch from 'node-fetch';

exports.handler = async function (event) {
    const productUrl = 'https://www.domain.com/products/product.json';

    try {
        // Fetch the product data from the Shopify product JSON endpoint
        const response = await fetch(productUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch product data with status ${response.status}`);
        }

        const productData = await response.json();

        // Extract the price from the product data
        const price = productData.product.variants[0].price;

        // Return the price in the response
        return {
            statusCode: 200,
            body: JSON.stringify({ price })
        };
    } catch (error) {
        console.error('Error fetching product data:', error);

        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch product data' })
        };
    }
};
```
In most cases, we just need the price to be dynamically pulled and the shopify script will update it on the front-end. For the above get-product script, you'll just need to update the productURL to the product page link with .json appended. This will allow the script to retrieve the public product data without the need for the Shopify API. 