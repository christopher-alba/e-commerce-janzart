import React from 'react'
import { Checkbox, Dropdown } from 'semantic-ui-react'
const options = [
  { key: 'vintage', text: 'Vintage', value: 'vintage' },
  { key: 'exotic', text: 'Exotic', value: 'exotic' },
  { key: 'sale', text: 'Sale', value: 'sale' },
  { key: 'new', text: 'New', value: 'new' },
  { key: 'featured', text: 'Featured', value: 'featured' }
]

class CatDropdown extends React.Component {
	state = {
	  categories: []
	}

	handleChecked = tag => {
	  let cats = this.state.categories
	  cats.push(tag)
	  this.setState({ categories: cats }, () => {
	    this.props.onChange(this.state.categories)
	  })
	}
	handleUnchecked = tag => {
	  let cats = this.state.categories
	  cats = cats.filter(cat => {
	    if (cat === tag) {
	      return false
	    }
	    return true
	  })
	  this.setState({ categories: cats }, () => {
	    this.props.onChange(this.state.categories)
	  })
	}
	render () {
	  return (
	    <div className='filterMenu' style={{ ...this.props.style }}>
	      {options.map(option => {
	        return (
	          <Checkbox
	            key={option.value}
	            label={<label>{option.text}</label>}
	            value={option.value}
	            onChange={(evt, data) => {
	              if (data.checked) {
	                this.handleChecked(data.value)
	              } else {
	                this.handleUnchecked(data.value)
	              }
	            }}
	          />
	        )
	      })}
	    </div>
	  )
	}
}

export default CatDropdown
