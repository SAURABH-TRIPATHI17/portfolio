import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";

class App extends Component{
  state = {displayMore:false};  
  toggleDispay = () => {
    this.setState({displayMore:!this.state.displayMore});
  }

  render(){
    return(
    <div>
      
      <pre>Hello worlds
           <br/>See my code

      </pre>
      {
      this.state.displayMore?(
      <div>
        <p>this is hidden</p>
      <button  onClick={this.toggleDispay}>Read Less</button>
      </div>
      ) : ( 
        <div>
        <button onClick={this.toggleDispay} >Read More</button> 
        </div>
        )
      }
      <hr/>
      <Projects />
      <hr />
      <SocialProfiles />
    </div>
    )
  }
}
export default App;