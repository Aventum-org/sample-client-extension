import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'

aventum.hooks.addFilter(
  'SideBarMenuItems',
  'Aventum/AventumSampleClientExtension/addMenuItem',
  (items, $this, state, props) => {
    const { activeItem } = state || ''

    let newItems = [...items, 
      <Menu.Item key="sample-extension">
      <Menu.Header>
        <Icon name="wpforms" /> Sample Extension
      </Menu.Header>

      <Menu.Menu>
        <Menu.Item
          as={Link}
          to="/sample-extension/list"
          name="sampleExtensionList"
          active={activeItem==='sampleExtensionList'}
          onClick={$this.handleItemClick}
        >
          Sample Extension List
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/sample-extension/new"
          name="newSampleExtension"
          active={activeItem==='newSampleExtension'}
          onClick={$this.handleItemClick}
        >
          Add Sample Extension
        </Menu.Item>
      </Menu.Menu>
    </Menu.Item>
    ]
    return newItems
  }
)
