import React, { Component } from 'react';
import logo from './logo.svg';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import ObjectId from 'bson-objectid'
import { CalendarWrapper } from './CalendarWrapper';
import { get_days_in_month, remove_date } from './utils'
import { insert_date } from './utils'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.year = moment().year()
    this.month = 1
    this.day = moment().date()
    this.state = {
      year: this.year,
      month: this.month,
      day: this.day,
      eventsList: [],
      inputValue: ""
    }
    this.initEvents = this.initEvents.bind(this)
    this.updateEvents = this.updateEvents.bind(this)
    this.onDayClick = this.onSelecting.bind(this)
    this.incrementMonth = this.incrementMonth.bind(this)
    this.decrementMonth = this.decrementMonth.bind(this)
    this.getNow = this.getNow.bind(this)
    this.inputKeyDownHandler = this.inputKeyDownHandler.bind(this)
    this.inputKeyPressHandler = this.inputKeyPressHandler.bind(this)
  }

  componentWillMount() {
    this.initEvents()
  }

  initEvents() {
    Promise.all(get_days_in_month(this.state.year, this.state.month + 1)).then(dates => {
      const eventsList = dates.map(date => {
        if (date.data === "None") {
          return null
        }
        return {
          start: `${date.data.year}-${date.data.month}-${date.data.day}`,
          end: `${date.data.year}-${date.data.month}-${date.data.day}`,
          title: date.data.name,
        }
      })
      this.onSelecting = this.onSelecting.bind(this)
      this.setState({
        eventsList: eventsList
      })
    })
  }

  updateEvents() {
    let eventsList = this.state.eventsList
    if (this.state.inputValue === "") {
      eventsList = eventsList.map(event => {
        if (event !== null && event.start === `${this.state.year}-${this.state.month + 1}-${this.state.day}`) {
          return null
        }
        return event
      })

    }
    else {
      eventsList[this.state.day + 1] = {
        start: `${this.state.year}-${this.state.month + 1}-${this.state.day}`,
        end: `${this.state.year}-${this.state.month + 1}-${this.state.day}`,
        title: this.state.inputValue,
      }
    }
    this.setState({ eventsList: eventsList })
  }

  onSelecting(data) {
    let date = moment(data.start)
    let day = date.date()
    let year = date.year()
    let month = date.month()
    this.setState({
      day,
      year,
      month
    })
  }

  inputKeyDownHandler(event) {
    if (event.key === "Backspace") {
      if (this.state.inputValue.length > 0) {
        this.setState({
          inputValue: this.state.inputValue.substring(0, this.state.inputValue.length - 1)
        })
      }
    }
  }

  inputKeyPressHandler(event) {
    if (event.key !== "Enter") {
      this.setState({
        inputValue: this.state.inputValue + event.key
      })
    }
    else {
      if (this.state.inputValue !== "") {
        insert_date({
          day: this.state.day,
          month: this.state.month + 1,
          year: this.state.year,
          name: this.state.inputValue
        }).then(this.updateEvents)
      }
      else {
        remove_date({
          day: this.state.day,
          month: this.state.month + 1,
          year: this.state.year
        }).then(this.updateEvents)
      }
    }
  }


  incrementMonth() {
    if (this.state.month !== 11) {
      this.setState({
        month: this.state.month + 1,
      }, this.initEvents)
    }
    else {
      this.setState({
        month: 0,
        year: this.state.year + 1,
      }, this.initEvents)
    }
    document.querySelectorAll('button').forEach(button => {
      if (button.innerHTML === "Next") {
        button.click()
      }
    })
  }

  decrementMonth() {
    if (this.state.month === 0 && this.state.year === 2020) {
    }
    else {
      if (this.state.month !== 0) {
        this.setState({
          month: this.state.month - 1,
        }, this.initEvents)
      }
      else {
        this.setState({
          month: 11,
          year: this.state.year - 1,
        }, this.initEvents)
      }
      document.querySelectorAll('button').forEach(button => {
        if (button.innerHTML === "Back") {
          button.click()
        }
      })
    }
  }

  getNow() {
    return new Date(this.state.year, this.state.month, this.state.day)
  }

  render() {
    return (
      <div className="App">
        <div className="inputWrapper">
          <div className="instructionalText">
            <div>Click on a Cell to select a date</div>
            <div>Type in the text area to Enter a Name</div>
            <div>Press Enter in the text area to Submit Name</div>
            <div>Press Enter with no text Entered to delete Name"</div>
          </div>
          <textarea value={this.state.inputValue} style={{ width: "25%", height: "50px" }} onKeyDown={this.inputKeyDownHandler} onKeyPress={this.inputKeyPressHandler}></textarea>
          <div className="MonthSwitcher">
            <div className="increment button" onClick={this.incrementMonth}>+</div>
            <div>{moment(`${this.state.month === 12 ? 1 : this.state.month + 1}-${this.state.year}`, "MM-YYYY").format("MMMM")} {this.state.year}</div>
            <div className="decrement button" onClick={this.decrementMonth}>-</div>
          </div>
        </div>
        <CalendarWrapper eventsList={this.state.eventsList} month={this.state.month - 1} year={this.state.year} getNow={this.getNow} onSelecting={this.onSelecting} />
      </div >
    )
  }
}

