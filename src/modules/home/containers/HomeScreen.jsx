import React, { Component } from 'react'
import DebounceInput from 'react-debounce-input'
import { Grid, Input, Loader } from 'semantic-ui-react'
import { Div } from 'glamorous'
import { connect } from 'react-redux'
import SmallAvatarRow from '../../shared/components/rows/SmallAvatarRow'
import { getSearchResults, getIsLoading } from '../../../redux/reducers/search/selectors'
import { searchUsersAction } from '../../../redux/actions/searchAsyncActions'

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

  renderUser = (user) => {
    return (
      <SmallAvatarRow key={user.id} image={user.image} title={user.name}/>
    )
  }

  renderResults = () => {
    return this.props.users.map(this.renderUser)
  }

  render () {
    return (
      <Grid columns={1} centered verticalAlign="middle" stretched>
        <Grid.Column mobile={10} tablet={8} computer={8} textAlign='center' stretched verticalAlign='middle'>
          <DebounceInput
            value={this.state.searchText}
            debounceTimeout={300}
            onChange={this.handleOnChangeSearch}
            element={Input} />
          <Div>
            <Loader active={this.props.isLoading} />
            {this.renderResults()}
          </Div>
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
