import { useState, useEffect } from "react";
import { UNESCO_DATA, UNESCO_COUNTRY } from "./UnescoApi";

const Unesco = () => {
	const [unescoNoFilter, setUnescoNoFilter] = useState([]);
	const [unescoFilter, setUnescoFilter] = useState([]);
	const [unescoCountry, setUnescoCountry] = useState([]);

	useEffect(() => {
		UNESCO_DATA().then((data) => {
			setUnescoFilter(data);
			setUnescoNoFilter(data);
		});
		UNESCO_COUNTRY().then((data) => setUnescoCountry(data));
	}, []);

	const handleChange = (e) => {
		setUnescoFilter(unescoNoFilter);
		const value = e.target.value;
		const filterData = unescoNoFilter.filter(
			(data) => data.states_name_fr.includes(value),
		);
		value === null
			? setUnescoFilter(unescoNoFilter)
			: setUnescoFilter(filterData);
	};

	return (
		<>
			<select onChange={handleChange} id="country-select">
				<option value="" />
				{unescoCountry.map((elt, index) => (
					<option key={index} value={elt.translations.fr}>
						{elt.translations.fr}
					</option>
				))}
			</select>
			{unescoFilter.length > 0 ? (
				<>
					{unescoFilter.map((elt,index) => {
						return <p key={index}>{elt.name_fr}</p>;
					})}
				</>
			) : (
				<p>Aucun résultat</p>
			)}
		</>
	);
};

export default Unesco;
