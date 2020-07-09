const path = require(`path`)

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  deletePage(page)

  createPage({
      ...page,
      context: {
          ...page.context,
          locale: page.context.intl.language
      },
  })
}

exports.createPages = async ({ actions, graphql }) => {
  const component = path.resolve(`src/components/blog.js`)
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentstackBlogs {
        edges {
          node {
            id
            url
            locale
          }
        }
      }
    }
  `)

  if (result.errors) {
    result.errors.forEach(e => console.error(e.toString()))
    return Promise.reject(result.errors)
  }

  const blogs = result.data.allContentstackBlogs.edges

  blogs.forEach(({ node }) => {
    createPage({
      path: node.url,
      component,
      context: {
        locale: node.locale,
        url: node.url
      },
    })
  })
}