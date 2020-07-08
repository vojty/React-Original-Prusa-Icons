import { Col, Container, Row } from 'react-bootstrap'
import React, { ComponentType, Suspense } from 'react'

import { files as Favicons } from './lib/favicons.json'
import Icon from './interfaces/Icon'
import { Link } from 'react-router-dom'
import Spinner from './components/helpers/spinner'
import styled from 'styled-components'

const IconContainer = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    border-right: solid 1px #f5f5f5;
    border-bottom: solid 1px #f5f5f5;
    overflow: hidden;

    &:hover {
        background-color: #fa6831;
        color: white;
        cursor: pointer;
    }

    svg {
        width: 64px;
        height: 64px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 2rem;
        display: block;
    }

    span {
        font-family: 'Atlas Grotesk Light';
        display: block;
        text-align: center;
        text-transform: uppercase;
        font-size: 0.8rem;
        color: black;
        width: 100%;
        padding: 1rem;
    }
`

const CapitalizeToSpace = (text: string): string => text
    .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
    .replace(/([A-Z])/g, ([letter]) => ` ${letter.toLowerCase()}`)

function IconsBrowser() {
    return (
        <Container fluid>
            <h1>Favicons</h1>
            <Row>
                <Suspense fallback={<Spinner />}>
                    {Favicons.filter(favicon => !!favicon.file).map((favicon, i) => {

                        const FaviconCompoment = React.lazy<ComponentType<Icon>>(() => import(`./lib/favicons/${favicon.file.replace('.tsx', '')}`))

                        return (
                            <Col md={2}>
                                <IconContainer>
                                    <Link to={`/icon/${favicon.file.replace('.tsx', '')}/favicons`}>
                                        <FaviconCompoment width={64} height={64} />
                                        <span>{CapitalizeToSpace(favicon.file.replace('.tsx', ''))}</span>
                                    </Link>
                                </IconContainer>
                            </Col>
                        )
                    })}
                </Suspense>
            </Row>
        </Container>
    )
}

export default IconsBrowser
