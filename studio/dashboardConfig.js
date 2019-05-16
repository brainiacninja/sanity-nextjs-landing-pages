export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cdd86ebc4413cc1102b08a6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kc7pqdvq',
                  apiId: '433f68e4-5ea1-4f79-bf31-c39871ef606c'
                },
                {
                  buildHookId: '5cdd86eb48792d5e460c9c4f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-d5gm5izi',
                  apiId: '487bea8a-c6ab-4464-b77a-01734dcaeabd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brainiacninja/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-d5gm5izi.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
