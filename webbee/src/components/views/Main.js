import React from "react";
import MainText from "../MainText"
import Contact from "../Contact"

class Main extends React.Component {
    render(){
        return(
        <div class = "container">
            <MainText />
            <Contact />
        </div>
        )
    }
}
export default Main