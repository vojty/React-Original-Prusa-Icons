import { Badge, Button, ButtonGroup, Form } from 'react-bootstrap'
import { DefaultColorMode, DefaultSize, Sizes, Tags } from './config'
import React, { ComponentType, Suspense, useEffect, useRef, useState } from 'react'

import Icon from './interfaces/Icon'
import JSZip from 'jszip'
import Spinner from './components/helpers/spinner'
import download from 'downloadjs'
import { useParams } from 'react-router-dom'

const IconDetail: React.FC<{}> = (props) => {

    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [tags, setTags] = useState<Tags>([])

    const [width, setWidth] = useState<number>(DefaultSize)
    const [height, setHeight] = useState<number>(DefaultSize)

    const [colorMode, setColorMode] = useState<number>(DefaultColorMode) // eslint-disable-line

    const [size, setSize] = useState<number>(DefaultSize)

    const { folder, componentName } = useParams()
    const IconCompoment = React.lazy<ComponentType<Icon>>(() => import(`./lib${folder ? ('/' + folder) : ''}/${componentName}`))

    const iconRef = useRef<HTMLDivElement>(null)

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

    useEffect(() => {
        setName(IconCompoment._result.defaultProps.name)
        setDescription(IconCompoment._result.defaultProps.description)
        setTags(IconCompoment._result.defaultProps.tags)
    }, [IconCompoment]) // eslint-disable-line

    return (
        <div>
            <h1>Icon</h1>
            <div>{name}</div>
            <div>{description}</div>
            <div>
                {tags.map((tag, i) => {
                    return (
                        <Badge key={i}>{tag}</Badge>
                    )
                })}
            </div>
            <Suspense fallback={<Spinner />}>
                <div ref={iconRef}>
                    <IconCompoment width={width} height={height} />
                </div>
                <Button onClick={() => downloadSvg()}>svg</Button>
                <Button onClick={() => downloadPng()}>png</Button>
                <Button onClick={() => downloadZip()}>zip</Button>
            </Suspense>

            <Form>
                <ButtonGroup size="sm">
                    {Sizes.map((item, i) => {
                        return (
                            <Button key={i} variant={(size === item) ? 'dark' : 'outline-dark'} onClick={() => setDimensions(item)}>{item.toString()}</Button>
                        )
                    })}
                </ButtonGroup>
            </Form>
            <span></span>

        </div>
    )
}

export default IconDetail