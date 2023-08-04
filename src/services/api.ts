import axios from 'axios';

const apiKey = process.env.GITHUB_API_KEY || '';

const apiGithub = axios.create({
	baseURL: 'https://api.github.com',
	headers: {
		Authorization: apiKey ? `Bearer ${apiKey}` : '',
	},
});

export default apiGithub;
