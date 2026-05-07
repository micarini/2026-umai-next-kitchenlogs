import Card from "@/components/Cards";

const CardsGrid = ({ items = [] }) => {
	return (
		<section className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
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
