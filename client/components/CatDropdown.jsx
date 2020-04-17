import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
	{ key: 'vintage', text: 'vintage', value: 'vintage' },
	{ key: 'exotic', text: 'Graphic exotic', value: 'exotic' },
	{ key: 'sale', text: 'sale', value: 'sale' },
	{ key: 'new', text: 'new', value: 'new' },
	{ key: 'featured', text: 'featured', value: 'featured' },
]

const dropdown = props => (
	<Dropdown
		placeholder='Skills'
		fluid
		multiple
		selection
		options={options}
		onChange={(e, data) => {
			props.onChange(data.value)
		}}
	/>
)
export default dropdown
