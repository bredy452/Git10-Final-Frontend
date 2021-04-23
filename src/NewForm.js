import React, { Component } from 'react'

export default class NewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: 'Phil',
            gifId: '',
            
        }
        // this.handleChange = this.handleChange.bind(this)
    }


    // handleChange =(e)=> {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

     handleSubmit = (e) => {
        e.preventDefault()
        //fetch and update props{addBookmark in app}
        console.log(this.state)
        fetch(`${this.props.baseUrl}/gifs`, {
            method: 'POST', 
            body: JSON.stringify({
                //below is where the other attributes get put...
                name: this.state.user,
                Likes: this.state.url
            }),
                headers: {
                    'Content-Type': 'application/json'
                }
        }).then ( res => {
            return res.json()
        }).then ( data => {
            this.props.addBookmarks(data)
            this.setState({
                name: '',
                url: ''
                })
        }).catch(error => console.error)
    }

  

    render() {
        return (
            <form onSubmit={ (e) => this.handleSubmit(e)}>
                <input type="submit" value="Add a helpful bookmark"/>
            </form>
        )
    }
}
