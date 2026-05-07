'use client'

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
						<svg viewBox="0 0 20 20" aria-hidden="true" className="card-icon">
							<path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M10 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0 1a7 7 0 1 0 0-14a7 7 0 0 0 0 14" />
							<path fill="currentColor" d="M10 6.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5" />
							<path fill="currentColor" d="M13.5 10a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5" />
						</svg>
						{time}
					</span>
					<span className="card-chip">
						<svg viewBox="0 0 50 50" aria-hidden="true" className="card-icon">
							<path fill="currentColor" d="M40 23.2c0-2.1-1.7-3.2-4-3.2h-6.7c.5-1.8.7-3.5.7-5c0-5.8-1.6-7-3-7c-.9 0-1.6.1-2.5.6c-.3.2-.4.4-.5.7l-1 5.4c-1.1 2.8-3.8 5.3-6 7V36c.8 0 1.6.4 2.6.9c1.1.5 2.2 1.1 3.4 1.1h9.5c2 0 3.5-1.6 3.5-3c0-.3 0-.5-.1-.7c1.2-.5 2.1-1.5 2.1-2.8c0-.6-.1-1.1-.3-1.6c.8-.5 1.5-1.4 1.5-2.4c0-.6-.3-1.2-.6-1.7c.8-.6 1.4-1.6 1.4-2.6m-2.1 0c0 1.3-1.3 1.4-1.5 2c-.2.7.8.9.8 2.1s-1.5 1.2-1.7 1.9c-.2.8.5 1 .5 2.2v.2c-.2 1-1.7 1.1-2 1.5c-.3.5 0 .7 0 1.8c0 .6-.7 1-1.5 1H23c-.8 0-1.6-.4-2.6-.9c-.8-.4-1.6-.8-2.4-1V23.5c2.5-1.9 5.7-4.7 6.9-8.2v-.2l.9-5c.4-.1.7-.1 1.2-.1c.2 0 1 1.2 1 5c0 1.5-.3 3.1-.8 5H27c-.6 0-1 .4-1 1s.4 1 1 1h9c1 0 1.9.5 1.9 1.2" />
							<path fill="currentColor" d="M16 38h-6c-1.1 0-2-.9-2-2V22c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2m-6-16v14h6V22z" />
						</svg>
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
