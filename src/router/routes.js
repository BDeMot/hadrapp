const pages = ['Home', 'About']

const routerinator = (page) => {
  const Page = page[0].toUpperCase() + page.slice(1)

  return {
    path: `/${page === 'Home' ? '' : Page}`,
    name: Page,
    component: () => import(`../views/${Page}.vue`)
  }
}

const routes = pages.map(page => routerinator(page))

export default routes