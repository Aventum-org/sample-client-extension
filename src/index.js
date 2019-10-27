aventum.hooks.addFilter(
  'SideBarMenu',
  'Aventum/AventumSampleClientExtension/addMenuItems',
  (menu, $this) => {
    menu.push({
      icon: ['fab', 'wpforms'],
      title: 'Sample Extension',
      items: [
        {
          name: 'sampleExtensionList',
          title: 'Sample Extension List',
          link: `/sample-extension/list`
        },
        {
          name: 'newSampleExtension',
          title: 'Add Sample Extension',
          link: `/sample-extension/new`
        }
      ]
    })

    return menu
  }
)
