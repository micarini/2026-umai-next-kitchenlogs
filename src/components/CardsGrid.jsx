import Card from "@/components/Cards";

const CardsGrid = ({ items = [] }) => {
	return (
		<section className="grid auto-rows-fr grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			{items.map(({ id, name, image, time, level }) => (
				<Card
					key={id}
					id={id}
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
