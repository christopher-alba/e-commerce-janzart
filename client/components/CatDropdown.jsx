import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
	{ key: 'vintage', text: 'Vintage', value: 'vintage' },
	{ key: 'exotic', text: 'Exotic', value: 'exotic' },
	{ key: 'sale', text: 'Sale', value: 'sale' },
	{ key: 'new', text: 'New', value: 'new' },
	{ key: 'featured', text: 'Featured', value: 'featured' },
]

const dropdown = props => (
	<Dropdown
		placeholder='Select your filters here.'
		fluid
		multiple
		selection
		options={options}
		onChange={(e, data) => {
			props.onChange(data.value)
		}}
		style={{ ...props.style }}
	/>
)
export default dropdown
