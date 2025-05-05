import {useEffect, useState} from "react";
import "./App.css";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import Services from "./components/Services/Services.tsx";
import About from "./components/About/About.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Gallery from "./components/Gallery/Gallery.tsx";
import Rates from "./components/Rates/Rates.tsx";
import BrandsSection from "./components/BrandsSection/BrandsSection.tsx";
import {Helmet, HelmetProvider} from "react-helmet-async";
import BookingForm from "./components/BookingForm/BookingForm.tsx";

const LocalBusinessSchema = () => {
	const schemaData = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"@id": "https://appliancefitnessrepair.com#localbusiness",
		"name": "Kaspian Star Appliance and Fitness Equipment Repair",
		"description": "Expert appliance and fitness equipment repair services in Clark County, WA and Portland, OR area.",
		"url": "https://appliancefitnessrepair.com",
		"image": "https://appliancefitnessrepair.com/logo.png",
		"email": "info@appliancefitnessrepair.com",
		"telephone": "+1-360-404-0169",
		"priceRange": "$89-$119",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Vancouver",
			"addressRegion": "WA",
			"postalCode": "98684",
			"addressCountry": "US"
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": "45.6387",
			"longitude": "-122.6615"
		},
		"openingHours": "Mo-Fr 08:00-18:00",
		"aggregateRating": {
			"@type": "AggregateRating",
			"ratingValue": "4.9",
			"reviewCount": "148"
		},
		"review": [
			{
				"@type": "Review",
				"author": "John M.",
				"name": "Great treadmill repair service",
				"datePublished": "2024-12-10",
				"reviewBody": "Fixed my treadmill in under an hour. Very professional and friendly.",
				"reviewRating": {
					"@type": "Rating",
					"ratingValue": "5",
					"bestRating": "5"
				}
			},
			{
				"@type": "Review",
				"author": "Sarah K.",
				"name": "Best appliance repair service",
				"datePublished": "2025-01-22",
				"reviewBody": "Quick and affordable dryer repair. Highly recommended.",
				"reviewRating": {
					"@type": "Rating",
					"ratingValue": "5",
					"bestRating": "5"
				}
			}
		],
		"sameAs": [
			"https://www.facebook.com/yourpage",
			"https://g.page/r/CacEO8r3g4sNEAE/review",
			"https://www.yelp.com/biz/kaspian-star-vancouver-2",
			"https://www.thumbtack.com/wa/vancouver/handyman/treadmill-fitness-equipment-repair/service/474825496607776793"
		],
		"areaServed": [
			"Vancouver WA", "Camas WA", "Battle Ground WA", "Ridgefield WA", "Washougal WA", "La Center WA", "Yacolt WA",
			"Hazel Dell WA", "Salmon Creek WA", "Orchards WA", "Brush Prairie WA", "Minnehaha WA",
			"Walnut Grove WA", "Five Corners WA", "Felida WA", "Mount Vista WA", "Barberton WA",
			"Lake Shore WA", "Cherry Grove WA", "Amboy WA", "Dollars Corner WA", "Hockinson WA", "Duluth WA",
			"Portland OR", "Beaverton OR", "Gresham OR", "Hillsboro OR", "Tigard OR", "Lake Oswego OR",
			"Oregon City OR", "Milwaukie OR", "Tualatin OR", "West Linn OR", "Wilsonville OR", "Troutdale OR",
			"Sherwood OR", "Happy Valley OR", "Canby OR", "Newberg OR", "Forest Grove OR", "Cornelius OR",
			"Fairview OR", "Wood Village OR", "King City OR", "Durham OR", "Maywood Park OR",
			"Aloha OR", "Cedar Mill OR", "Cedar Hills OR", "Oak Grove OR", "Clackamas OR", "Damascus OR",
			"West Slope OR", "Raleigh Hills OR", "Garden Home OR"
		]
	};


	return (
		<Helmet>
			<script type="application/ld+json">
				{JSON.stringify(schemaData)}
			</script>
		</Helmet>
	);
};

function App() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleNav = () => setIsNavOpen(!isNavOpen);
	const closeNav = () => setIsNavOpen(false);

	return (
		<HelmetProvider>
			<Helmet>
				<title>Treadmill Repair Near Me | Appliance & Fitness Equipment Services | Kaspian Star</title>
				<meta
					name="description"
					content="Same-day repair for appliances, treadmills, and gym equipment in Vancouver WA, Portland OR, Beaverton, Camas, Washougal, Tigard, and Hillsboro."
				/>
				<meta
					name="keywords"
					content="treadmill repair, appliance repair, fitness equipment repair, Portland, Beaverton, Vancouver, gym equipment repair, same-day service"
				/>
			</Helmet>
			<LocalBusinessSchema/>
			<Header isScrolled={isScrolled} toggleNav={toggleNav} isNavOpen={isNavOpen}/>
			<Navbar isOpen={isNavOpen} closeNav={closeNav}/>
			<main>
				<Hero/>
				<Services/>
				<BookingForm/>
				<Gallery/>
				<About/>
				<Rates/>
				<Contact/>
			</main>
			<Footer/>
			<BrandsSection/>
		</HelmetProvider>
	);
}

export default App;
