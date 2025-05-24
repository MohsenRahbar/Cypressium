# Simple API Test Framework with Cypress

[![Cypress Version](https://img.shields.io/badge/Cypress-12.17.0-brightgreen)](https://www.cypress.io/)

A comprehensive testing framework for API and UI validation using Cypress

## 📦 Key Features
- Complete UI element validation
- API endpoint testing
- Cross-browser support
- GUI and Headless execution modes
- Environment configuration
- Page Object Pattern support
- Modular and scalable architecture

## 🚀 Quick Start

### Prerequisites
- Node.js v16+ [Download](https://nodejs.org/)
- npm v8+
- Chrome/Firefox/Edge browser

### Installation
1. Clone repository:
```bash
git clone https://github.com/yourusername/simple-api-test-with-cypress.git
cd simple-api-test-with-cypress
```

2. Install dependencies:
```bash
npm install
```

3. Install Cypress (if needed):
```bash
npx cypress install
```

## 🏗 Project Structure
```
project-root/
├── cypress/
│   ├── e2e/               # E2e cypress test file
│   ├── fixtures/          # Test data
│   ├── integration/       # Test specs
│   ├── plugins/           # Custom plugins
│   └── support/          # Reusable components
├── cypress.config.js     # Configuration
└── package.json
```

## ▶ Running Tests

### Interactive GUI Mode
```bash
npm run cy:open
```

### Headless Mode
```bash
npm run test
```

### Additional Commands
- Run specific test file:
```bash
npx cypress run --spec "cypress/integration/my-test.spec.js"
```

- Run in specific browser:
```bash
npx cypress run --browser firefox
```

## 🔧 Best Practices
1. **Test Organization**: Group tests by feature in `/integration`
2. **Data Management**: Use `/fixtures` for test data
3. **Reusability**: Create custom commands in `/support`
4. **Configuration**: Manage environments in `cypress.config.ts`
5. **Naming Convention**: Use `.cy.ts / .cy.js` suffix for test files
6. **Debugging**: Use `cy.debug()` with Chrome DevTools

## ❓ FAQ
❓ **Cypress installation fails?**  
- Verify Node.js and npm versions
- Clear npm cache: `npm cache clean --force`

❓ **Tests fail in headless mode?**  
- Add to config: `{ "chromeWebSecurity": false }`
- Increase timeout in `cypress.config.js`

❓ **Element not found errors?**  
- Use `cy.wait()` for dynamic content
- Implement retry-ability with `should('exist')`
