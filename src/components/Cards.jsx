'use client'

import { FiClock } from 'react-icons/fi';
import { GiFire } from 'react-icons/gi';

const Card = ({ name, image, time = "35 MIN", level = "EASY" }) => {
	return (
		<article className="card">
			<div className="card-media">
				{image ? (
					<img
						src={image}
						alt={name}
						className="card-image"
						loading="lazy" /* mejora el rendimiento inicial al cargar la pagina ya que las imagenes solo cargan cuando se despliegan */
					/>
				) : (
					<div className="card-fallback">
						KitchenLogs
					</div>
				)}
			</div>

			<div className="card-content">
				<div className="card-meta">
					<span className="card-chip">
						<FiClock className="card-icon" aria-hidden="true" />
						{time}
					</span>
					<span className="card-chip">
						<GiFire className="card-icon" aria-hidden="true" />
						{level}
					</span>
				</div>

				<h3 className="card-title">
					{name}
				</h3>
			</div>
		</article>
	);
};

export default Card;
