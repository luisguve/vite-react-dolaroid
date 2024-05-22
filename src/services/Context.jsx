import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import denominations from "../data/series";
import designYears from "../data/design";

const BanknoteDataContext = createContext();

const BanknoteDataProvider = ({ children }) => {
  const { t } = useTranslation();
  const [banknoteData, _setBanknoteData] = useState(() => {
    // Grab information of $20 USD note.
    const _20usd = denominations[2];
    const serie = {
      value: _20usd.series[0],
      label: _20usd.series[0]
    };
    const value = _20usd.value;
		const designYear = designYears[value][serie.label];
		const featuresKey = `usd-${value}.${designYear}`;
    const banknoteFeatures = t(featuresKey);

    return {
      serie,
      denomination: _20usd,
      featuresKey,
      banknoteFeatures
    }
  });

  useEffect(() => {
		const value = banknoteData.denomination.value;
		const serie = banknoteData.serie;
		if (!value || !serie.label) {
			return;
		}
		// Update security features language.
		const designYear = designYears[value][serie.label];
		const featuresKey = `usd-${value}.${designYear}`;
		const secFeatures = t(featuresKey);

		_setBanknoteData({
      ...banknoteData,
      featuresKey,
      banknoteFeatures: secFeatures
    });
	}, [t, banknoteData.serie, banknoteData.denomination]);

  const updateBanknoteData = (data) => {
    const { denomination, serie } = data;
    _setBanknoteData({
      ...banknoteData,
      denomination,
      serie
    });
  };

  return (
    <BanknoteDataContext.Provider value={{ banknoteData, updateBanknoteData }}>
      {children}
    </BanknoteDataContext.Provider>
  );
};

const useBanknoteData = () => {
  return useContext(BanknoteDataContext);
};

export { BanknoteDataProvider, useBanknoteData };
