import logo from './logo.svg';
import './App.css';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import GridLayout from "react-grid-layout";
import React, { Component } from "react";

class MyFirstGrid extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 }
    ];
    return (
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        <div key="a">
          Bento Cheat Sheet
        </div>
        <div key="b">
          <div style={{ width: "100%", height: "100%" , overflow: "scroll"}} contenteditable="true">
          </div>
        </div>
        <div key="c">c</div>
      </GridLayout>
    );
  }
}

function App() {
  return MyFirstGrid;
}

export default MyFirstGrid;
