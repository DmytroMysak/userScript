
const alwaysFixHeader = () => {
	const header = document.getElementById('bluebarRoot');

	const style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = '.custom-fixed-class-for-header { position: fixed !important;}';
	document.getElementsByTagName('head')[0].appendChild(style);

	header.firstChild.classList.add('custom-fixed-class-for-header');
};

export default {
	alwaysFixHeader
};
