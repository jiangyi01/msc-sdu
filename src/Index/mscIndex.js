import React,{Component} from 'react';
import {Button} from 'antd';
import './mscIndex.css';
class MscIndex extends Component{
    constructor(props){
        super();
        this.state={
            value:null
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
                    <Button className='headButton' onClick={()=>{
                        this.setState({
                            value:1
                        })
                    }}>
                        介绍
                    </Button>
                    <Button className='headButton'>
                        介绍
                    </Button>
                    <Button className='headButton'>
                        介绍
                    </Button>
                    <Button className='headButton'>
                        介绍
                    </Button>
                    <Button className='headButton'>
                        介绍
                    </Button>
                </div>
            </div>
            

            </div>
        )
    }
} 
export default MscIndex;