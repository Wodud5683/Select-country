import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchCountries } from "../api/fetchCountries";
import { Country } from "../types/Country";
import CountryCard from "./CountryCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  margin: 20px 0;
  font-size: 24px;
  color: #333;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  useEffect(() => {
    const getCountries = async () => {
      const data: Country[] = await fetchCountries();
      setCountries(data);
    };

    getCountries();
  }, []);

  const toggleSelectedCountry = (country: Country) => {
    setSelectedCountries((prevSelectedCountries) => {
      if (prevSelectedCountries.includes(country)) {
        return prevSelectedCountries.filter((c) => c !== country);
      } else {
        return [...prevSelectedCountries, country];
      }
    });
  };

  return (
    <Container>
      <Title>Favorite Countries</Title>
      <List>
        {selectedCountries.map((country : Country) => (
          <CountryCard
            key={country.name.common}
            country={country}
            isSelected={true}
            onSelect={toggleSelectedCountry}
          />
        ))}
      </List>

      <Title>Countries</Title>
      <List>
        {countries
          .filter((country) => !selectedCountries.includes(country))
          .map((country) => (
            <CountryCard
              key={country.name.common}
              country={country}
              isSelected={selectedCountries.includes(country)}
              onSelect={toggleSelectedCountry}
            />
          ))}
      </List>
    </Container>
  );
};

export default CountryList;
