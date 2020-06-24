import {
  OriginalPrusaIconsFavicon,
  PrusaConnectFavicon
} from './lib'

import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  svg {
        margin: 10px;
  }
`

function App() {

  return (
    <Div>
      <h1>Icons</h1>
      <Link to={`/icon/${PrusaConnectFavicon.defaultProps.componentName}/${PrusaConnectFavicon.defaultProps.folder}`}>
        <PrusaConnectFavicon />
      </Link>
      
      <Link to={`/icon/${OriginalPrusaIconsFavicon.defaultProps.componentName}/${OriginalPrusaIconsFavicon.defaultProps.folder}`}>
        <OriginalPrusaIconsFavicon />
      </Link>
    </Div>
  )
}

export default App
