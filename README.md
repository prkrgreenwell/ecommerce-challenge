<!-- @format -->

# E-commerce Back End Starter Code

![badge](https://img.shields.io/badge/license-MIT-brightgreen)

This project is covered by the MIT license.
https://opensource.org/licenses/MIT;

## Description

This is an example of an eCommerce back end. It has the ability to work with Categories, Products, and Tags, and has functionality to GET, POST, PUT, and DELETE routes on each of them.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Install the dependencies

```
npm i
```

Run the schema file in the db folder using mySQL

```
SOURCE schema.sql;
```

In the main folder run the seed

```
npm run seed
```

Then run the server or use nodemon

```
npm run watch
```

All functionality can be used with a back-end manager such as Insomnia

## Usage

You can use a get route to get JSON information for any categories, products, or tags, you can use the id parameter to isolate any one object.
![image](./assets/get%20route.png)

The application also allows for posting new products, updating, and deleting using the associated operators.
![image](./assets//post%20route.png)

![image](./assets/put%20route.png)

The following link will take you to a video showing the functionality of the program.
https://watch.screencastify.com/v/6TkjAVPkJFpFNHm14eyw

## License

![badge](https://img.shields.io/badge/license-MIT-brightgreen)

This project is covered by the MIT license.
https://opensource.org/licenses/MIT;

## Contributing

I used the starter code fantastic-umbrella from Xandromus's respository.

## Tests

N/A

## Questions

Contact [prkrgreenwell](https://github.com/prkrgreenwell) on GitHub with any questions you may have
