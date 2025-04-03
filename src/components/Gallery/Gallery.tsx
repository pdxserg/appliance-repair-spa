// src/components/Gallery/Gallery.tsx
import { useState } from 'react';
import styles from './Gallery.module.css';

// In a real project, these would be actual images from your assets folder
const galleryImages = [
	{
		id: 1,
		src: '/src/assets/images/gallery/fridge.webp',
		alt: 'Refrigerator repair',
		category: 'appliance'
	},
	{
		id: 2,
		src: '/src/assets/images/gallery/dishwasher2.webp',
		alt: 'Dishwasher repair',
		category: 'appliance'
	},
	{
		id: 3,
		src: '/src/assets/images/gallery/dryer2.webp',
		alt: 'Dryer repair',
		category: 'appliance'
	},
	{
		id: 4,
		src: '/src/assets/images/gallery/treadmill.webp',
		alt: 'Treadmill repair',
		category: 'fitness'
	},
	{
		id: 5,
		src: '/src/assets/images/gallery/bike.webp',
		alt: 'Exercise bike repair',
		category: 'fitness'
	},
	{
		id: 6,
		src: '/src/assets/images/gallery/elliptical.webp',
		alt: 'Elliptical repair',
		category: 'fitness'
	}
];

const Gallery = () => {
	const [filter, setFilter] = useState<'all' | 'appliance' | 'fitness'>('all');
	const [activeImage, setActiveImage] = useState<number | null>(null);

	const filteredImages = filter === 'all'
		? galleryImages
		: galleryImages.filter(img => img.category === filter);

	const openLightbox = (id: number) => {
		setActiveImage(id);
	};

	const closeLightbox = () => {
		setActiveImage(null);
	};

	return (
		<section id="gallery" className={`section ${styles.gallerySection}`}>
			<div className="container">
				<h2 className="section-title">Our Work</h2>

				<div className={styles.galleryFilters}>
					<button
						className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
						onClick={() => setFilter('all')}
					>
						All
					</button>
					<button
						className={`${styles.filterBtn} ${filter === 'appliance' ? styles.active : ''}`}
						onClick={() => setFilter('appliance')}
					>
						Appliance Repair
					</button>
					<button
						className={`${styles.filterBtn} ${filter === 'fitness' ? styles.active : ''}`}
						onClick={() => setFilter('fitness')}
					>
						Fitness Equipment
					</button>
				</div>

				<div className={styles.galleryGrid}>
					{filteredImages.map(image => (
						<div
							key={image.id}
							className={styles.galleryItem}
							onClick={() => openLightbox(image.id)}
						>
							<img src={image.src} alt={image.alt} />
							<div className={styles.overlay}>
								<div className={styles.caption}>{image.alt}</div>
							</div>
						</div>
					))}
				</div>

				{activeImage !== null && (
					<div className={styles.lightbox} onClick={closeLightbox}>
						<span className={styles.close}>&times;</span>
						<img
							src={galleryImages.find(img => img.id === activeImage)?.src}
							alt={galleryImages.find(img => img.id === activeImage)?.alt}
							className={styles.lightboxContent}
						/>
						<div className={styles.lightboxCaption}>
							{galleryImages.find(img => img.id === activeImage)?.alt}
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default Gallery;

// src/components/Gallery/Gallery.module.css