import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './example.scss';
import Datepicker from './Datepicker';

class DatepickerStore extends Component {
  constructor(props) {
    super(props);
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    this.state = {
      value: `${month}/${year}`,
      showPopover: true,
      month,
      year,
    };
    this.onSelect = this.onSelect.bind(this);
    this.monthChange = this.monthChange.bind(this);
    this.incYear = this.incYear.bind(this);
    this.decYear = this.decYear.bind(this);
  }

  onSelect() {
    this.setState({ showPopover: !this.state.showPopover });
  }

  monthChange(e) {
    const month = parseInt(e.target.getAttribute('data-month'), 10);
    this.setState({
      month,
      value: `${month}/${this.state.year}`,
    });
  }

  incYear() {
    const year = this.state.year + 1;
    this.setState({
      year,
      value: `${this.state.month}/${year}`,
    });
  }

  decYear() {
    const year = this.state.year - 1;
    this.setState({
      year,
      value: `${this.state.month}/${year}`,
    });
  }

  render() {
    return (
      <div>
        <Datepicker
          showPopover={this.state.showPopover}
          value={this.state.value}
          onSelect={this.onSelect}
          monthChange={this.monthChange}
          incYear={this.incYear}
          decYear={this.decYear}
          month={this.state.month}
          year={this.state.year}
        />
        <h1>Datepicker hovers over me</h1>
        <pre>{JSON.stringify(this.state, null, 4)}</pre>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<DatepickerStore />, app);
