import React from 'react'
import { graphql } from 'gatsby';
import {
    Container,
    Grid,
    Content,
    ImageContainer,
    Image,
    Name,
    Description,
		Price,
		ProductQuantity,
		Minus,
		Count,
		Plus
} from './product.styles';
import backpackIcon from '../images/backpack2.png'
import Variants from '../components/variants/variants.component';
import PrimaryButton from '../components/primaryButton/primaryButton.component';
import Header from '../components/header/header.component';
import Footer from '../components/footer/footer.component';

const testProduct = {
	options: [
		{
			id: '1',
			name:'Size',
			values: ["9", "9.5", "10"]
		},
		{
			id: '2',
			name:'Color',
			values: ["red", "white"]
		}
	]
}

const ProductPage = ({ data }) => {

		let product = data.product;

		console.log(product);

    return (
			<React.Fragment>
					<Header />
					<Container>
							<Grid>
									<ImageContainer>
											<Image src={backpackIcon}/>
									</ImageContainer>
									<Content>
											<Name>The BALANDRA BASIN Backpack</Name>
											<Description>We believe hiking to be one of the most fulfilling things one can experience. After exploring Trinidad & Tobago’s greatest treks, falls and caves, it was a no brainer that we designed and named our exclusive backpack collection in honor of our favorites.</Description>
											<Price>$199.99 </Price>

										<Variants variants={testProduct.options} />

										<ProductQuantity>
											<Minus>–</Minus>
											<Count>1</Count>
											<Plus>+</Plus>
										</ProductQuantity>

										<PrimaryButton text='Add to Cart' />
									</Content>

							</Grid>
						
					</Container>

					<Footer />
			</React.Fragment>
    )
}

export default ProductPage

export const ProductQuery = graphql`
    query($id: String!) {
        product: shopifyProduct(id: { eq: $id }) {
            title
            shopifyId
            priceRange {
                maxVariantPrice {
                    amount
                }
                minVariantPrice {
                    amount
                }
            }
            descriptionHtml
            availableForSale
            productType
            images {
                originalSrc
            }
            variants {
                shopifyId
                title
                price
                availableForSale
                image {
                    originalSrc
                }
            }
            options {
                name
                values
                shopifyId
            }
        }
    }
`
