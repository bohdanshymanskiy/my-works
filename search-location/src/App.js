import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import Loader from './components/Loader';

function App() {
  let [loading, setLoading] = useState(false);
  let [location, setLocation] = useState({});

  function addLocation(title) {
    setLocation({});
    setLoading(true);
    fetch(`https://ipapi.co/${title}/json/`)
      .then(response => response.json())
      .then(location => {
        setTimeout(() => {
          setLocation(location)
          setLoading(false)
        }, 2000)
      });
  }

  return (
    <div className='wrapper'>
      <Header />
      <Form onCreate={addLocation} />
      {loading && <Loader />}
      {Object.keys(location).length ?
        location.error ? <div className='error-text'>Something went wrong 😞. Please try again.</div> :
          <List location={location} /> :
        loading ? null :
          <p className='search-text'>Enter IP and press “Search” to get geolocation data</p>
      }
    </div >
  );
}

export default App;
