import React from "react";
import { useBanknoteData } from '../services/Context';

const Samples = () => {
	const { banknoteData } = useBanknoteData();

	const frontSrc = banknoteData.banknoteFeatures.front;
	const backSrc = banknoteData.banknoteFeatures.back;
	const value = banknoteData.banknoteFeatures.value;
	const series = banknoteData.banknoteFeatures.series;

	if (!frontSrc) {
		return null;
	}
	const front = {
		src: `images/${frontSrc}`,
		alt: `front of ${value} series ${series} note`
	};
	const back = {
		src: `images/${backSrc}`,
		alt: `back of ${value} series ${series} note`
	};

	return (
		<section className="samples">
			<div className="samples__content">
				<img
					className="samples__image"
					src={front.src}
					alt={front.alt}
					width={600}
					height={258}
				/>
				<img
					className="samples__image"
					src={back.src}
					alt={back.alt}
					width={600}
					height={258}
				/>
			</div>
		</section>
	);
}

export default Samples;
