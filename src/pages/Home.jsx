import React from 'react';
import UserList from '../components/UserList';
import PostList from '../components/PostList';
import UserAddForm from '../components/UserAddForm';
import { Link } from 'react-router-dom'

class Home extends React.Component {
    constructor() {    
      super();
      this.state = {
        background: '#ffffff',
        color: '#000000',
        users: [],
        posts: [],
        showUsers: true,
        showPosts: false,
      };
    }
  
    componentDidMount() {
      Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users'),
        fetch('https://jsonplaceholder.typicode.com/photos'),
        fetch('https://jsonplaceholder.typicode.com/posts')
      ])
      .then(([response1, response2, response3]) => Promise.all([response1.json(), response2.json(), response3.json()]))
      .then(([usersJSON, photosJSON, postsJSON]) => this.setState({
        usersData: usersJSON.filter(item => item.id <= 3), 
        photosData: photosJSON.filter(item => item.id <= 3),
        postsData: postsJSON.filter(item => item.id <= 3)
      }))
      .then(() => {
        this.setState({
          users: this.state.usersData.map((user, index) => Object.assign({}, user, this.state.photosData[index])),
          posts: this.state.postsData.map((post, index) => Object.assign({}, post, this.state.photosData[index]))
        })
        console.log(this.state.users)
      });
    }
  
    handleOnChangeBkg(event) {
      this.setState({background: event.target.value});
    }

    handleOnChangeFont(event) {
      this.setState({color: event.target.value});
    }

    handleUsersClick() {
      this.setState({
        showUsers: true,
        showPosts: false
      });
    }

    handlePostsClick() {
      this.setState({
        showUsers: false,
        showPosts: true
      });
    }
  
    addUser(name, email, isGoldClient){
      const user = {
          name,
          email,
          isGoldClient
      }
      this.setState((prevState) => {
        return {
          users: [
            ...prevState.users,
            user
          ]
        }
      }) 
    }
  
    render() {
      return (
        <div className="App" style={{background: this.state.background, color: this.state.color}}>
          <h1>Admin Panel - Project 1</h1>
          <button onClick={(event) => this.handleUsersClick(event)}>Show users</button>
          <button onClick={(event) => this.handlePostsClick(event)}>Show posts</button>
          <UserAddForm addUser={(name, email, isGoldClient) => {this.addUser(name, email, isGoldClient)}}/>
          { this.state.showUsers ? <UserList users={this.state.users}/> : null }
          { this.state.showPosts ? <PostList posts={this.state.posts}/> : null }
          <input type="color" onChange={(event) => this.handleOnChangeBkg(event)}/>
          <input type="color" onChange={(event) => this.handleOnChangeFont(event)}/>
          <div className="footer">
            <Link to="/about">About this project</Link>
          </div>
        </div>
      );
    }
  }
  
export default Home;