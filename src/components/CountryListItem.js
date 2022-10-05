const CountryListItem = ({country}, {onClick}) => {
    
    return (
        <>
        <li>  {country.name.common}</li><br/>
        <button type="submit" value="submit" onClick={onClick}>Visited</button>
        </>
       
    );
}

export default CountryListItem;