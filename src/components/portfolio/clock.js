import React, { Component } from "react";
import moment from "moment";
import 'moment/locale/es';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: moment().locale('es').format('dddd, D [de] MMMM YYYY, H:mm:ss') // ← corregido
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        currentTime: moment().locale('es').format('dddd, D [de] MMMM YYYY, H:mm:ss')
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>{this.state.currentTime}</div>;
  }
}

