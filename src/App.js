import React, { Component } from 'react';
import Gantt from './component/Gantt';
import './App.css';
import { SAMPLE_LARGE_NUMBER_OF_DATA_SET } from './data-dynamic'

class App extends Component {
  render() {
    return (
      <div>
        <div className="gantt-container">
          <Gantt tasks={SAMPLE_LARGE_NUMBER_OF_DATA_SET} />
        </div>
      </div>
    );
  }
}
export default App;