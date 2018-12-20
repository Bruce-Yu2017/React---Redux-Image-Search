import React from 'react'
import { connect } from 'react-redux';
import { onChangeSearchValue, receiveImage } from '../actions';
import axios from 'axios';

class SearchBar extends React.Component {

  submitForm = (event) => {
    event.preventDefault();
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: this.props.onchangeVal },
      headers: {
        Authorization: 'Client-ID 113120c18449d0ccd9f12224d676e3bc12966f55f346504a96291e9fabc11e0b'
      }
    }).then((res) => {
        this.props.receiveImage(res.data);
    })
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.submitForm}>
          <div className='field'>
            <label>Bruce's React & Redux Image Search</label>
            <input 
              onChange={(event) => { 
                this.props.onChangeSearchValue(event.target.value) 
              }}  
              value={this.props.onchangeVal}
            />

          </div>
        </form>
        
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

export default connect(mapStateToProps, { onChangeSearchValue, receiveImage })(SearchBar);
