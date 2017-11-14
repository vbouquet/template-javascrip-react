import React                from 'react';
import ReactDOM             from 'react-dom';
import Form                 from './Form.jsx';

// const Title = <h1> Mon premier formulaire avec React! </h1>;

class App extends React.Component {
  render () {
      const title = "Ma première application avec React!";
      return (
        <div className="component-app">
          <h1> {title} </h1>
          <Form />
        </div>
      )
  }
}

export default App;