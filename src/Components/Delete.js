import React, { Component } from 'react'
import App from '../App'


// I was thinking of using this button on other forms, but didn't


export default class Delete extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: this.props.gif
        }
    }

     handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.props.baseUrl)
        console.log(this.state)
        //fetch and update props{addGifs in app
        fetch(`${this.props.baseUrl}/gifs/${this.state._id}` , {
            method: 'DELETE', 
            body: JSON.stringify({
                //below is where the other attributes get put...
                _id: this.props.id
            }),
                headers: {
                    'Content-Type': 'application/json'
                }
        }).then ( res => {
            return res.json()
        }).then ( data => {
            this.props.getGifs()
        }).catch(error => console.error)
    }

  

    render() {
        console.log(this.state._id)
        return (
                <i id="_id"  name="_id" onClick={ (e) => this.handleSubmit(e)} type="submit" value={this.state._id} style={{cursor:'pointer'}} className="trash icon"></i>
        )
    }
}