// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return '![License](https://img.shields.io/badge/license-${license}-important.svg)'
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
  function renderLicenseLink(license) {
      if (license == 'Apache') {
        return '[Apache License](https://opensource.org/licenses/Apache-2.0)'
  }
    else if (license == 'Mozilla') {
       return '[Mozilla License](https://opensource.org/licenses/MPL-2.0)'
  }
    else if (license == 'MIT') {
      return '[MIT License](https://opensource.org/licenses/MIT)' 
  }
    else if (license =='Eclipse') {
      return '[Eclipse License](https://opensource.org/licenses/EPL-2.0)'
  }
    else if (license == 'Apple') {
      return '[Apple License](https://opensource.org/licenses/APSL-2.0)'
  }
    else if (license == 'None') {
      return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}


  ## Table of Contents 
   1. [Licensing](#Licensing)
   2. [Desctiption](#Desctiption)
   3. [Installation](#Installation) 
   4. [Contributing](#Contributing)
   5. [Test](#Test)
   6. [Questions](#Questions)
  
  ## Licensing 
  ![${data.badgetype}](https://img.shields.io/badge/license-${data.badgetype}-important)

  ## Desctiption
  ${data.description}
  
  ## Installation
  ${data.installation}
 
  ## Contributing
  ${data.usage}
  
  ## Tests
  ${data.test}
  
  ## Questions
  
  Contact by email at ${data.email}
  GitHub User: https://github.com/${data.github}
 
  `;

}

module.exports = generateMarkdown;


