// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
![License Badge](https://img.shields.io/badge/license-MIT-blue)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [license](#license)
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions)

## Description 
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contribution
${data.contribution}

## Test
${data.test}

## Questions
If you have any questions, please contact me at ${data.email}. You can also find me on GitHub at [${data.github}](https://github.com/${data.github})
`;
}

export default generateMarkdown;
