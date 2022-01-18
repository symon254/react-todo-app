import React, { Component } from 'react'
import axios from 'axios'

 class PostForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userId: '',
             title: '',
             body: '' 
        }
    }
    
    changeHandler=(e)  =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        axios.get('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => {
            this.setState({
                posts: response.data
            })
            console.log(response.data)
        })
    }

    render() {
        const {userId, title, body} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                <div>
                    <label>userid</label>
                    <input 
                    type='text' 
                    name ='userId' 
                    onChange={this.changeHandler}
                    value={userId}></input>
                </div>
                <div>
                   <label>title</label>
                    <input 
                    type='text' 
                    name ='title' 
                    onChange={this.changeHandler}
                    value={title}></input>
                </div>
                <div>
                    <label>body</label>
                    <input 
                    type='text' 
                    name ='body' 
                    onChange={this.changeHandler}
                    value={body}></input>
                </div>
                <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
export default PostForm;
