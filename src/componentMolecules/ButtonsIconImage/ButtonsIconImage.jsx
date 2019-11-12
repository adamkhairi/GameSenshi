import React from 'react'
import { Button, Label, Row, Col } from 'reactstrap'

import { Exports } from 'componentAtoms'
import { stopUndefined } from 'utils'
const { IconsImage } = stopUndefined(Exports)

const BUTTONS_ICON_IMAGE_ID = 'id'
const BUTTONS_ICON_IMAGE_TEXT = 'text'
const BUTTONS_ICON_IMAGE_ICON = 'icon'

const ButtonsIconImage = props => {
	const { buttons, iconAs } = props
	return (
		<Row>
			{buttons.map(button => {
				const {
					[BUTTONS_ICON_IMAGE_ID]: id,
					[BUTTONS_ICON_IMAGE_TEXT]: text,
					[BUTTONS_ICON_IMAGE_ICON]: icon,
				} = button

				const IconAs = iconAs || IconsImage

				return (
					<Col key={id}>
						<Row className='justify-content-center'>
							<Button className='btn-simple' color='reddit'>
								<IconAs icons={icon} />
							</Button>
						</Row>
						<Row className='justify-content-center'>
							<Label>{text}</Label>
						</Row>
					</Col>
				)
			})}
		</Row>
	)
}

export {
	ButtonsIconImage,
	BUTTONS_ICON_IMAGE_ID,
	BUTTONS_ICON_IMAGE_TEXT,
	BUTTONS_ICON_IMAGE_ICON,
}