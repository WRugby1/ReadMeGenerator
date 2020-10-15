// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${data.license}
${data.description}
# Table of contents: 
<a href="#install">Installation</a>
<a href="#install">Usage</a>
<a href="#install">Contributing</a>
<a href="#install">Tests</a>
<a href="#install">Questions</a>

# Installation 
<a id="install">${data.install}</a>
# Usage
<a id="#usage">${data.usage}</a>
# Contributing
<a id="#contributing">${data.contributing}</a>
# Tests
<a id="#tests">${data.tests}</a>
# Questions
<a id="#questions">${data.questions}</a>
`;
}

module.exports = generateMarkdown;
