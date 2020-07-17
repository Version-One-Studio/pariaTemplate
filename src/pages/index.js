import React from "react";
import Layout from "../components/layout/layout.js";
import SEO from "../components/seo";
import Hero from "../components/hero/hero.component.js";
import Product from "../components/product/product.component.js";
import Collection from "../components/collection/collection.component.js";
import styled from 'styled-components';
import CollectionDisplay from "../components/collections/collectionsDisplay.component.js";
import Footer from "../components/footer/footer.component.js";

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Hero />
		<Collection />
		<About>
			<Title>The Art of Hiking</Title>
			<Description>
			We believe hiking to be one of the most fulfilling things one can experience. After exploring Trinidad & Tobago’s greatest treks, falls and caves, it was a no brainer that we designed and named our exclusive backpack collection in honor of our favorites.
			</Description>
		</About>

		<CollectionDisplay />

		<Footer />
	</Layout>
)

export default IndexPage

const About = styled.div`
width: 100%;
height: 300px;
background-color: #F5F5F5;
text-align: center;
padding: 40px;
max-width: 1200px;
margin-left: auto;
margin-right: auto;
`;

const Title = styled.h1`
font-size: 32px;
font-weight: bold;
color: #2C2C2C;
`;

const Description = styled.p`
font-size: 26px;
font-weight: 400;
color: #2C2C2C;
`;
