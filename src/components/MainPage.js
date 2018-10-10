import React, { Component } from 'react'
import { connect} from 'react-redux';
import { getPosts } from '../actions/generalActions';
import { Link } from 'react-router-dom';

 class MainPage extends Component {
   state = {
     posts : []

   }
  componentDidMount(){
    this.props.getPosts();
  }
  componentWillReceiveProps(nextProps){
  if(nextProps.getPost){
   this.setState({posts: nextProps.getPost.posts})
  }
  }
  render() {
    const { posts } = this.state;
    return (
<div className="container">

<div className="row">
  
  <div className="col-md-8">
    <h1 className="my-4">Page Heading
      <small>Secondary Text</small>
    </h1>

 { posts.reverse().map((item , index) => {
   if(index < 2){

   
return (
  
  <div className="card mb-4" key={index}>
  <img className="card-img-top" src={item.postImage} alt="Card image cap" width="750" height="300"/>
  <div className="card-body">
    <h2 className="card-title">{item.title}</h2>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
    <Link to={`/currentPost/${item._id}`} className="btn btn-primary">Read More &rarr;</Link>
  </div>
  <div className="card-footer text-muted">
    Posted on   {item.date} 
    <a href="#">Start Bootstrap</a>
  </div>
</div>

)}
 }) }




    
    <ul className="pagination justify-content-center mb-4">
      <li className="page-item">
        <a className="page-link" href="#">&larr; Older</a>
      </li>
      <li className="page-item disabled">
        <a className="page-link" href="#">Newer &rarr;</a>
      </li>
    </ul>

  </div>

 
  <div className="col-md-4">

 
    <div className="card my-4">
      <h5 className="card-header">Search</h5>
      <div className="card-body">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search for..."/>
          <span className="input-group-btn">
            <button className="btn btn-secondary" type="button">Go!</button>
          </span>
        </div>
      </div>
    </div>

 <div className="card my-4">
      <h5 className="card-header">Recent Stories</h5>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-12">
            <ul className="list-unstyled mb-0">

   {posts.map((item , index) => {

     if(index < 3){

     
     return (
              <li className="row" key={index} style={{marginBottom:'15px'}}>
                <div className="col-sm-3">
                <img src={item.postImage}  width="20" height="50"/>
                </div>
                <div className="col-lg-9">
                <a href="#">{item.title}</a>
                </div>
              </li>

     )}
   })}
    </ul>
          </div>

        </div>
      </div>
    </div>
   
    <div className="card my-4">
      <h5 className="card-header">Side Widget</h5>
      <div className="card-body">
        You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
      </div>
    </div>

  </div>

</div>


</div>

    )
  }
}
const mapStateToProps =(state) => ({
  getPost : state.posts
})
export default connect(mapStateToProps,{getPosts})(MainPage);