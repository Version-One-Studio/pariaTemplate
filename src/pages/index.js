import React from "react";
import Layout from "../components/layout/layout.js";
import SEO from "../components/seo";
import Hero from "../components/hero/hero.component.js";
import FeaturedCollection from "../components/featuredCollection/featuredCollection.component";
import Collections from "../components/collections/collections.component.js";
import About from "../components/about/about.component.js";


const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Hero />
		<FeaturedCollection />
		<About />
		<Collections />
	</Layout>
)

export default IndexPage;
