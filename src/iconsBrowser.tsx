import { Container, Row } from 'react-bootstrap'

import { files as Favicons } from './lib/favicons.json'
import { Folder } from './config'
import IconBrowserItem from './iconsBrowserItem'
import { files as Icons } from './lib/icons.json'
import React from 'react'
import styled from 'styled-components'

const IconsContainer = styled(Container)`
    padding-left: 0;
    padding-right: 0;
    border-top: solid 1px #e0e0e0;
`

const IconsBrowser: React.FC<{}> = () => {
    return (
        <IconsContainer fluid>
            <Row noGutters={true}>
                <IconBrowserItem files={Icons} folder={Folder.ICONS} />
                <IconBrowserItem files={Favicons} folder={Folder.FAVICONS} />
            </Row>
        </IconsContainer>
    )
}

export default IconsBrowser
