import Card from "@/components/Cards";

const CardsGrid = ({ items = [] }) => {
	return (
		<section className="cards-grid">
			{items.map(({ name, image, time, level }, index) => (
				<Card
					key={index}
					name={name}
					image={image}
					time={time}
					level={level}
				/>
			))}
		</section>
	);
};

export default CardsGrid;
