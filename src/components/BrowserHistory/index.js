import {Component} from 'react'
import BrowserSearch from '../BrowserSearch'
import './index.css'

class BrowserHistory extends Component {
  state = {searchInput: ''}

  getSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props
    const searchResults = initialHistoryList.filter(eachList =>
      eachList.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <nav className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            alt="app logo"
            className="app-logo"
          />
          <div className="search-container">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>

            <input
              type="search"
              className="search"
              placeholder="Search history"
              onChange={this.getSearchInput}
            />
          </div>
        </nav>
        <p>There is no history to show</p>
        <div className="container">
          <ul className="lists-container">
            {searchResults.map(eachList => (
              <BrowserSearch detailsList={eachList} key={eachList.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
