import React, { ChangeEventHandler, ChangeEvent } from "react";

interface appPropsI {}

interface appStateI {
  newItem: string;
  items: string[];
}
class App extends React.Component<appPropsI, appStateI> {
  constructor(props: appPropsI) {
    super(props);
    this.state = {
      newItem: "",
      items: []
    };
  }

  updateInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let val = e.target.value;
    this.setState({ newItem: val });
    console.log(this.state.newItem);
  };

  createNewTask = (e: ChangeEvent<any>) => {
    e.preventDefault();
    let theList = [...this.state.items, this.state.newItem];
    this.setState({
      items: theList,
      newItem: ""
    });
  };

  renderList = (): JSX.Element[] => {
    return this.state.items.map((val, idx) => {
      return (
        <li key={idx}>
          {val} <button onClick={() => this.deleteItem(val)}>x</button>{" "}
        </li>
      );
    });
    console.log("the items", this.state.items);
  };

  deleteItem = (item: string) => {
    let filtered = this.state.items.filter(todo => todo != item);
    this.setState({
      items: filtered
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">Todo App </header>
        <div>
          <form action="">
            <h3>add an item...</h3>
            <label htmlFor="newItem">task</label>
            <input
              type="text"
              name="newItem"
              placeholder="todo"
              value={this.state.newItem}
              onChange={this.updateInput}
            />
            <button onClick={e => this.createNewTask(e)}>add task</button>
          </form>
          <h3>do these</h3>
          <ul>{this.renderList()}</ul>
        </div>
      </div>
    );
  }
}

export default App;
