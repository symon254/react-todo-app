import React, {Component} from "react"
import axios from 'axios'

class PostList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }
    

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({
                posts: response.data
            })
            console.log(response.data)
        })
        
    }

    render() {
        const {posts} = this.state
        return (
            <div>
                <h1>TODOLIST</h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                         { posts.map(post =>{ 
                             return(
                                 <tr key = {post.id}>
                                     <td>{post.id}</td>
                                     <td>{post.title}</td>
                                     <td>{post.status}</td>
                                 </tr>    
                             )
                         } )}
                     </tbody>
                </table>
            </div>
        )
    }
}
 export default PostList;