import React, { Component } from 'react';
import photo from './eng.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="container">
          <div>
            <div id="header">
              <h1 style={{ color: 'white'}}>Frida Casas</h1>
            </div>
            <div>
              <a style={{ color: 'white'}} href='https://github.com/free2580' target="_blank">Github  </a>|
              <a style={{ color: 'white'}} href='https://medium.com/@fridakahsas' target="_blank"> Medium  </a>|
              <a style={{ color: 'white'}} href='https://docs.google.com/presentation/d/e/2PACX-1vSfK_UMLxC6aSAwKG9UO1GSsQtWUBeflzc_4M9rXArLV_d4cMHnFIxeqb15LMrHTe5acvc17mEGDPuK/pub?start=false&loop=false&delayms=3000' target="_blank"> Resume</a>

            </div>
            <img id="photo" src={photo} />
            <div id="bio">
              <p style={{ color: 'white'}}>Hello. My name is Frida Casas. I am a passionate and driven full stack web developer
              currently residing in New York City.</p><p style={{ color: 'white'}}>I have a little less than a year's worth of experience
                on Ruby on Rails, Javascript, React, Redux, HTML and CSS. I come from a a variety of backgrounds including physics,
                psychology, music theory and mixology, which have given me a well-rounded experience on how to tackle problem-solving,
              event-management, and the continous drive to learn; a necessary attribute for software engineers.</p>
                <p style={{ color: 'white'}}> In my experience teaching music, I learned syntax and linguistic pattern recognition. This
                skill translated into code beautifully, facilitating debugging and allowing me to problem-solve in a timely manner.</p>

                <p style={{ color: 'white'}}> After being introduced to the world of computer programming by some classmates during my
                  physics studies, I quickly found the focus and tennacity to make this shift in my career. This realization led me to
                  apply to one of NYC's finest web development bootcamps, where I quickly picked up a wide range of skills which have empowered
                  me to be able to create modern, dynamic web applications. I am determined to forever improve my programming skills, and aim to
                  excel in any project or contribution I participate in. Becoming a web developer has been the easiest and best decision for
                me- a sentiment anyone I get the pleasure of working with will surely note.</p>
              </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
