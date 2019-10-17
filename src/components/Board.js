import React, { Component } from "react";
import Column from "./Column";
import "../css/board.css";
export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = { columns: this.props.columns, rows: this.props.rows };
  }

  getColumns() {
    const columnsNumber = parseInt(this.state.columns);
    let columns = [];
    for (let i = 0; i < columnsNumber; i++) {
      columns = columns.concat([<Column key={i} rows={this.state.rows} />]);
    }
    return columns;
  }

  render() {
    return <div className="board">{this.getColumns()}</div>;
  }
}
