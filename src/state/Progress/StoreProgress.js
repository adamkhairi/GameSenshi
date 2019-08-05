import { Container } from 'unstated'
import { STATE, SET_STATE, RESET_STATE } from 'state/constants'

const STORE_PROGRESS_STATE_VALUE = 'value'
const STORE_PROGRESS_STATE_COLOR = 'color'
const STORE_PROGRESS_STATE_IS_OPEN = 'isOpen'

const STORE_PROGRESS_SHOW = 'show'
const STORE_PROGRESS_CLOSE = 'close'

const DEFAULT_COLOR = 'primary'
const DEFAULT_VALUE = '0'

const defaultValues = {
	[STORE_PROGRESS_STATE_VALUE]: DEFAULT_VALUE,
	[STORE_PROGRESS_STATE_IS_OPEN]: false,
	[STORE_PROGRESS_STATE_COLOR]: DEFAULT_COLOR,
}

class StoreProgress extends Container {
	constructor() {
		super()
		this[STATE] = defaultValues
		this[SET_STATE] = this[SET_STATE].bind(this)
	}

	[RESET_STATE] = () => {
		this.setState(defaultValues)
		return this
	};

	[STORE_PROGRESS_SHOW] = (value = DEFAULT_VALUE, color = DEFAULT_COLOR) => {
		this.setState({
			[STORE_PROGRESS_STATE_IS_OPEN]: true,
			[STORE_PROGRESS_STATE_COLOR]: color,
			[STORE_PROGRESS_STATE_VALUE]: value,
		})
		return this
	};

	[STORE_PROGRESS_CLOSE] = () => {
		this.setState(defaultValues)
		return this
	}
}

export {
	StoreProgress,
	STORE_PROGRESS_STATE_VALUE,
	STORE_PROGRESS_STATE_COLOR,
	STORE_PROGRESS_STATE_IS_OPEN,
	STORE_PROGRESS_SHOW,
	STORE_PROGRESS_CLOSE,
	STATE,
	SET_STATE,
	RESET_STATE,
}