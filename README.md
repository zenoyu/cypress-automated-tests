# Cypress For Automated Testing
Cypress is a NodeJs Style Automated Regression Testing Tool for website, which can be run from CI/CD with headless browser

## Installation
- Clone this repo
- Run
```
npm install
```

## Folder structure
root
  - cypress.json: all the environment variables
  + cypress
    + integration
      + google: (Your company namespace) All the spec test cases

Note: You can rename the folder <google> with your company namespace

## Implement Test on your local machine
(Chrome by Default)

- Implement the test case under cypress/integration/google, then open the cypress console by:
```
npm run cypress:open
```

```
- To Run All Test Cases (CI)
npm run cypress:run
```
- To Run a Specific Test Case
```
npm run cy:run -- --spec "cypress/integration/google/web/search.spec.js"
```

## Linux Server Installation (CI Server)
```
-- Install node if not yet installed (optional)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node

-- Test node version
node -e "console.log('Running Node.js ' + process.version)"


-- Linux headless browser
yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib
```

## Reference
https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Step-4-Make-an-assertion