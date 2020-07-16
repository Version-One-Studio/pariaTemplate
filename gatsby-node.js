const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query MyQuery {
      allShopifyProduct {
        edges {
          node {
            id
            handle
          }
        }
      }
      allShopifyCollection {
        edges {
          node {
            title
            products {
              title
              shopifyId
              handle
              description
              priceRange {
                maxVariantPrice {
                  amount
                }
                minVariantPrice {
                  amount
                }
              }
              images {
                originalSrc
              }
            }
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const { allShopifyProduct, allShopifyCollection } = result.data

  const productTemplate = path.resolve(`./src/templates/product.js`)
  // We want to create a detailed page for each
  // post node. We'll just use the WordPress Slug for the slug.
  // The Post ID is prefixed with 'POST_'
  allShopifyProduct.edges.forEach(edge => {
    createPage({
      path: `shop/${edge.node.handle}`,
      component: slash(productTemplate),
      context: {
        id: edge.node.id,
        collections: allShopifyCollection,
      },
    })
  })
}
