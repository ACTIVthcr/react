import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <Content/>
            <Apicall/>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}

class Apicall extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.GetCar()}>Get!</button>
      </div>
    )
  }
}

function GetCar() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:9090/jeyni-service/rest/car", false);
  xhttp.send();
  var response = JSON.parse(xhttp.responseText);
  alert(response);

}

export default App;
