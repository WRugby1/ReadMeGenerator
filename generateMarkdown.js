// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${data.license}
${data.description}
# Table of contents: 



<a id = "install"># Installation </a>
${data.install}
# Usage
${data.usage}
# Contributing
${data.contributing}
# Tests
${data.tests}
# Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
