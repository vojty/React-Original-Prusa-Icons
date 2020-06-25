import React, { ComponentType, Suspense } from 'react'

import { files as Favicons } from './lib/favicons.json'
import Icon from './interfaces/Icon'
import { Link } from 'react-router-dom'
import Spinner from './components/helpers/spinner'
import styled from 'styled-components'

const Div = styled.div`
  svg {
        margin: 10px;
  }
`

function App() {
  return (
    <Div>
      <h1>Favicons</h1>
      <Suspense fallback={<Spinner />}>
        {Favicons.filter(favicon => !!favicon.file).map((favicon, i) => {

          const FaviconCompoment = React.lazy<ComponentType<Icon>>(() => import(`./lib/favicons/${favicon.file.replace('.tsx', '')}`))
          return (
            <Link key={i} to={`/icon/${favicon.file.replace('.tsx', '')}/favicons`}>
              <FaviconCompoment />
            </Link>
          )
        })}
      </Suspense>
    </Div>
  )
}

export default App
