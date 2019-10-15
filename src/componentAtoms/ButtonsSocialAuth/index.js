import React from 'react'
import {
	ButtonsSocialAuth,
	ID,
	ICON,
	COLOR,
	TOOLTIP,
} from './ButtonsSocialAuth'
import { buttonSocialAuthOnClicks } from './utils'
// routing
import { withLastLocation } from 'routes'

const buttons = [
	{
		[ID]: 'google',
		[ICON]: 'fab fa-google',
		[COLOR]: 'google',
		[TOOLTIP]: 'Sign in with Google!',
	},
	{
		[ID]: 'facebook',
		[ICON]: 'fab fa-facebook-square',
		[COLOR]: 'facebook',
		[TOOLTIP]: 'Sign in with Facebook!',
	},
]

const ButtonsSocialAuthPropedDefault = withLastLocation(props => {
	const { lastLocation, ...restProps } = props
	return (
		<ButtonsSocialAuth
			onClicks={buttonSocialAuthOnClicks(lastLocation)}
			buttons={buttons}
			{...restProps}
		/>
	)
})

export { ButtonsSocialAuth, ButtonsSocialAuthPropedDefault }
