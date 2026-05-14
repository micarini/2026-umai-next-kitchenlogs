'use client'

import Link from "next/link"; /* importo Link de next/link para poder usarlo en el componente Card y hacer que cada card sea un enlace a la pagina de la receta correspondiente, el href se construye con el id de la receta, que se pasa como prop al componente Card desde el componente CardsGrid, y el id se obtiene del index del map que recorre las recetas*/
import { FiClock, FiThumbsUp } from 'react-icons/fi';

const Card = ({ id, name, image, time = "35 MIN", level = "EASY" }) => {
	return (
		<Link href={`/about/${id}`} className="block h-full">
			<article className="flex h-full flex-col overflow-hidden rounded-2xl border-2 border-black/10 [background:var(--card-bg)] transition-transform duration-200 hover:-translate-y-1">
			<div className="aspect-4/3 w-full shrink-0 [background:var(--card-media-bg)]">
				{image ? (
					<img
						src={image}
						alt={name}
						className="h-full w-full object-cover"
						loading="lazy" /* mejora el rendimiento inicial al cargar la pagina ya que las imagenes solo cargan cuando se despliegan */
					/>
				) : (
						<div className="flex h-full w-full items-center justify-center text-sm font-semibold text-(--foreground)/50">
						KitchenLogs
					</div>
				)}
			</div>

			<div className="flex flex-1 flex-col space-y-2 p-3">
				<div className="flex items-center gap-3 pb-1 pt-0.5">
					<span className="inline-flex items-center gap-[0.35em] [font-family:var(--font-dm-sans)] text-[0.78rem] font-bold uppercase">
						<FiClock aria-hidden="true" className="h-[1.15em] w-[1.15em]" />
						{time}
					</span>
					<span className="inline-flex items-center gap-[0.35em] [font-family:var(--font-dm-sans)] text-[0.78rem] font-bold uppercase">
						<FiThumbsUp aria-hidden="true" className="h-[1.15em] w-[1.15em]" />
						{level}
					</span>
				</div>

				<h3 className="line-clamp-2 pb-1 [font-family:var(--font-roboto)] text-[1.45em] font-bold leading-[1.2] tracking-[0.01em] text-(--foreground)">
					{name}
				</h3>
			</div>
		</article>
		</Link>
	);
};

export default Card;
