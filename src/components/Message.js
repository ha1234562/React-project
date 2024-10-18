import React, { Component } from 'react'

class Message extends Component {
//    render() {
//        return <h1>Class Component</h1>
//    return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
//    }
    constructor() {
        super() 
        this.state = {
            message: 'Welcome visitor'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message