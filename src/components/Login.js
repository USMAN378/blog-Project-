import React, { Component } from 'react';
import axios from 'axios';
import TextInput from '../common/TextInput';
import '../App.css';
import {connect } from 'react-redux';
import {LoginUser} from '../actions/authActions';

 class Login extends Component {
   constructor(props){
     super(props);
     this.state = {
       email : '',
       password : '',
       errors : {}
     }
   }
  
   
  
   _changHandler = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
   }
   LoginUser = (e) => {

   e.preventDefault();
     const { email , password} = this.state;
     const userData = {
      email,
      password
     }
     this.props.LoginUser(userData);
   }
   componentWillReceiveProps(nextProps){
     if(nextProps.errors){

       this.setState({errors : nextProps.errors})


     }



   }
 
  render() {
    const {email , password} = this.state;
    const { errors } = this.state;
    return (
        
        <div className="login">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Log In</h1>
                <p className="lead text-center">Sign in to your DevConnector account</p>
                <form onSubmit={this.LoginUser}>

                <TextInput
                type="text" 
                name="email"
                placeholder="Email"
                value={email}
                 onChange={this._changHandler}
                 error={errors.email}
                
                
                />



                  {/* <div className="form-group">
                    <input type="email" className={classnames('form-control form-control-lg' , {
              'is-invalid' : errors.email})} placeholder="Email Address" name="email" value={email} onChange={this._changHandler} />
                    {errors.email  && (<div className="invalid-feedback">{errors.email}</div>)}

                  </div> */}



                  <TextInput
                  name="password"
                  type="password"
                  value={password}
                  onChange={this._changHandler}
                  placeholder="Password"
                  error ={errors.password}
                  />



                  {/* <div className="form-group">
                    <input type="password" className={classnames('form-control form-control-lg' , {
              'is-invalid' : errors.password
            })} placeholder="Password" name="password"  value={password} onChange={this._changHandler}/>
                    {errors.password  && (<div className="invalid-feedback">{errors.password}</div>)}
                  </div> */}
                  
                  <input type="submit"  className="btn btn-info btn-block mt-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      
    )
  }
}
const mapStateToProps = (state) =>({

errors : state.errors
})

export default connect(mapStateToProps,{LoginUser})(Login);