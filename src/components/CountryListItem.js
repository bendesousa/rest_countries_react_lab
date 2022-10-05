const CountryListItem = ({country}, {onClick}) => {
    
    const handleClick = () => {
        onClick(country)
    };

    return (
        <>
        <li onClick={handleClick} key={country.name.common}>  {country.name.common}</li>
        </>
       
    );
}

export default CountryListItem;