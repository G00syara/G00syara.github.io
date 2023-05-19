import React from "react";

class SecondHeader extends React.Component {
    render(){
        return (
          <nav class = "nav_second_header">
          <div class = "resume_map_timer">
            <ul class = "nav_navigate_left">
              <li>
                <a href = "/index.html" class = "link_resume">
                  <i class='bx bx-menu' ></i>
                  Resume
                </a> 
              </li>
              <li>
                <a href = "/map.html" class = "link_map">
                  <i class='bx bx-map-alt'></i>
                  Map
                </a> 
              </li>
              <li>
                <a href = "/timer.html" class = "link_timer">
                  <i class='bx bx-time'></i>
                  Timer
                </a> 
              </li>
            </ul>
          </div>
          <div class = "notes_friends_photos_settings">
            <ul class = "nav_navigate_right">
              <li>
                <a href = "" class = "link_notes">
                  <i class='bx bx-detail'></i>
                  Notes
                </a>
              </li>
              <li>
                <a href = "" class = "link_friends">
                  <i class='bx bx-group'></i>
                  Friends
                </a>
              </li>
              <li>
                <a href = "" class = "link_photos">
                  <i class='bx bx-images'></i>
                  Images
                </a>
              </li>
              <li>
                <a href = "" class = "link_settings">
                  <i class='bx bx-cog' ></i>
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