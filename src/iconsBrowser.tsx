import React, { ComponentType, Suspense } from 'react'

import { files as Favicons } from './lib/favicons.json'
import Icon from './interfaces/Icon'
import { Link } from 'react-router-dom'
import Spinner from './components/helpers/spinner'
import { device } from '../src/interfaces/device'
import styled from 'styled-components'

const Div = styled.div`
  svg {
        margin: 10px;
  }
`

const HexGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 95%;
    overflow: hidden;
    font-family: sans-serif;
    list-style-type: none;
    margin: calc((100% / 9)/4) auto;
    padding-right: calc((100% / 9)/2);

    @media ${device.large} {
        padding-bottom: 4.4%
    }
`

const Hex = styled.li`
    position: relative;
    outline: 1px solid transparent;

    &::after{
        content: '';
        display: block;
        padding-bottom: 86.602%;  /* =  100 / tan(60) * 1.5 */
    }

    @media ${device.large} {
        width: calc(100%/9);

        &:nth-child(n+10):nth-child(-n+18){
            left: calc(100%/18);
        }
        &:nth-child(n+28):nth-child(-n+36){
            left: calc(100%/18);
        }
    }
`

const HexIn = styled.div`
    position: absolute;
    width: 96%;
    padding-bottom: 110.851%; /* =  width / sin(60) */
    margin: 2%;
    outline: 1px solid transparent;
    -webkit-transform: rotate3d(0,0,1,-60deg) skewY(30deg);
    -ms-transform: rotate3d(0,0,1,-60deg) skewY(30deg);
    transform: rotate3d(0,0,1,-60deg) skewY(30deg);
    overflow: hidden;

    * {
        position: absolute;
        outline:1px solid transparent;
    }
`

const HexLink = styled(Link)`
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    -webkit-transform: skewY(-30deg) rotate3d(0,0,1,60deg);
    -ms-transform: skewY(-30deg) rotate3d(0,0,1,60deg);
    transform: skewY(-30deg) rotate3d(0,0,1,60deg);
    background-color: #f5f5f5;
    overflow: hidden;

    &:hover {
        background-color: #fa6831;
        color: white;
        cursor: pointer;
    }
`

function IconsBrowser() {
  return (
    <Div>
      <h1>Favicons</h1>
      <HexGrid>
        <Suspense fallback={<Spinner />}>
          {Favicons.filter(favicon => !!favicon.file).map((favicon, i) => {

            const FaviconCompoment = React.lazy<ComponentType<Icon>>(() => import(`./lib/favicons/${favicon.file.replace('.tsx', '')}`))

            return (
              <Hex key={i}>
                <HexIn>
                  <HexLink to={`/icon/${favicon.file.replace('.tsx', '')}/favicons`}>
                    <FaviconCompoment />
                  </HexLink>
                </HexIn>
              </Hex>
            )
          })}
        </Suspense>
      </HexGrid>
    </Div>
  )
}

export default IconsBrowser
