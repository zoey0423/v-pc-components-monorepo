import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface RouteConfig {
  path: string
  title: string
  description: string
  category: string
  order: number
  component: string
}

interface SidebarConfig {
  [category: string]: RouteConfig[]
}

async function generateRoutes() {
  const docsDir = path.resolve(process.cwd(), '../../docs/components')
  const outputDir = path.resolve(process. cwd(), 'src/generated')
  
  // 确保输出目录存在
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  const routes: RouteConfig[] = []
  
  // 检查 docs/components 目录是否存在
  if (! fs.existsSync(docsDir)) {
    console.log('📁 Creating docs/components directory...')
    fs.mkdirSync(docsDir, { recursive: true })
  }

  const files = fs.readdirSync(docsDir).filter(file => file.endsWith('.mdx'))

  for (const file of files) {
    const filePath = path.join(docsDir, file)
    const content = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(content)
    
    const componentName = path.basename(file, '.mdx')
    
    routes.push({
      path: `/components/${componentName}`, // 这里生成的路径会在 Sidebar 中被转换
      title: data.title || componentName,
      description:  data.description || '',
      category: data.category || 'Components',
      order: data.order || 999,
      component: componentName
    })
  }

  // 按分类和顺序排序
  const sidebar: SidebarConfig = {}
  routes.forEach(route => {
    if (!sidebar[route.category]) {
      sidebar[route.category] = []
    }
    sidebar[route.category].push(route)
  })

  Object.keys(sidebar).forEach(category => {
    sidebar[category].sort((a, b) => a.order - b.order)
  })

  // 生成路由配置
  const routesContent = `
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
${routes.map(route => `  {
    path: '${route. path}',
    component: '${route.component}',
    meta: {
      title: '${route.title}',
      description: '${route.description}',
      category: '${route.category}'
    }
  }`).join(',\n')}
]

export const sidebarConfig: SidebarConfig = ${JSON.stringify(sidebar, null, 2)} as SidebarConfig
`

  fs.writeFileSync(path.join(outputDir, 'routes.ts'), routesContent)
  console.log(`✅ Generated ${routes.length} routes and sidebar config`)
}

generateRoutes().catch(console.error)