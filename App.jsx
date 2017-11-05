import React from 'react';

class App extends React.Component {
  render() {
    return (<div>
      <Header/>
      <Content/>
      <Apicall/>
    </div>);
  }
}

class Header extends React.Component {
  render() {
    return (<div>
      <h1>Header</h1>
    </div>);
  }
}

class Content extends React.Component {
  render() {
    return (<div>
      <h2>Content</h2>
      <p>The content text!!!</p>
    </div>);
  }
}

class Apicall extends React.Component {
  render() {
    return (<div>
      <button onClick={() => GetCar()}>Get!</button>
    </div>);
  }
}

function GetCar() {
  var url = "http://localhost:9090/jeyni-service/rest/car";
  // result.json() create a promise
  fetch(url).then(result => result.json().then(function(response) {
    console.log(response);
  }))
}

export default App;
