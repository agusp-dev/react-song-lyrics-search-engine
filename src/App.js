import React, { Fragment, useState, useEffect } from 'react'
import { Form } from './components'

function App() {

  const [data, searchData] = useState({})
  useEffect(() => {
    console.log('searching...', data)
  }, [data])

  return (
    <Fragment>
      <Form 
        searchData={ searchData }/>
    </Fragment>
  )
}

export default App;
