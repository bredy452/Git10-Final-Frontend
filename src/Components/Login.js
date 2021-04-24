import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginUsername:'',
            loginPassword:'',
        }
    }

   handleChange =(e)=> {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

  handleSubmit = (e) => {
    e.preventDefault()

   
    fetch(`${this.props.baseUrl}/sessions`, {
        method: 'POST',
        body: JSON.stringify({
            //below is where the other attributes get put...
            username: this.state.loginUsername,
            password: this.state.loginPassword,
        }),
            headers: {
                'Content-Type': 'application/json'
            },
            'credentials': 'include'
    }).then ( res => {
        return res.json()
    }).then ( data => {
        console.log(data)
        this.props.addSessions(data)
        this.setState({
            loginUsername: '',
            loginPassword: '',
            })
    }).catch(error => console.error)
  }
    render() {

        return (

<>


<div>

 

<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
    
      </Header>
      <Form size='large' onSubmit={ (e) => this.handleSubmit(e)}>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='username' name='loginUsername' onChange={ (e) => this.handleChange(e)} value={this.state.loginUsername} />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            name='loginPassword'
            onChange={ (e) => this.handleChange(e)} value={this.state.loginPassword}
          />
          <Button color='red' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Button onClick={(e) => { this.props.register(e)}} >
         Sign Up
      </Button>
    </Grid.Column>
  </Grid>

  
  </div>
 
 {/* {this.props.visible===false? <Register baseUrl={this.props.baseUrl} addUser={this.props.addUser} /> :null}*/}
  </>
)
}
}
