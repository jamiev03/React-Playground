import React, { Component } from 'react';
import Axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import post from '../../components/Post/Post';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts = response.data.slice(0, 4);
            console.log(posts);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Jamie'
                }
            })
            this.setState({posts: updatedPosts})
        })
        .catch(error => {
            this.setState({error: true});
        })
    }

    postClicked = (id) => {
        this.setState({selectedPostId: id})
    }

    render () {
        let posts = 
        <div style={{textAlign: "center", width: '250px', backgroundColor: "orange"}}>
            <p style={{textAlign: "center"}}>Oh no..Something went very wrong...</p>
        </div>
        if(!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post 
                        key={post.id} 
                        title={post.title} 
                        author={post.author} 
                        clicked={() => this.postClicked(post.id)} />
            })
        }
        
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;