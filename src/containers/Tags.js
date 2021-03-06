import React from 'react'
import Select from 'react-select'

class Tags extends React.Component{

   state = {
       options: []
   } 

    componentDidMount(){

        function tagOptions(resp) {
            return resp.map((tag) => {
                return {value: tag.text, label: tag.text}
            })
        }
    
        return fetch("http://127.0.0.1:3000/tags")
            .then(resp => resp.json())
            .then(resp => this.setState({options: tagOptions(resp)}))
            
    }

render(){

    return (
        <div>
            <Select 
                placeholder="Add Filter Tags"
                onChange={value => this.props.handleTagSearch(value)}
                options={this.state.options} 
                isMulti>
            </Select>
            <br />
        </div>
     )
    }
}

export default Tags