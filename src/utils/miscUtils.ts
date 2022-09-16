import APP_CONFIG from '../config/app-config.json';

export const addToArray = (value: any, list: any) => {
	if (list instanceof Array) {
		let presentIndex = list.indexOf(value);
		if (presentIndex === -1) {
			list.push(value);
		}
		return list;
	}
	return
};

export const removeItemFromArray = (item: any, array: any) => {
	if (array instanceof Array) {
		let itemsArray = [...array];
		let index = itemsArray.indexOf(item);
		if (index > -1) {
			itemsArray.splice(index, 1);
		}
		return itemsArray;
	}
	return
};

export const getClientAppURL = () => {
	const { preferred_app: preferredApp } = localStorage.getItem('selectedClient')
		? JSON.parse(localStorage.getItem('selectedClient') || '{}')
		: '';
	let hostUrl = window.location.host.split('.')[0];
	 if (hostUrl === 'localhost:3000'){
		let { landing_page_url: landingPageURL } = localStorage.getItem('selectedClient')
		? JSON.parse(localStorage.getItem('selectedClient') || '{}')
		: '';
		
		hostUrl = localStorage.getItem('selectedClient') ? landingPageURL?.split('.')[0]: 'pio';
	 }
	const baseURL = 'https://' + hostUrl + '-' +
		preferredApp.substring(0, 3) + '-' +
		APP_CONFIG.AWS_API_GATEWAY_CONFIG.API_URL;
	return baseURL;
};

export const getPolarisCommonURL = () => {
	const baseURL = 'https://pio-com-' + APP_CONFIG.AWS_API_GATEWAY_CONFIG.API_URL;
	return baseURL;
};

export const getClientCommonURL = () => {
	let hostUrl = window.location.host.split('.')[0];
	if (hostUrl === 'localhost:3000'){
		let { landing_page_url: landingPageURL } = localStorage.getItem('selectedClient')
		? JSON.parse(localStorage.getItem('selectedClient') || '{}')
		: '';

		hostUrl = localStorage.getItem('selectedClient') ? landingPageURL?.split('.')[0]: 'pio';
	}
	const baseURL = 'https://' + hostUrl + '-com-' +
		APP_CONFIG.AWS_API_GATEWAY_CONFIG.API_URL;
	return baseURL;
};

export const getClientCommonURLForClientList = () => {
  const { landing_page_url: landingPageURL } = localStorage.getItem('selectedClient')
  ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
  : '';

  const hostUrl = localStorage.getItem('selectedClient') ? landingPageURL?.split('.')[0]: 'pio';
  const baseURL = 'https://' + hostUrl + '-com-' +
		APP_CONFIG.AWS_API_GATEWAY_CONFIG.API_URL;
	return baseURL;
};

export const getClientRedirectURL = () => {
	let hostUrl = window.location.host.split('.')[0];
	let { landing_page_url: landingPageURL } = localStorage.getItem('selectedClient')
		? JSON.parse(localStorage.getItem('selectedClient') || '{}')
		: '';
	if (hostUrl === 'localhost:3000'){
		landingPageURL = 'localhost:3000/account-view';
	}
	return landingPageURL
};

export const ifPolarisInstance = () => {
	if (window.location.host.split('.')[0] === 'pio' || window.location.host.split('.')[0] === 'localhost:3000') {
		return true;
	}
	return false;
};

export const getURLProtocol = () => {
	const protocol = window.location.host.split('.')[0] === 'localhost:3000'? 'http://': 'https://';
	return protocol;
}

export const isObjectEmpty = ( obj:Object ) => ( Object.keys(obj).length === 0 && obj.constructor === Object );

export const getDefaultTemplate = (templateList: any) => {
	return templateList.find((obj: any) => obj.is_default === true).template_id;
}

export const isClientSelected = () => {
  if (localStorage.getItem("selectedClient") === null) {
    return false;
  }
  return true;
}

export const convertCommaSeparatedStrToInt = (string: string) => {
  return parseInt(string.replace(',', ''));
}