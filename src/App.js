import React from 'react';

import FilterForm from './components/FilterForm/FilterForm'
import AddForm from './components/AddForm/AddForm'
import List from './components/List/List';

function App() {
  return (
    <>
      <FilterForm/>
      <AddForm />
      <List/>
    </>
  )
}

export default App;