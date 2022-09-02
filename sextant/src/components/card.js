import React, {Component} from 'react'
import './card.css'

// function Card(props) {
//   return (
//     <div className='card-container'>
//         <h2 className="card-title">{props.title}</h2>
//                 <div className="card-text">
//                     {props.children}
//                 </div>
//     </div>
//   )
// }

class Card extends Component {
  render() {
      return (
          <div className="card-container">
              <h2 className="card-title">{this.props.name}</h2>
              <div className="card-text">
                  {this.props.children}
              </div>
          </div>
      );
  }
}

export default Card