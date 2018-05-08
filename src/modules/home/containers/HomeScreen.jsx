import React, { Component } from 'react'
import DebounceInput from 'react-debounce-input'
import { Grid, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getSearchResults, getIsLoading } from '../../../redux/reducers/search/selectors'
import { searchUsersAction } from '../../../redux/actions/searchAsyncActions'
import SearchResults from '../components/SearchResults'

class HomeScreen extends Component {
  state = {
    searchText: ''
  }

  renderResults = () => {
  }

  handleOnChangeSearch = (event) => {
    const searchText = event.target.value
    this.setState({
      searchText
    })
    this.props.fetchUsers(searchText)
  }

  render () {
    return (
      <Grid columns={1} centered verticalAlign="middle" stretched>
        <Grid.Column mobile={14} tablet={8} computer={8} textAlign='center' stretched verticalAlign='middle'>
          <DebounceInput
            placeholder='Busque pelo nome do usuário'
            value={this.state.searchText}
            debounceTimeout={300}
            onChange={this.handleOnChangeSearch}
            loading={this.props.isLoading}
            icon='search'
            element={Input} />
          <SearchResults results={this.props.users} isLoading={this.props.isLoading}/>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
  users: getSearchResults(state),
  isLoading: getIsLoading(state)
})

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: (searchTerm) => dispatch(searchUsersAction(searchTerm))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
