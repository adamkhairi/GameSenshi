import React from 'react'
import classNames from 'classnames'
import { UncontrolledTooltip } from 'reactstrap'

const IconGames = props => {
	const { games } = props

	return games.map((game, i) => {
		const id = game + 'icon'
		return (
			<>
				<img
					src={require(`assets/icons/games/${game}.ico`)}
					style={{ width: '48px', height: '48px' }}
					alt={game}
					id={id}
					className={classNames({ 'mr-2': i !== games.length - 1 })}
				/>
				<UncontrolledTooltip delay={0} target={id}>
					{game}
				</UncontrolledTooltip>
			</>
		)
	})
}

export { IconGames }
