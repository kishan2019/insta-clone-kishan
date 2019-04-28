import React, {Component} from 'react'
import './Header.css'

export class Header extends Component {
  render() {
    return (
      <div className="main">
        <div className="com">
          <div>
            <img
              src='http://rebobinart.com/wp-content/uploads/2018/02/instagram-png-instagram-icon-1600.png'
              width="50px"
              alt='logo'/>
              </div>
          <div className="Insta-font">
            Instagram
          </div>
        </div>
        <div>
          <input type='text' placeholder='&#128270; Search...'></input>
        </div>
        <div></div>
        <div className="icons">
          <div><i class="material-icons" >my_location</i></div>
          <div><i class="material-icons">favorite_border</i></div>
          <div><i class="material-icons">person_outl2ne</i></div>
        </div>
      </div>
    )
  }
}
export default Header