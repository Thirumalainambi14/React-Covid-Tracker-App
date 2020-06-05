import React from "react";
import { Cards, Charts, CountryPicker } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "Not added" };
  }
  async componentDidMount() {
    const fetechedData = await fetchData();
    // console.log(fetechedData);
    this.setState({ data: fetechedData });
  }

  render() {
    const { confirmed, recovered, deaths, lastUpdate } = this.state.data;

    return (
      <div className={styles.container}>
        <Cards data={{ confirmed, recovered, deaths, lastUpdate }} />
        <Charts />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
