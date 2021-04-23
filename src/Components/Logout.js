import React, { Component } from 'react'

export default class Logout extends Component {

        constructor(props) {
            super(props)
    }

deleteSubmit = (e) => {
    e.preventDefault()
    fetch(`${this.props.baseUrl}/sessions`, {
        method: 'DELETE',
        body: JSON.stringify({
            //below is where the other attributes get put...
            username: this.props.user,
            // password: this.props.user.password,
        }),
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
        console.log(this.props.user)
        return (
            <>
            <button onClick={ (e) => this.deleteSubmit(e)}> Logout </button>
            </>
        )
    }
}

