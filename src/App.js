import React from 'react';
import Modal from './components/Modal';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isModalVisable: false,
    };

    this.handleModalAction = this.handleModalAction.bind(this);
  }

  handleModalAction(id, action) {
    if(action === 'CONFIRM') {
      // TODO: continue on whatever task
    }

    this.setState({
      isModalVisable: false,
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={ () => this.setState({ isModalVisable: true }) }>SHOW MODAL</button>
        {
          this.state.isModalVisable ? (
              <Modal
                id="myFirstModal"
                handleAction={ this.handleModalAction }
              />
          )
          :
          ''
        }
      </div>
    );
  }
}

export default App;
