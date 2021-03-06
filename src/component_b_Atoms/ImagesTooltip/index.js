import React, { useMemo } from 'react'
import { ImagesTooltip } from './ImagesTooltip'
import { getImagesTooltip } from './utils'
import styles from './styles.module.css'

const ImagesTooltipOptioned = props => {
	const { icons, ...otherProps } = props
	const icons_ = useMemo(() => getImagesTooltip(icons), [icons])
	return (
		<ImagesTooltip className={styles.games} icons={icons_} {...otherProps} />
	)
}

const ImagesTooltipPropedTabs = props => {
	return <ImagesTooltipOptioned className={styles.iconTab} {...props} />
}

export { ImagesTooltipOptioned, ImagesTooltip, ImagesTooltipPropedTabs }
