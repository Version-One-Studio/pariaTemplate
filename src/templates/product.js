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
import { useGlobalDisptach } from '../context/GlobalContextProvider'
import { ADD_ITEM_TO_CART } from '../context/actionTypes';
import { usePrice } from '../custom-hooks/usePrice';

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

	const [count, setCount] = useState(1)
	const [selectedOptions, setSelectedOptions] = useState([])
	const [selectedVariant, setSelectedVariant] = useState('')
	const [activeImage, setActiveImage] = useState(product.images[0].originalSrc)
	const [variantPrice, setVariantPrice] = useState(product.priceRange.minVariantPrice.amount)
	
	const { total } = usePrice(count, variantPrice)

	useEffect(() => {
		//Check if the user has selected enough options
		if (selectedOptions.length === product.options.length) {
			let title = `${selectedOptions.join(" / ")}`

			//Loop through all variants and find a match for the label
			for (let i = 0; i < product.variants.length; i++) {
				if (title === product.variants[i].label) {
					const selectedVariant = product.title[i]

					setSelectedVariant(selectedVariant.shopifyId)
					setActiveImage(selectedVariant.image.originalSrc)
					setVariantPrice(selectedVariant.price)
				}
			}

		}
	}, [selectedOptions])


	const dispatch = useGlobalDisptach()
	console.log(product);

	const handleAddToCart = () => {
		console.log("clicked")
		dispatch({type: ADD_ITEM_TO_CART, item: product, count})
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

    return (
			<React.Fragment>
					<Header />
					<Container>
						<Grid>
							<ImageContainer>
									<Image src={activeImage}/>
							</ImageContainer>
							<Content>
									<Name>The BALANDRA BASIN Backpack</Name>
									<Description>We believe hiking to be one of the most fulfilling things one can experience. After exploring Trinidad & Tobago’s greatest treks, falls and caves, it was a no brainer that we designed and named our exclusive backpack collection in honor of our favorites.</Description>
									<Price>${total}</Price>

								<Variants
									variants={product.options}
									addToOptions={handleAddToOptions}
								/>

								<ProductQuantity>
									<Minus onClick={() => handleMinus()}>–</Minus>
									<Count>{count}</Count>
									<Plus onClick={() => handleAdd()}>+</Plus>
								</ProductQuantity>

								<PrimaryButton clickHandler={handleAddToCart}  text='Add to Cart' />
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
