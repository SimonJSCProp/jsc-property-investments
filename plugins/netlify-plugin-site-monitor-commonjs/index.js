module.exports = {
	onPostBuild: ({ constants }) => {
		//run site monitor only on netlify server
		if (constants.IS_LOCAL) {
			return
		}

		//check if the variables needed available
		if (!process.env.REPOSITORY_URL || !process.env.URL) {
			return
		}

		//run api with bearer token to the site monitor
		try {
			fetch('https://kk-sitemonitor.netlify.app/.netlify/functions/init-tests', {
				method: 'POST',
				body: JSON.stringify({
					url: process.env.URL,
					github_url: process.env.REPOSITORY_URL
				}),
			});
		} catch (error) {
			console.log('Error: ', error.message)
		}
	},
}