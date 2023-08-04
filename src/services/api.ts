import axios from 'axios';

const apiGithub = axios.create({
	baseURL: 'https://api.github.com',
	headers: {
		Authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
	},
});

export default apiGithub;
