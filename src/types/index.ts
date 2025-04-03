// src/types/index.ts
export interface ServiceItem {
	id: string;
	name: string;
	description: string;
	icon: string;
}

export interface GalleryImage {
	id: number;
	src: string;
	alt: string;
	category: 'appliance' | 'fitness';
}


