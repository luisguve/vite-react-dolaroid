import { useTranslation } from 'react-i18next';
import React, { useState } from "react";
import Select from 'react-select';

const languages = [
	{value: "en-US", label: "English"},
	{value: "es-ES", label: "Español"}
];

const LocaleSwitcher = (props) => {
	const { i18n } = useTranslation();

	const [currentLang, setCurrentLang] = useState(() => {
		return languages.find(lang => lang.value == props.lang);
	});

	const handleChangeLang = (lang) => {
		i18n.changeLanguage(lang.value);
		setCurrentLang(languages.find(_lang => _lang.value == lang.value));
	};

	return (
	<div className="locale-switcher container">
		<Select
			className="locale-switcher__input-select"
			options={languages}
			value={currentLang}
			onChange={handleChangeLang}
			isSearchable={false}
		/>
	</div>
	);
}

export default LocaleSwitcher;
