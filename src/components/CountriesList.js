import CountryListItem from "./CountryListItem";

const CountriesList = ({countriesSrc}, {onClick}) => {
    

    return(
        
        <>
            <h2>Countries I have yet to visit</h2>
            {   
                countriesSrc.map(country => {
                    return <CountryListItem country={country} visitCountry={onClick}/>
                })
            }
        </>
    );
}

export default CountriesList;