import { useEffect, useState } from "react";
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
import { HelmetProvider, Helmet } from "react-helmet-async";

const LocalBusinessSchema = () => {
	const schemaData = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "Kaspian Star Appliance and Fitness Equipment Repair",
		"description": "Expert appliance and fitness equipment repair services in Clark County, WA",
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
		"url": "https://appliancefitnessrepair.com",
		"telephone": "+1-360-404-0169",
		"priceRange": "$89-$119",
		"openingHours": "Mo-Fr 08:00-18:00",
		"image": "https://appliancefitnessrepair.com/logo.png",
		"sameAs": [
			"https://www.facebook.com/yourpage",
			"https://g.page/r/CacEO8r3g4sNEAE/review",
			"https://www.yelp.com/biz/kaspian-star-vancouver-2",
			"https://www.thumbtack.com/wa/vancouver/handyman/treadmill-fitness-equipment-repair/service/474825496607776793"
		]
	};

	return (
		<Helmet>
			<script type="application/ld+json">{JSON.stringify(schemaData)}</script>
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
				<title>Kaspian Star Appliance and Fitness Equipment Repair</title>
				<meta
					name="description"
					content="Expert appliance and fitness equipment repair services in Clark County, WA"
				/>
			</Helmet>
			<LocalBusinessSchema />
			<Header isScrolled={isScrolled} toggleNav={toggleNav} isNavOpen={isNavOpen} />
			<Navbar isOpen={isNavOpen} closeNav={closeNav} />
			<main>
				<Hero />
				<Services />
				<Gallery />
				<About />
				<Rates />
				<Contact />
			</main>
			<Footer />
			<BrandsSection />
		</HelmetProvider>
	);
}

export default App;
