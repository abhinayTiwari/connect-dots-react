import React, { Component } from "react";
import Dot from "./Dot.js";

export default class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: parseInt(this.props.rows),
      coloredRows: [],
      lastColoredIndex: null,
      prevFilledColor: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  init() {
    const rows = this.state.rows;
    const initalColoredRows = Array(rows).fill("white");
    this.setState({ coloredRows: initalColoredRows });
  }

  componentDidMount() {
    this.init();
  }

  getNextUpdateColorIndex() {
    if (!this.state.prevFilledColor) {
      this.setState({ lastColoredIndex: this.state.coloredRows.length - 1 });
      return this.state.coloredRows.length - 1;
    } else {
      const nextIndex = this.state.lastColoredIndex - 1;
      this.setState({ lastColoredIndex: nextIndex });
      return this.state.lastColoredIndex - 1;
    }
  }

  handleClick() {
    if (this.state.lastColoredIndex < 0) return;
    const coloredRows = this.state.coloredRows;
    const prevFilledColor = this.state.prevFilledColor;
    const nextIndex = this.getNextUpdateColorIndex();
    const newColoredRows = coloredRows.map((row, i) => {
      if (i === nextIndex) {
        if (prevFilledColor === "red") {
          this.setState({ prevFilledColor: "yellow" });
          return "yellow";
        } else {
          this.setState({ prevFilledColor: "red" });
          return "red";
        }
      }
      return row;
    });
    this.setState({
      coloredRows: newColoredRows
    });
  }

  render() {
    const rows = this.state.coloredRows;
    const rowsComponent = rows.map((row, i) => <Dot key={i} color={rows[i]} />);
    return (
      <div className="column" onClick={this.handleClick}>
        {rowsComponent}
      </div>
    );
  }
}
