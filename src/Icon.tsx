import React, { Suspense, useRef, useState } from 'react'

import JSZip from 'jszip'
import Spinner from './components/helpers/spinner'
import download from 'downloadjs'
import { useParams } from 'react-router-dom'

const Icon: React.FC<{}> = (props) => {
    const [width, setWidth] = useState<number>(64)
    const [height, setHeight] = useState<number>(64)

    const { folder, componentName } = useParams()
    const IconCompoment = React.lazy(() => import(`./lib${folder ? ('/' + folder) : ''}/${componentName}`))

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
            zip.file(CapitalizeToDash(componentName) + '.png', baseStringPng, { base64: true })

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

            download(canvas.toDataURL('image/png', 1), CapitalizeToDash(componentName) + '.png', 'image/png')
        }

    }

    const CapitalizeToDash = (text: string): string => text
        .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
        .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`)

    return (
        <div>
            <h1>Icon</h1>
            <Suspense fallback={<Spinner />}>
                <div ref={iconRef}>
                    <IconCompoment width={width} height={height} />
                </div>
                <button onClick={() => downloadSvg()}>svg</button>
                <button onClick={() => downloadPng()}>png</button>
                <button onClick={() => downloadZip()}>zip</button>
            </Suspense>
        </div>
    )
}

export default Icon