import {
	ROUTE_TO,
	ROUTE_FROM,
	ROUTE_PATH,
	ROUTE_ACCESSIBILITY,
	ROUTE_ACCESSIBILITY_PRIVATE,
	ROUTE_ACCESSIBILITY_PUBLIC,
	ROUTE_ACCESSIBILITY_FREE,
	ROUTE_PAGE_INDEX,
	ROUTE_PAGE_HELP,
	ROUTE_PAGE_FILTER,
	ROUTE_PAGE_PROFILE,
	ROUTE_PAGE_PROFILE_ID,
	ROUTE_PAGE_SIGN_UP,
	ROUTE_PAGE_SIGN_IN,
	ROUTE_PAGE_SETTINGS,
	ROUTE_PAGE_SETTINGS_COMMON,
	ROUTE_PAGE_SETTINGS_GENERAL,
	ROUTE_PAGE_PASSWORD_RESET,
	ROUTE_PAGE_POLICY,
	ROUTE_PAGE_POLICY_COMMON,
	ROUTE_PAGE_POLICY_PRIVACY,
	ROUTE_PAGE_CHECKOUT,
	ROUTE_PAGE_CHAT,
	history,
} from 'routes/constants'

const routes = [
	{
		[ROUTE_PATH]: ROUTE_PAGE_INDEX,
		[ROUTE_ACCESSIBILITY]: ROUTE_ACCESSIBILITY_FREE,
	},
	{
		[ROUTE_PATH]: ROUTE_PAGE_PROFILE,
		[ROUTE_ACCESSIBILITY]: ROUTE_ACCESSIBILITY_PRIVATE,
	},
	{
		[ROUTE_PATH]: ROUTE_PAGE_PROFILE_ID,
		[ROUTE_ACCESSIBILITY]: ROUTE_ACCESSIBILITY_FREE,
	},
	{
		[ROUTE_PATH]: ROUTE_PAGE_FILTER,
		[ROUTE_ACCESSIBILITY]: ROUTE_ACCESSIBILITY_FREE,
	},
	{
		[ROUTE_PATH]: ROUTE_PAGE_HELP,
		[ROUTE_ACCESSIBILITY]: ROUTE_ACCESSIBILITY_FREE,
	},
	{
		[ROUTE_PATH]: ROUTE_PAGE_SETTINGS_COMMON,
		[ROUTE_ACCESSIBILITY]: ROUTE_ACCESSIBILITY_PRIVATE,
	},
	{
		[ROUTE_PATH]: ROUTE_PAGE_CHAT,
		[ROUTE_ACCESSIBILITY]: ROUTE_ACCESSIBILITY_PRIVATE,
	},
	{
		[ROUTE_PATH]: ROUTE_PAGE_POLICY_COMMON,
		[ROUTE_ACCESSIBILITY]: ROUTE_ACCESSIBILITY_FREE,
	},
	{
		[ROUTE_PATH]: ROUTE_PAGE_CHECKOUT,
		[ROUTE_ACCESSIBILITY]: ROUTE_ACCESSIBILITY_FREE,
	},
	{
		[ROUTE_PATH]: ROUTE_PAGE_SIGN_UP,
		[ROUTE_ACCESSIBILITY]: ROUTE_ACCESSIBILITY_PUBLIC,
	},
	{
		[ROUTE_PATH]: ROUTE_PAGE_SIGN_IN,
		[ROUTE_ACCESSIBILITY]: ROUTE_ACCESSIBILITY_PUBLIC,
	},
	{
		[ROUTE_PATH]: ROUTE_PAGE_PASSWORD_RESET,
		[ROUTE_ACCESSIBILITY]: ROUTE_ACCESSIBILITY_PUBLIC,
	},
]

// the order of array is very important, the lowest is the root path
const redirects = [
	{
		[ROUTE_FROM]: ROUTE_PAGE_POLICY,
		[ROUTE_TO]: ROUTE_PAGE_POLICY_PRIVACY,
	},
	{
		[ROUTE_FROM]: ROUTE_PAGE_SETTINGS,
		[ROUTE_TO]: ROUTE_PAGE_SETTINGS_GENERAL,
	},
	{
		[ROUTE_FROM]: '/',
		[ROUTE_TO]: ROUTE_PAGE_INDEX,
	},
]

const isLocationPublic = lastLocation => {
	const isCurrentLocationPublic = routes.some(route => {
		return (
			route[ROUTE_ACCESSIBILITY] === ROUTE_ACCESSIBILITY_PUBLIC &&
			route[ROUTE_PATH].toLowerCase() ===
				history.location.pathname.toLowerCase()
		)
	})
	if (isCurrentLocationPublic && lastLocation) {
		const isLastLocationPublic = routes.some(route => {
			return (
				route[ROUTE_ACCESSIBILITY] === ROUTE_ACCESSIBILITY_PUBLIC &&
				route[ROUTE_PATH].toLowerCase() === lastLocation.pathname.toLowerCase()
			)
		})
		return isLastLocationPublic ? ROUTE_PAGE_INDEX : lastLocation.pathname
	} else if (isCurrentLocationPublic && !lastLocation) {
		return ROUTE_PAGE_INDEX
	} else {
		return lastLocation.pathname
	}
}

export { routes, redirects, isLocationPublic }
