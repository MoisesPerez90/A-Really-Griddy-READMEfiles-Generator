// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    'MIT' : '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'ISC' : '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    'GNUPLv3' : '[![License: MIT](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  }
  return badges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT' : '[MIT](https://choosealicense.com/licenses/mit/)',
    'ISC' : '[ISC](https://choosealicense.com/licenses/isc/)',
    'GNUPLv3' : '[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)'
  }
  return licenseLinks[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
    return `Licensed under the ${renderLicenseLink(license)} license`
  }
  else{
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return  `
# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents
- [Project Description](#description)
- [Usage](#usage)
- [Contributing](#contributing)
- [Installation](#installation)
- [Questions](#questions)
- [License](#license)
- [Tests](#tests)

## Description
${data.description}

## Usage
${data.usage}

## Contributing 
${data.contributing}

## Installation
${data.installation}

## Questions
You may send me an email or reach me out through github using the follow links:  
[Email Adress](${data.email})  
[Github page](https://github.com/${data.github})

## License
${renderLicenseSection(data.license)};

## Tests
${data.tests}
    `
}

module.exports = generateMarkdown;
