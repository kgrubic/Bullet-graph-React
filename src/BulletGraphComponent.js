import React, { Component } from 'react';
import './App.css';
import DrawBuletGraph from './DrawBuletGraph.js';

export class BulletGraph extends Component {

  componentDidMount() {
      this.updateCanvas();
  }
  componentDidUpdate() {
      this.updateCanvas();
  }
  updateCanvas() {
      const ctx = this.refs.canvas.getContext('2d');
      var x1,y1;
      if(this.props.buletgraph.getPosition() === 'v'){
        x1=45;
        y1=50;
      }
      if(this.props.buletgraph.getPosition() === 'h'){
        x1=110;
        y1=20;
      }

      DrawBuletGraph({ctx, x: x1, y: y1, buletgraph : this.props.buletgraph})
  }
  render() {
      if(this.props.buletgraph.getPosition() === 'v')
        return (
           <canvas ref="canvas" width={110} height={400} />
       );
      else 
       return (
           <canvas ref="canvas" width={480} height={80} className="horizontal-bg"/>
       );
  }
}

export default BulletGraph;
