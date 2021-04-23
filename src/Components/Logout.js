import React, { Component } from 'react'

export default class Logout extends Component {

        constructor(props) {
            super(props)
         
    }

deleteSubmit = (e) => {
    e.preventDefault()
    fetch(`${this.props.baseUrl}/sessions`, {
        method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            'credentials': 'include'
    }).then ( res => {
        
        return res.json()
    }).then ( data => {
        localStorage.removeItem('user')
        console.log(data)
        this.props.deleteSession(data)
        // this.setState({
        //     user:[]
        //     })
    }).catch(error => console.error(error))
}


    render() {
        console.log(this.state)
        return (
            <>
            <button onClick={ (e) => this.deleteSubmit(e)}> Logout </button>
            </>
        )
    }
}

