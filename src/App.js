import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const InitialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    userDetailsList: InitialUserDetailsList,
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteUser = uniqueNo => {
    console.log('Deleted User', uniqueNo)
    const {userDetailsList} = this.state
    const filteredList = userDetailsList.filter(
      deleteItem => deleteItem.uniqueNo !== uniqueNo,
    )
    this.setState({userDetailsList: filteredList})
  }

  render() {
    const {searchInput, userDetailsList} = this.state
    console.log(searchInput)

    const searchResults = userDetailsList.filter(eachItem =>
      eachItem.name.includes(searchInput),
    )

    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input type="search" value={searchInput} onChange={this.onSearch} />
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              deleteUser={this.deleteUser}
              key={eachUser.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
