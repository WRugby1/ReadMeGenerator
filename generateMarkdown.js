// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${data.license}
${data.description}
# Table of contents: 
<a href="#install">Installation</a><br>
<a href="#usage">Usage</a><br>
<a href="#contributing">Contributing</a><br>
<a href="#tests">Tests</a><br>
<a href="#questions">Questions</a><br>

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
