import React from 'react';
import Select from 'react-select'
import {
Container,
VariantSelect
} from './variants.styles';

const Variants = ({ variants }) => {

	const mapValues = (values) => {

		return values.map(value => Object.assign({}, {value, label: value}))
	}

	return (
		<Container>
		{variants.map(({ id, name, values }) => (
				<VariantSelect key={id}>

					<Select placeholder={`Select ${name}`} options={mapValues(values)} />
				
				</VariantSelect>
		))}

		</Container>
	)
}

export default Variants;