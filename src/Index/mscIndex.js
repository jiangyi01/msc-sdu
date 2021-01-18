import React,{Component} from 'react';
import {Button} from 'antd';
import './mscIndex.css';
import '../login/loginPage'
import  LoginPage  from '../login/loginPage';
import {connect} from "react-redux"

import FindUs from '../everyConstructor/eachPart/findUs/findUs';
import FirstPage from '../everyConstructor/eachPart/firstPage/firstPage';
class MscIndex_part extends Component{
    constructor(props){
        super();
        this.state={
                    visible1:1,
                    visible2:0,
                    visible3:0,
                    visible4:0,
                    visible5:0,
                    color1:"black",
                    color2:"black",
                    color3:"black",
                    color4:"black",
                    color5:"black",
                    colorFont1 : "white",
                    colorFont2 : "white",
                    colorFont3 : "white",
                    colorFont4 : "white",
                    colorFont5 : "white"

        }
    }
    changeIndex = (choise) =>{
        switch(choise){
            case 1:
                this.setState({
                    visible1:1,
                    visible2:0,
                    visible3:0,
                    visible4:0,
                    visible5:0,
                    color1:"white",
                    color2:"black",
                    color3:"black",
                    color4:"black",
                    color5:"black",
                    colorFont1 : "black",
                    colorFont2 : "white",
                    colorFont3 : "white",
                    colorFont4 : "white",
                    colorFont5 : "white"

                });
                break;
            case 2:this.setState({
                    visible1:0,
                    visible2:1,
                    visible3:0,
                    visible4:0,
                    visible5:0,
                    color1:"black",
                    color2:"white",
                    color3:"black",
                    color4:"black",
                    color5:"black",
                    colorFont1 : "white",
                    colorFont2 : "black",
                    colorFont3 : "white",
                    colorFont4 : "white",
                    colorFont5 : "white"
                });
                break;
            case 3:this.setState({
                    visible1:0,
                    visible2:0,
                    visible3:1,
                    visible4:0,
                    visible5:0,
                    color1:"black",
                    color2:"black",
                    color3:"white",
                    color4:"black",
                    color5:"black",
                    colorFont1 : "white",
                    colorFont2 : "white",
                    colorFont3 : "black",
                    colorFont4 : "white",
                    colorFont5 : "white"

                });
                break;
            case 4:this.setState({
                    visible1:0,
                    visible2:0,
                    visible3:0,
                    visible4:1,
                    visible5:0,
                    color1:"black",
                    color2:"black",
                    color3:"black",
                    color4:"white",
                    color5:"black",
                    colorFont1 : "white",
                    colorFont2 : "white",
                    colorFont3 : "white",
                    colorFont4 : "black",
                    colorFont5 : "white"

            }) ;
            break;
            case 5:this.setState({
                    visible1:0,
                    visible2:0,
                    visible3:0,
                    visible4:0,
                    visible5:1,
                    color1:"black",
                    color2:"black",
                    color3:"black",
                    color4:"black",
                    color5:"white",
                    colorFont1 : "white",
                    colorFont2 : "white",
                    colorFont3 : "white",
                    colorFont4 : "white",
                    colorFont5 : "black"
            });
            break;

        }
    }
    render(){
        return (
        <div>
            <div >

                <div className='headMscIndex'>
                    <div id='headText'>
                        <text>
                            山东大学MSC俱乐部
                        </text>
                    </div>
                    <Button className='headButton' onClick={()=>{this.changeIndex(1);}} style={{backgroundColor:`${this.state.color1}`,color:`${this.state.colorFont1}`}}>
                        首页 
                    </Button>
                    <Button className='headButton' onClick={()=>{this.changeIndex(2);}} style={{backgroundColor:`${this.state.color2}`,color:`${this.state.colorFont2}`}}>
                        开发部门
                    </Button>
                    <Button className='headButton' onClick={()=>{this.changeIndex(3)}} style={{backgroundColor:`${this.state.color3}`,color:`${this.state.colorFont3}`}}>
                        学术推文
                    </Button>
                    <Button className='headButton' onClick={()=>{this.changeIndex(4)}} style={{backgroundColor:`${this.state.color4}`,color:`${this.state.colorFont4}`}}>
                        技术分享 
                    </Button>
                    <Button className='headButton' onClick={()=>{this.changeIndex(5)}} style={{backgroundColor:`${this.state.color5}`,color:`${this.state.colorFont5}`}}>
                        联系我们
                    </Button>
                </div>
                <div>
                    {this.state.visible1 == 1 ? <FirstPage/> : null}
                    {this.state.visible2 == 1 ? <LoginPage/>  : null}
                    {this.state.visible3 == 1 ? <LoginPage/> : null}
                    {this.state.visible4 == 1 ? <LoginPage/> : null}
                    {this.state.visible5 == 1 ? <FindUs/> : null}
                </div>
            </div>

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

   const MscIndex = connect
    (
        mapStateToProps,
        mapDispatchToProps
    )(MscIndex_part);
export default MscIndex;