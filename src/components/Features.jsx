import React from 'react';
import { useTranslation } from "react-i18next";
import { useBanknoteData } from '../services/Context';

function formatFeaturesList(features) {

	const items = features.map((f, idx) => {
		const samples = f.img.map((img, idx) => {
			const src = `images/${img}`;
			return (
				<React.Fragment key={idx}>
					<img
						alt={f.label}
						src={src}
						className="features__image"
					/>
				</React.Fragment>
			);
		});
		return (
		<li className="features__item" key={idx}>
			<div className="features__feature-content">
				<h3 className="features__feature-title">{f.label}</h3>
				<p className="features__feature-description" dangerouslySetInnerHTML={{__html: f.desc}} />
			</div>
			<div className="features__feature-samples">{samples}</div>
		</li>
		);
	});

	return (<ul className="features__list">{items}</ul>);
};

const Features = () => {
	const { t } = useTranslation();
	const { banknoteData } = useBanknoteData();

	const keyFeatures = banknoteData.banknoteFeatures.keyFeatures;
	const features = banknoteData.banknoteFeatures.features;

	if (!features && !keyFeatures) {
		return null;
	}
	return (
		<section className="features">
			{
				keyFeatures && (
					<div className="features__group">
						<h2 className="features__title">
							{t("learn.keyFeatures")}
						</h2>
						{formatFeaturesList(keyFeatures)}
					</div>
				)
			}
			{
				features && (
					<div className="features__group">
						<h2 className="features__title">
							{t("learn.features")}
						</h2>
						{formatFeaturesList(features)}
					</div>
				)
			}
		</section>
	);
};

export default Features;
