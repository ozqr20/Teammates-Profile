function renderLicenseBadge(license) {
    if (license == "Apache 2.0") {
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if(license == 'GNU GPLv3') {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license == 'MIT'){
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }else if (license == 'Mozilla'){
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }else if (license == 'GNU AGPLv3'){
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    }else if (license == 'GNU LGPLv3'){
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
    }else {
    return 'unlicensed check here'
    }
  }

function renderLicenseLink(license) {
  var linkLicense = {
    'Apache 2.0': `https://opensource.org/licenses/Apache-2.0`,
    'GNU GPLv3': `https://www.gnu.org/licenses/agpl-3.0`,
    'MIT': `https://opensource.org/licenses/MIT`,
    'Mozilla': `https://opensource.org/licenses/MPL-2.0`,
    'GNU AGPLv3': `https://www.gnu.org/licenses/agpl-3.0`,
    'GNU LGPLv3': `https://www.gnu.org/licenses/lgpl-3.0`,
    'unlicensed': '',
  }
  return linkLicense[license]
}

function renderLicenseSection(license) {
  return `Licensed using ${license} \n  You can find more information here ${renderLicenseLink(license)}`
}

//Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  # Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [contribution](#contribution)
  * [Tests](#tests)
  * [Licence](#licence)
  * [Questions](#questions)
  * [Credits](#credits)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}
  
  ## Tests
  ${data.tests}

  ## Licence
  ${renderLicenseSection(data.license)}

  ## Questions
  Any questions please email me at ${data.email}

  ## Credits
  Github: https://github.com/${data.username}

  Copyright ${new Date().getFullYear()} by ${data.username}
`;
}

module.exports = generateMarkdown;
