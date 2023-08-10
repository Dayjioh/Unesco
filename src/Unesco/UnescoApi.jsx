const UNESCO_COUNTRY = async () => {
	const data = new Request("https://restcountries.com/v2/all");

	const request = await fetch(data);

	const response = await request.json();

	return response;
};

const UNESCO_DATA = async () => {
	const data = new Request("src/assets/whc-sites-2021.json");

	const request = await fetch(data);

	const response = await request.json();

	return response;
};

export { UNESCO_DATA, UNESCO_COUNTRY };
