import React from "react";
import {Link} from "react-router-dom"

class Header extends React.Component {
    render(){
        return (
        <header>       
        <nav class = "user_pages">
          <Link to = "/" class = "link_user_pages"> 
            <i class='bx bx-left-arrow-circle'></i>
            <b>User Pages</b>
            " - Profile  
        </Link>
      </nav>
        <nav class = "statistics_invoices_shedule">
          <ul class = "header_navigate">
            <li>
              <a href = "" class = "link_statistics">
                <i class='bx bx-signal-5'></i>
                <p>
                  Statistics
                </p>
              </a> 
            </li>
            <li>
              <a href = "" class = "link_invoices">
                <i class='bx bx-calculator'></i>
                <p>
                  Invoices
                </p>
              </a> 
            </li>
            <li>
              <a href = "" class = "link_schedule">
                <i class='bx bx-align-justify'></i>           
                <p>
                  Shedule
                </p>
              </a> 
            </li>
          </ul>
        </nav>

    </header>
        )
    }

}

export default Header