import { useState, useEffect } from "react";
import CountriesList from "../components/CountriesList";
import VisitedCountriesList from "../components/VisitedCountriesList";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);

    const fetchCountries = () => {
        fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((response) => setCountries(response))
        // fetch data from the RESTCountries API
        // set the countries state to the result of the API call
        // pass it down to relevant components
    }

    useEffect(() => {
        fetchCountries();
    }, [])

    // Would be using state here to set whether a country had been visited or not
    // The method would be called on the click of a button 
    // The country would appear on one of two of the lists depending on this state
    const visitCountry = (visitedCountry) =>{

        const updatedCountries = [...countries, visitedCountry]
        setCountries(updatedCountries);

    }

    return(
        <>
            <CountriesList countriesSrc={countries} onClick={visitCountry}/>
            {/* <VisitedCountriesList countriesSrc={countries} onClick={visitCountry}/> */}
        </>
    );
}

export default CountriesContainer;