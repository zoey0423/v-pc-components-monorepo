// 初始空配置，会被脚本自动覆盖
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

export interface SidebarItem {
  path: string
  title: string
  description: string
  category: string
  order: number
  component: string
}

export type SidebarConfig = Record<string, SidebarItem[]>

export const routes: GeneratedRoute[] = []

export const sidebarConfig: SidebarConfig = {}