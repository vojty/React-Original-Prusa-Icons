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

interface IProps {
    searchTerm: string
}

const IconsBrowser: React.FC<IProps> = (props) => {

    const filter = (files: any) => {
        if (props.searchTerm.length >= 2) {
            return files.filter(item => (
                item.name && item.name.toLowerCase().includes(props.searchTerm.toLowerCase())
            ) || (
                    item.description && item.description.toLowerCase().includes(props.searchTerm.toLowerCase())
                ) || (
                    item.tags && item.tags.includes(props.searchTerm.toUpperCase())
                )
            )
        } else {
            return files
        }
    }

    return (
        <IconsContainer fluid>
            <Row noGutters={true}>
                <IconBrowserItem files={filter(Icons)} folder={Folder.ICONS} />
                <IconBrowserItem files={filter(Favicons)} folder={Folder.FAVICONS} />
            </Row>
        </IconsContainer>
    )
}

export default IconsBrowser
