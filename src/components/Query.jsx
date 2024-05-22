import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import denominations from "./../data/series";
import Select from 'react-select';
import { useBanknoteData } from '../services/Context';

const Query = () => {
	const { banknoteData, updateBanknoteData } = useBanknoteData();

	const { t } = useTranslation();
	const [ denom, setDenom ] = useState(banknoteData.denomination);
	const [ serie, setSerie ] = useState(banknoteData.serie);

	const handleChangeDenomination = (value) => {
		setDenom(value);
		setSerie({
			label: value.series[0],
			value: value.series[0],
		});
	};
	const handleChangeSerie = (serie) => {
		setSerie(serie);
	};

	const handleSubmit = () => {
		updateBanknoteData({
			denomination: denom,
			serie: serie
		});
	}

	return (
		<section className="query">
			<h2 className="query__title">{t("query.label")}</h2>
			<form className="query__form" onSubmit={e => {e.preventDefault(); handleSubmit();}}>
				<div className="query__form-inputs">
					<label className="query__form-label">
						{t("query.value")}:
						<Select
							className="query__input-select"
							options={denominations}
							value={denom}
							onChange={handleChangeDenomination}
							isSearchable={false}
						/>
					</label>
					<label className="query__form-label">
						{t("query.series")}:
						<Select
							className="query__input-select"
							options={denom.series.map(data => ({label: data, value: data}))}
							value={serie}
							onChange={handleChangeSerie}
							isSearchable={false}
						/>
					</label>
				</div>
				<button
					type="submit"
					className="button--primary"
				>{t("query.submit")}</button>
			</form>
		</section>
	);
}

export default Query;
