import { Button, ButtonGroup, Form } from 'react-bootstrap'
import { DefaultSize, DefaultTheme, DefaultWithBackground, DefaultWithPadding, Folder, Folders, Sizes, Tags, Theme } from './config'
import React, { ComponentType, Suspense, useRef, useState } from 'react'

import Icon from './interfaces/Icon'
import JSZip from 'jszip'
import Pace from 'react-pace-progress'
import Tag from './components/helpers/tag'
import bg from './img/bg.png'
import download from 'downloadjs'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const DetailContainer = styled.div`
    margin: 4rem auto;
    text-align: center;
`

const IconContainer = styled.div`
    height: 256px;
    width: 256px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
    background-image: url(${bg});
    background-position: center center;
    background-size: 16px 16px;

    svg {
        margin: auto;
    }
`

const H1 = styled.h1`
    font-family: 'Atlas Grotesk Thin';
`

const H2 = styled.h2`
    font-family: 'Atlas Grotesk Black';
    font-size: 0.9rem;
    text-transform: uppercase;
    margin-top: 1rem;
`

const IconDetail: React.FC<{}> = () => {

    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [tags, setTags] = useState<Tags>([])

    const [width, setWidth] = useState<number>(DefaultSize)
    const [height, setHeight] = useState<number>(DefaultSize)

    const [size, setSize] = useState<number>(DefaultSize)

    const [withBackground, setWithBackground] = useState<boolean>(DefaultWithBackground)
    const [withPadding, setWithPadding] = useState<boolean>(DefaultWithPadding)
    const [theme, setTheme] = useState<Theme>(DefaultTheme)

    const { folder, componentName } = useParams()
    const IconCompoment = React.lazy<ComponentType<Icon>>(() => import(`./lib${folder ? ('/' + folder) : ''}/${componentName}`).then(component => {

        setName(component.default.defaultProps.name)
        setDescription(component.default.defaultProps.description)
        setTags(component.default.defaultProps.tags)

        return component
    }))

    const iconRef = useRef<HTMLDivElement>(null)

    const withBackgroundChange = (e: React.FormEvent<HTMLInputElement>) => {
        setWithBackground(e.currentTarget.checked)
        setWithPadding(e.currentTarget.checked)
    }

    const withPaddingChange = (e: React.FormEvent<HTMLInputElement>) => {
        setWithPadding(e.currentTarget.checked)
    }

    const setLightTheme = () => {
        setTheme(Theme.LIGHT)
    }

    const setDarkTheme = () => {
        setTheme(Theme.DARK)
    }

    const setWhiteTheme = () => {
        setTheme(Theme.WHITE)
    }

    const setBlackTheme = () => {
        setTheme(Theme.BLACK)
    }

    const setGrayscaleTheme = () => {
        setTheme(Theme.GRAYSCALE)
    }

    const setMonochromeTheme = () => {
        setTheme(Theme.MONOCHROME)
    }

    const downloadZip = () => {
        console.log('downloadZip')
        const zip = new JSZip()

        const blob = new Blob([iconRef.current.innerHTML], { type: 'image/svg+xml;charset=utf-8' })

        const URL = window.URL || window.webkitURL
        const blobURL = URL.createObjectURL(blob)

        const image = new Image()
        image.src = blobURL
        image.onload = () => {
            const canvas = document.createElement('canvas')
            canvas.width = width
            canvas.height = height

            const context = canvas.getContext('2d')
            context.drawImage(image, 0, 0, width, height)

            const png = canvas.toDataURL('image/png', 1)
            const baseStringPng = getBase64String(png)
            zip.file(CapitalizeToDash(componentName) + '-' + size + 'px.png', baseStringPng, { base64: true })

            zip.file(CapitalizeToDash(componentName) + '.svg', blob)

            zip.generateAsync({ type: "blob" })
                .then(function (content) {
                    download(content, CapitalizeToDash(componentName) + '.zip', 'application/zip')
                })
        }
    }

    const getBase64String = (dataURL) => {
        var idx = dataURL.indexOf('base64,') + 'base64,'.length
        return dataURL.substring(idx)
    }

    const downloadSvg = () => {
        console.log('downloadSvg')
        download(iconRef.current.innerHTML, CapitalizeToDash(componentName) + '.svg', 'image/svg+xml')
    }

    const downloadPng = () => {
        console.log('downloadPng')

        const blob = new Blob([iconRef.current.innerHTML], { type: 'image/svg+xml;charset=utf-8' })

        const URL = window.URL || window.webkitURL
        const blobURL = URL.createObjectURL(blob)

        const image = new Image()
        image.src = blobURL
        image.onload = () => {
            const canvas = document.createElement('canvas')
            canvas.width = width
            canvas.height = height

            const context = canvas.getContext('2d')
            context.drawImage(image, 0, 0, width, height)

            download(canvas.toDataURL('image/png', 1), CapitalizeToDash(componentName) + '-' + size + 'px.png', 'image/png')
        }
    }

    const CapitalizeToDash = (text: string): string => text
        .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
        .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`)

    const setDimensions = (size: number): void => {
        setWidth(size)
        setHeight(size)
        setSize(size)
    }

    const isInFolder = (folders: Folders): boolean => {
        return folders.includes(folder)
    }

    return (
        <DetailContainer>
            <H1>{name}</H1>
            <div>{description}</div>
            <div>
                {tags.map((tag, i) => {
                    return (
                        <Tag key={i} title={tag} />
                    )
                })}
            </div>
            <Suspense fallback={<Pace />}>
                <IconContainer ref={iconRef}>
                    <IconCompoment width={width} height={height} withBackground={withBackground} withPadding={withPadding} theme={theme} />
                </IconContainer>

                <H2>Theme</H2>
                <Form>
                    <Form.Group controlId="thm">
                        {isInFolder([Folder.ICONS, Folder.FAVICONS]) &&
                            <Form.Check checked={theme === Theme.LIGHT} onChange={setLightTheme} custom inline label="light" type="radio" id="light" />}
                        {isInFolder([Folder.ICONS, Folder.FAVICONS]) &&
                            <Form.Check checked={theme === Theme.DARK} onChange={setDarkTheme} custom inline label="dark" type="radio" id="dark" />}
                        {isInFolder([Folder.ICONS]) &&
                            <Form.Check checked={theme === Theme.WHITE} onChange={setWhiteTheme} custom inline label="white" type="radio" id="white" />}
                        {isInFolder([Folder.ICONS]) &&
                            <Form.Check checked={theme === Theme.BLACK} onChange={setBlackTheme} custom inline label="black" type="radio" id="black" />}
                        {isInFolder([Folder.ICONS, Folder.FAVICONS]) &&
                            <Form.Check checked={theme === Theme.GRAYSCALE} onChange={setGrayscaleTheme} custom inline label="grayscale" type="radio" id="grayscale" />}
                        {isInFolder([Folder.FAVICONS]) &&
                            <Form.Check checked={theme === Theme.MONOCHROME} onChange={setMonochromeTheme} custom inline label="monochrome" type="radio" id="monochrome" />}
                    </Form.Group>
                </Form>

                <H2>
                    <Form.Group controlId="withBackground">
                        <Form.Label>Background</Form.Label>
                        <Form.Check checked={withBackground} onChange={withBackgroundChange} label={withBackground ? 'on' : 'off'} type="switch" />
                    </Form.Group>
                </H2>

                <H2>
                    <Form.Group controlId="withPadding">
                        <Form.Label>Padding</Form.Label>
                        <Form.Check checked={withPadding} onChange={withPaddingChange} label={withPadding ? 'on' : 'off'} type="switch" />
                    </Form.Group>
                </H2>

                <H2>Size</H2>

                <Form>
                    <ButtonGroup size="sm">
                        {Sizes.map((item, i) => {
                            return (
                                <Button key={i} variant={(size === item) ? 'dark' : 'outline-dark'} onClick={() => setDimensions(item)}>{item.toString()}</Button>
                            )
                        })}
                    </ButtonGroup>
                </Form>

                <H2>Download</H2>

                <ButtonGroup size="sm">
                    <Button onClick={() => downloadSvg()} variant="outline-dark">svg</Button>
                    <Button onClick={() => downloadPng()} variant="outline-dark">png</Button>
                    <Button onClick={() => downloadZip()} variant="outline-dark">zip</Button>
                </ButtonGroup>
            </Suspense>
        </DetailContainer>
    )
}

export default IconDetail
