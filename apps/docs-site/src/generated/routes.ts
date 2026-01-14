
// AUTO-GENERATED FILE - DO NOT EDIT
export interface GeneratedRouteMeta {
  title: string
  description: string
  category: string
}

export interface GeneratedRoute {
  path: string
  component: string
  meta: GeneratedRouteMeta
}

export type SidebarItem = {
  path: string
  title: string
  description: string
  category: string
  order: number
  component: string
}

export type SidebarConfig = Record<string, SidebarItem[]>

export const routes: GeneratedRoute[] = [
  {
    path: '/components/Button',
    component: 'Button',
    meta: {
      title: 'Button',
      description: '',
      category: 'Components'
    }
  },
  {
    path: '/components/avatar',
    component: 'avatar',
    meta: {
      title: 'Avatar',
      description: 'Avatar 组件文档',
      category: 'Components'
    }
  }
]

export const sidebarConfig: SidebarConfig = {
  "Components": [
    {
      "path": "/components/avatar",
      "title": "Avatar",
      "description": "Avatar 组件文档",
      "category": "Components",
      "order": 1,
      "component": "avatar"
    },
    {
      "path": "/components/Button",
      "title": "Button",
      "description": "",
      "category": "Components",
      "order": 999,
      "component": "Button"
    }
  ]
} as SidebarConfig
