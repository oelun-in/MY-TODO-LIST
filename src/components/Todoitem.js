import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { red } from 'color-name';

export class Todoitem extends Component {
    getStyle=()=>{
        
        return{

            background:'lightgrey' ,
            padding:'10px'  , 
            border: '10px' ,  
            borderBottom: '1px #ccc dotted'   ,
                textDecoration:this.props.todo.completed?'line-through':'none'
    }


    
}
    
    
    
     render() {
         const{id,title}=this.props.todo
        return (
            <div style= {this.getStyle() }>
            
                <p>
                <input type='checkbox' onChange={this.props.markComplete.bind(this,id)}/> {' '}
                {title}
                <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle} className="naso">x</button>
                </p>
            </div>
        )
    }
}
Todoitem.propTypes= 
{
todo:propTypes.object.isRequired,
markComplete:propTypes.func.isRequired,
delTodo:propTypes.func.isRequired
}
const btnStyle ={
    background:'red',
    color: 'white',
    border:'none',
    padding:'5px 9px',
    borderRadius:'50%',
    cursor:'pointer',
    float: 'right' 
    

}


export default Todoitem

