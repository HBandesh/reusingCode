import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { Header } from './components/header/headerComponent';
import { Footer } from './components/footer/footerComponent';
import MainComponent from './components/mainContent/mainBodyComponent';
import "./global.css";
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <main>
          <Header></Header>
          <MainComponent></MainComponent>
          <Footer></Footer>
        </main>
    )
  }
}

export default hot(App);
