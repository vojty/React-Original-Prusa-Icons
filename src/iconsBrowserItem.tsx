import { Color, Folder, Theme } from './config'
import React, { ComponentType, Suspense } from 'react'

import { Col } from 'react-bootstrap'
import Icon from './interfaces/Icon'
import { Link } from 'react-router-dom'
import Spinner from './components/helpers/spinner'
import styled from 'styled-components'

const IconContainer = styled.div`
    display: block;
    width: 100%;
    color: #fff;
    border-right: solid 1px #e0e0e0;
    border-bottom: solid 1px #e0e0e0;
    overflow: hidden;

    &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }

    &:hover {
        background-color: #f5f5f5;
        color: white;
        cursor: pointer;
    }

    .link {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    
    svg {
        width: 48px;
        height: 48px;
        margin-left: auto;
        margin-right: auto;
        margin-top: calc(50% - 32px);
        display: block;
    }

    span {
        font-family: 'Atlas Grotesk Light';
        display: block;
        text-align: center;
        text-transform: uppercase;
        font-size: 0.7rem;
        color: black;
        width: 100%;
        padding: 1rem;
        line-height: 0.9rem;
    }
`

interface IProps {
    files: any,
    folder: Folder,
}
    
const IconsBrowserItem: React.FC<IProps> = (props) => {
    return (

        <Suspense fallback={<Spinner />}>
            {props.files.filter(item => !!item.file).map((item: any, i: number) => {

                const Compoment = React.lazy<ComponentType<Icon>>(() => import(`./lib/${props.folder}/${item.file.replace('.tsx', '')}`))

                return (
                    <Col md={1} key={i}>
                        <IconContainer>
                            <Link className="link" to={`/icon/${item.file.replace('.tsx', '')}/${props.folder}`}>
                                <Compoment width={48} height={48} backgroundColor={Color.TRANSPARENT} theme={Theme.CUSTOM} />
                                <span>{item.name}</span>
                            </Link>
                        </IconContainer>
                    </Col>
                )
            })}

        </Suspense>
    )
}

export default IconsBrowserItem