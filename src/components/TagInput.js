import React from 'react'

class TagInput extends React.Component{

    state = {
        checked: false
    }

    handleChange = (event) => {
        if (this.state.checked === false) {
            this.setState({checked: true})
            this.props.handleCheck(event)
        } else if (this.state.checked === true) {
            this.setState({checked: false})
        }

    }

    render(){
        return (
        <>
            <input id="tagCheckBox"
                type="checkbox" 
                name={this.props.id} 
                value={this.props.text}
                onChange={(event) => this.handleChange(event)}>
            </input>
            <label>{this.props.text}</label>
      </>
    )
    }
}

export default TagInput