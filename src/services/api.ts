import axios from 'axios';

const apiGithub = axios.create({
	baseURL: 'https://api.github.com',
	headers: {
		Authorization: 'Bearer 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',
	},
});

export default apiGithub;
