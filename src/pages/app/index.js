import React, { Component } from 'react'
import BasicRoute from 'routes'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
// import update from 'immutability-helper'
import 'antd/dist/antd.css'
import './index.css'

class App extends Component {
  state = {
  } 

  render() {
    return (
      <div className="app-container">
        <BasicRoute />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
