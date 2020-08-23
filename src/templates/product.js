import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby';
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
import Variants from '../components/variants/variants.component';
import PrimaryButton from '../components/primaryButton/primaryButton.component';
import Header from '../components/header/header.component';
import { useGlobalDisptach } from '../context/GlobalContextProvider'
import { ADD_ITEM_TO_CART } from '../context/actionTypes';
import { usePrice } from '../custom-hooks/usePrice';
import ProductCounter from '../components/productCounter/proudctCounter.component';

const ProductPage = ({ data }) => {

	let product = data.product;

	const [count, setCount] = useState(1)
	const [selectedOptions, setSelectedOptions] = useState([])
	const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
	const [activeImage, setActiveImage] = useState(product.images[0].originalSrc)
	const [variantPrice, setVariantPrice] = useState(product.variants[0].price)
	
	const { total } = usePrice(count, variantPrice)

	useEffect(() => {
		//Check if the user has selected enough options
		if (selectedOptions.length === product.options.length) {
			let title = `${selectedOptions.join(" / ")}`
			console.log(title)
			
			//Loop through all variants and find a match for the label
			for (let i = 0; i < product.variants.length; i++) {
				if (title === product.variants[i].title) {
					console.log(product.variants[i])
					setSelectedVariant(product.variants[i])
					setVariantPrice(product.variants[i].price)
				}
			}

		}
	}, [selectedOptions])


	const dispatch = useGlobalDisptach()

	console.log(product);

	const handleAddToCart = () => {
		// TODO: Ensure options are selected before adding to cart
		dispatch({type: ADD_ITEM_TO_CART, item: {...selectedVariant, style: selectedVariant.title, title: product.title}, count})
	}

	const handleAdd = () => {
		setCount(count + 1)
	}

	const handleMinus = () => {
		if (count === 1) {
			return
		}

		setCount(count - 1)
	}

	const handleAddToOptions = (val, index) => {
		let currentOptions = selectedOptions
		currentOptions[index] = val.label
		setSelectedOptions([...currentOptions])
	}

	const disabled = () => {
		if (product.options[0].name === "Title") {
			return false
		}

		return selectedOptions.length !== product.options.length
	}

    return (
			<React.Fragment>
					<Header />
					<Container>
						<Grid>
							<ImageContainer>
									<Image src={selectedVariant.image.originalSrc}/>
							</ImageContainer>
							<Content>
									<Name>{product.title}</Name>
									<Description>{product.description}</Description>
									<Price>${parseFloat(total).toFixed(2)}</Price>

								{
								product.options[0].name === 'Title' ?
								null
								:
								<Variants
									variants={product.options}
									addToOptions={handleAddToOptions}
								/>
								}

								<ProductCounter handleMinus={handleMinus} handleAdd={handleAdd} count={count} />

								<PrimaryButton
									clickHandler={handleAddToCart} 
									text='Add to Cart'
									disabled={disabled()}	
								/>
							</Content>

						</Grid>
						
					</Container>

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
						description
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
