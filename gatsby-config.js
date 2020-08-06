module.exports = {
	siteMetadata: {
		title: `{{shopName}}`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@wipay`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		{
            resolve: "gatsby-source-shopify",
            options: {
                
                shopName: "{{shopName}}",
                accessToken: "{{storefrontAccessToken}}",
                apiVersion: "2020-01",
                verbose: true,
                // Number of records to fetch on each request when building the cache
                // at startup. If your application encounters timeout errors during
                // startup, try decreasing this number.
                paginationSize: 250,
                includeCollections: ["shop", "content"],
            },
        },
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
