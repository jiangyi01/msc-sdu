import React, { Component } from 'react';
import './loginPage.css';
import { connect } from "react-redux";
import { GET_MESSAGE_OFYOU } from './login_redux';
import { Button } from 'antd';
class LoginPage_p extends Component
{
    constructor(props)
    {
        super(props);
        //const { store } = this.context;
        this.state =  
        {
           // value:this.props.value
        }
    }
    
    render(){
      return (
          <div>
            <Button onClick={()=>this.props.fun_1()}>
              {this.props.value}99999
            </Button>
            
          </div>
      )
  }
}


const mapStateToProps=(
  state, 
  ownProps
  )=>{
    return{
      value: state.login.id
    }
}
  
const mapDispatchToProps=(
  dispatch,
  ownProps
  ) =>{
  return{
    fun_1:() => 
    {
        dispatch({type:GET_MESSAGE_OFYOU,payload:{id:100,token:12121,name:"as"}});
    }

  };
}

 const LoginPage = connect
  (
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage_p);
  
  export default LoginPage;
