import {
  OriginalPrusaConnectFavicon,
  OriginalPrusaIconsFavicon
} from './lib'

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
      <OriginalPrusaConnectFavicon />
      <OriginalPrusaIconsFavicon />
    </Div>
  )
}

export default App
