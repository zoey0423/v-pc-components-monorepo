import { pascalCase, kebabCase } from 'change-case'
// import fs from 'fs'
// import path from 'path'

export default function (plop) {
  // helpers
  plop.setHelper('pascalCase', (text) => pascalCase(text))
  plop.setHelper('kebabCase', (text) => kebabCase(text))

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
        type:  'add',
        path:  'docs/components/{{kebabCase name}}.mdx',
        templateFile: 'plop-templates/component/docs.mdx.hbs',
      },
      {
        type: 'append',
        path: 'packages/ui/src/components/index.ts',
        pattern: /$/,
        templateFile: 'plop-templates/component/export.hbs',
      },
      {
        type: 'modify',
        path: 'apps/docs-site/src/utils/componentRegistry.ts',
        pattern: /(\/\/ AUTO-GENERATED IMPORTS)/,
        template: '$1\nimport { {{pascalCase name}} } from \'@vcredit-sys-components/ui\'',
      },
      {
        type: 'modify',
        path: 'apps/docs-site/src/utils/componentRegistry.ts',
        pattern: /(\/\/ AUTO-GENERATED REGISTRY)/,
        template: '$1\n  \'{{pascalCase name}}\': {{pascalCase name}},',
      },
    ],
  })
}