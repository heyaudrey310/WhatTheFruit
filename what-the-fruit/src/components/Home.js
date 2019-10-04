import React, { Component }from "react";
import App from '../index.css';
import Navbar from "./Navbar"


class Home extends React.Component {

    render() {
        return (
            < Navbar/>
        )
    }
}

// // Navbar 

// class Navbar extends React.Component {

//     constructor (props) {
//         super(props)

//         this.state = {
//             activeItem: '',
//             activeItemPosition: 0,
//             activeItemColor: '',
//             menuItems: [
//                 { text: 'Home' }, 
//                 { text: 'Take a Picture' },
//                 { text: 'Fresh List' },
//                 { text: 'About' }, 
//             ],
//         }

//         this.handleClick = this.handleClick.bind(this)
//     }

//         handleClick(activeItem) {
//             return e => {
//                 e.preventDfault() 
                
//                 this.setState({
//                     activeItem,
//                     activeItemPosition: 
//                         (document.getElementById(activeItem))
//                             .getPropertyValue('background-color'),
//                 })
//             }
//         }

//         render(){
//             const menuItems = this.state.menuItems.map
//                 // (item => <MenuItem item= {item} handleClick={this.handleClick}/>)

//                 return (
//                     <div className="navbar">
//                         <span className="menu-item-active" style={{top:
//                             this.state.activeItemPosition, backgroundColor:
//                             this.state.activeItemColor}}/> 
//                             {menuItems}
//                     </div>
//                 )
//         }

    
// }

//  // Navbar Items 
//  function menuItems(props) {
//     return (
//         <div 
//             className="menu-item"
//             id={props.item.text}
//             onClick={props.handleClick(props.item.text)}
//             >
//             {props.item.text.toUpperCase()}
//             </div>
//     )
// }

export default Home;