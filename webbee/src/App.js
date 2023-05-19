import React from "react";
import Header from "./components/Header";
import SecondHeader from "./components/SecondHeader";
import Body from "./components/Body";

class App extends React.Component {

    render(){
        return (<div className='name'>
        <Header />
        <SecondHeader />
        <main>
            <div class= "container">
                <Body />
            </div>
        </main>

    </div>)
    }
}

export default App