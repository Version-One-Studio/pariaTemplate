import React from 'react';
import Select from 'react-select'
import {
Container,
VariantSelect
} from './variants.styles';

const Variants = ({ variants, addToOptions }) => {

	const mapValues = (values) => {
		return values.map(value => Object.assign({}, {value, label: value}))
	}

	const onSelectChange = (val, index) => {
		console.log(val)
		console.log(index)
	}

	return (
		<Container>
		{variants.map(({ id, name, values }, index) => (
			<VariantSelect key={index}>
				<Select
					placeholder={`Select ${name}`}
					options={mapValues(values)}
					onChange={val =>
						addToOptions(val, index)
					}
				/>
			
			</VariantSelect>
		))}

		</Container>
	)
}

export default Variants;