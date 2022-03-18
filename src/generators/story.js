module.exports = {
  description: 'Component Story Generator',
  prompts: [
    {
      type: 'fuzzypath',
      message: 'Component name for story',
      name: 'path',
      rootPath: 'src',
      itemType: 'file',
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'src/{{getFolder path}}/{{getName path}}.stories.tsx',
      templateFile: 'src/generators/Component.stories.tsx.hbs',
    },
  ],
};
