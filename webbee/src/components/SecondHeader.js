import React from 'react'
import {Link} from 'react-router-dom'

class SecondHeader extends React.Component {
  render() {
    return (
      <nav class='nav_second_header'>
        <div class='resume_map_timer'>
          <ul class='nav_navigate_left'>
            <li>
              <Link to='/' class='link_resume'>
                <i class='bx bx-menu'></i>
                Resume
              </Link>
            </li>
            <li>
              <Link to='/map' class='link_map'>
                <i class='bx bx-map-alt'></i>
                Map
              </Link>
            </li>
            <li>
              <Link to='/timer' class='link_timer'>
                <i class='bx bx-time'></i>
                Timer
              </Link>
            </li>
          </ul>
        </div>
        <div class='notes_friends_photos_settings'>
          <ul class='nav_navigate_right'>
            <li>
              <a href='' class='link_notes'>
                <i class='bx bx-detail'></i>
                Notes
              </a>
            </li>
            <li>
              <a href='' class='link_friends'>
                <i class='bx bx-group'></i>
                Friends
              </a>
            </li>
            <li>
              <a href='' class='link_photos'>
                <i class='bx bx-images'></i>
                Images
              </a>
            </li>
            <li>
              <a href='' class='link_settings'>
                <i class='bx bx-cog'></i>
                <i class='bx bx-chevron-down'></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default SecondHeader
