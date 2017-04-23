import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';
import axios from 'axios';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  componentWillMount(){
    let resultArr = null;
      axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
        .then(function (response) {
          resultArr = response.data.data;
            console.log(resultArr );
        })
  }

  render() {
    console.log('this.state.images ',this.state.images );
    return (
      <div>
        <ImageList/>
      </div>
    );
  }
}


Meteor.startup( () => {
  ReactDOM.render(<App />, document.querySelector('.container'));

});


// ReactDOM.render(<App />, document.querySelector('.container'));
