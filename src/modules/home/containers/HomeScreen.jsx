import React, { Component } from 'react'
import DebounceInput from 'react-debounce-input'
import { Grid, Input } from 'semantic-ui-react'

class HomeScreen extends Component {
  state = {
    users: [],
    searchText: ''
  }

  renderResults = () => {
  }

  handleOnChangeSearch = (event) => {
    console.log(event.target.value)
    this.setState({
      searchText: event.target.value
    })
  }

  render () {
    return (
      <Grid columns={1} centered >
        <Grid.Row>
          <Grid.Column mobile={10} tablet={8} computer={8} textAlign='center' stretched verticalAlign='middle'>
            <DebounceInput
              value={this.state.searchText}
              debounceTimeout={300}
              onChange={this.handleOnChangeSearch}
              element={Input} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column mobile={10} tablet={8} computer={8}>
            {this.renderResults()}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default HomeScreen
