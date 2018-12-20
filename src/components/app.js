import React from 'react'

import SearchBar from './searchBar';
import ImageLists from './imagesList';
import { connect } from 'react-redux';
import { onChangeSearchValue } from '../actions';

class App extends React.Component {
  render() {
    return (
      <div className='ui container'>
        <SearchBar />

        {this.props.allImages.total > 0 && 
        <span>We got {this.props.allImages.total} images.</span>}

        {this.props.allImages.total > 0 && 
        <ImageLists images={this.props.allImages.results} />}
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    onchangeVal: state.onchangeValue,
    allImages: state.allImage
  }
}

export default connect(mapStateToProps, { onChangeSearchValue })(App);