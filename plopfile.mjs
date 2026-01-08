import { pascalCase } from 'change-case'

export default function (plop) {
  // helpers
  plop.setHelper('pascalCase', (text) => pascalCase(text))

  // component generator
  plop.setGenerator('component', {
    description: 'Generate a UI component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (PascalCase recommended)?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/ui/src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'packages/ui/src/components/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/component/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'packages/ui/src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'plop-templates/component/test.tsx.hbs',
      },
      {
        type: 'append',
        path: 'packages/ui/src/components/index.ts',
        pattern: /$/,
        templateFile: 'plop-templates/component/export.hbs',
      },
    ],
  })
}
