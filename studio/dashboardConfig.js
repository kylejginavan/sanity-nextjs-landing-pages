export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '625064274dad4834badd04c1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wf1q9vs8',
                  apiId: '88013073-5b28-41a8-bbf9-5595b2626aba'
                },
                {
                  buildHookId: '62506427d9061e3019ddc363',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-p7tvb47r',
                  apiId: 'fb8386f4-26f3-4caa-a0c6-072f16e025e8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kylejginavan/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-p7tvb47r.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
