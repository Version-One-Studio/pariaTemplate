import React from 'react'
import styled from 'styled-components';
import {
    Container,
    Grid,
    Content,
    ImageContainer,
    Image,
    Name,
    Description,
    Price
} from './product.styles';
import { graphql } from 'gatsby';

const ProductPage = ({ data }) => {

    console.log(data.product)

    return (
        <Container>
            <Grid>
                <ImageContainer>
                    <Image />
                </ImageContainer>
                <Content>
                    <Name>The BALANDRA BASIN Backpack</Name>
                    <Description>We believe hiking to be one of the most fulfilling things one can experience. After exploring Trinidad & Tobago’s 
                        greatest treks, falls and caves, it was a no brainer that we designed and named our exclusive backpack collection in honor of
                         our favorites.</Description>
                    <Price>$199.99</Price>
                </Content>
            </Grid>
        </Container>
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
