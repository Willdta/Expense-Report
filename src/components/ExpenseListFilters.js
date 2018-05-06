import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filterActions'

class ExpenseListFilters extends Component {
  state = {
    focused: null
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }

  render() {
    const { filters, dispatch } = this.props

    return (
      <div>
        <input
          type="text"
          value={filters.text}
          onChange={e => dispatch(setTextFilter(e.target.value))}
        />

        <select
          value={filters.sortBy}
          onChange={e => {
            if (e.target.value === 'date') {
              dispatch(sortByDate())
            } else if (e.target.value === 'amount') {
              dispatch(sortByAmount())
            }
          }}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <DateRangePicker
          startDate={filters.startDate}
          endDate={filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focused}
          onFocusChange={focused => this.setState({ focused })}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ filters }) => {
  return { filters }
}

export default connect(mapStateToProps)(ExpenseListFilters)