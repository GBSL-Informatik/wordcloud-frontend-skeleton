import React from "react";
import "./styles.css";
import Wordcloud from "./components/Wordcloud";
import WordForm from "./components/WordForm";
import Eventlog from "./components/Eventlog";

export const API_URL = "http://localhost:4001";

/**
 * either use 'http' or 'socket'
 */
export const PROTOCOL = 'http';

export default class App extends React.Component {
  state = {
    words: []
  };

  componentDidMount() {
    switch (PROTOCOL) {
      case 'http':
        this.loadWords();
        break;
      case 'socket':
        break;
      default:
        return;
    }
  }

  addWord = word => {
    if (word.word.length <= 1 || word.word.length > 16) {
      return;
    }
    switch (PROTOCOL) {
      case 'http':
        break;
      case 'socket':
        break;
      default:
        return;
    }
  };

  loadWords() {
    // load words with http
  }


  render() {
    return (
      <div className="App">
        <h1>Wordcloud {PROTOCOL.toUpperCase()}
          {
            /* only show the refresh button when http-protocol is used */
            PROTOCOL === 'http' &&
            <button title="Refresh" onClick={() => this.loadWords()}>↻</button>
          }
        </h1>
        <Wordcloud words={this.state.words} />
        <WordForm addWord={this.addWord} />
        <Eventlog words={this.state.words} />
      </div>
    );
  }
}
