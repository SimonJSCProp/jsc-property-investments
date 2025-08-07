export default function dynLocation() {
	const instances = document.querySelectorAll('.dyn-location')
	const params = new URLSearchParams(window.location.search)
	const location = params.get('utm_campaign')

	if (instances && location) {
		instances.forEach((i) => {
			i.textContent = location.replace('kk_', '')
		})
	}
}
