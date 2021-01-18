import React,{Component} from 'react';
import "./findUs.css";
class FindUs extends Component{
    constructor(props){
        super();
      
    }
    render(){
        return(
            <div className='outsider'>
                <div className="outside">
                    <p>邮箱：</p>
                </div>
                <div className="outside">
                    <p>qq :</p>   
                </div>
                <div className="outside">
                    <p>微信：</p>    
                </div>
                <div className="outside">
                    <p>地址：</p>    
                </div>
            </div>
        )
    }
}
export default FindUs;