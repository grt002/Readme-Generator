// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Apache":
      return "[![License:MIT](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL":
      return "[![License:MIT](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/gpl-3.0)";
    case "BSD":
      return "[![License:MIT](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    default:
      return "";
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GPL":
      return "https://gnu.org/licenses/GPL-3.0";
    case "BSD":
      return "https://opensource.org/licenses/BSD-3-Clause";
    default:
      return "";
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return `## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).`;
    case "Apache":
      return `## License

This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).`;
    case "GPL":
      return `## License

This project is licensed under the [GNU GPL v3.0 License](https://www.gnu.org/licenses/gpl-3.0).`;
    case "BSD":
      return `## License

This project is licensed under the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause).`;
    default:
      return '';
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;