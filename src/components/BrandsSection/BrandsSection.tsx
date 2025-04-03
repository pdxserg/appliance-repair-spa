import s from './BrandsSection.module.css'

const BrandsSection = () => {
    const applianceBrands = [
        'Samsung', 'LG', 'Bosch', 'Siemens', 'Electrolux',
        'Whirlpool', 'Miele', 'Philips', 'Dyson', 'Panasonic',
        'Sony', 'Haier', 'Beko', 'AEG', 'Hitachi'
    ];

    const fitnessBrands = [
        'Nike', 'Adidas', 'Reebok', 'Ironman','Under Armour', 'Puma',
        'New Balance', 'Technogym', 'Life Fitness', 'NordicTrack',
        'Bowflex', 'Peloton', 'Precor', 'Matrix', 'Sole','Garmin', 'Fitbit'
    ];

    return (
        <section className={s.brandsSection} aria-hidden="true">
            <div className="container">
                <h2 className={s.visuallyHidden}>Popular Brands</h2>

                <div className="seo-category">
                    <h3 className="visually-hidden">Appliance Brands</h3>
                    <ul className="brand-list">
                        {applianceBrands.map((brand, index) => (
                            <li key={index}>
                                <a href={`/search?brand=${brand}&category=appliances`} rel="nofollow">
                                    {brand} Appliances
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="seo-category">
                    <h3 className="visually-hidden">Fitness Equipment Brands</h3>
                    <ul className="brand-list">
                        {fitnessBrands.map((brand, index) => (
                            <li key={index}>
                                <a href={`/search?brand=${brand}&category=fitness`} rel="nofollow">
                                    {brand} Fitness Equipment
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


        </section>
    );
};

export default BrandsSection;