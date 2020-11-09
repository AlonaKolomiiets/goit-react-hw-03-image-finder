import React, { Component } from "react";
import styles from "./App.module.css";
import Button from "./Button/Button";
import Searchbar from "./Searchbar/Searchbar";
import request from "./API/API";

class App extends Component {
  state = {
    image: [],
    query: "",
    page: 1,
  };
  handleOnSubmit = (query) => {
    this.setState({
      query,
      page: 1,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;

    if (page !== prevState.page || query !== prevState.query) {
      const result = await request(query, page);

      this.setState({
        image: result.data.hits,
      });
      console.log(result.data.hits);
    }
    //     try {
    //        await request(query, page);
    //        this.setState({
    //         users: result.items,
    //         loader: false,
    //       });
    //     } catch (error) {
    //       this.setState({
    //         error: true,
    //         loader: false,
    //       });
    //     }
    //   }
    //       }
  }
  render() {
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleOnSubmit} />
        <div className={styles.buttonWrapp}>
          <Button />
        </div>
      </div>
    );
  }
}

export default App;
