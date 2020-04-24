import React from 'react'
import makeAnimated from 'react-select/animated';
import Select from 'react-select'


class Tags extends React.Component{

   state = {
       options: []
   } 

    componentDidMount(){

        function tagOptions(resp) {
            console.log(resp)
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
            <form>
                <Select options={this.state.options}></Select>
                <br />
            </form>
        </div>
     )
    }
}

export default Tags