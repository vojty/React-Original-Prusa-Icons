import { Hex, HexGrid, HexIn, HexLink } from './IconsHexBrowserStyles'
import React, { ComponentType, Suspense } from 'react'

import { files as Favicons } from './lib/favicons.json'
import Icon from './interfaces/Icon'
import Spinner from './components/helpers/spinner'

const CapitalizeToSpace = (text: string): string => text
	.replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
	.replace(/([A-Z])/g, ([letter]) => ` ${letter.toLowerCase()}`)

function IconsHexBrowser() {
	return (
		<>
			<h1>Favicons</h1>
			<HexGrid>
				<Suspense fallback={<Spinner />}>
					{Favicons.filter(favicon => !!favicon.file).map((favicon, i) => {

						const FaviconCompoment = React.lazy<ComponentType<Icon>>(() => import(`./lib/favicons/${favicon.file.replace('.tsx', '')}`))

						return (
							<Hex key={i}>
								<HexIn>
									<HexLink to={`/icon/${favicon.file.replace('.tsx', '')}/favicons`}>
										<FaviconCompoment width={64} height={64} />
										<span>{CapitalizeToSpace(favicon.file.replace('.tsx', ''))}</span>
									</HexLink>
								</HexIn>
							</Hex>
						)
					})}
				</Suspense>
			</HexGrid>
		</>
	)
}

export default IconsHexBrowser
