import React from 'react'
import { stopUndefined } from 'utils'
//components
import { Exports } from 'component_c_Molecules'

const { FinalInputText } = stopUndefined(Exports)

const FINAL_TEXT_NAME = 'name'

const FinalTextName = props => {
	const { ...restProps } = props
	return (
		<FinalInputText
			name={FINAL_TEXT_NAME}
			autoComplete={FINAL_TEXT_NAME}
			placeholder='Display Name'
			icon='tim-icons icon-single-02'
			{...restProps}
		/>
	)
}

export { FinalTextName, FINAL_TEXT_NAME }
