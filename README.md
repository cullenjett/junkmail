# JunkMail 🗑

**🚧 UNDER CONSTRUCTION 🚧**

JunkMail is an application for managing transactional email templates. Use React to build your templates with reusable components and then upload the rendered HTML to an email-as-a-service provider.

## Installation

Requirements: [Node.js](https://nodejs.org/en/) >= 8.0

* `npm install`

## Development

* `npm start`

This will start up a dev server and open your browser to `http://localhost:8080`. The root URL acts as a hub with links to each of your templates -- clicking one will navigate you to `/<template-name>`. Supporting code for this development app can be found in `src/dev`.

Email templates should be written as React components and live inside `src/templates` (subdirectories are allowed). Files will be automatically detected and added to the "hub" page and a corresponding route at `/<template-name>` will be created. **Each template file must export the React component as the `default`**.

### Testing

* `npm test`

Starts [Jest](https://facebook.github.io) in watch mode. Tests should be written inside a `__tests__` directory next to the module being tested.
