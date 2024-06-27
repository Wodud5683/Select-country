import React from "react";
import styled from "styled-components";
import { Country } from "../types/country";

interface CountryCardProps {
  country: Country;
  isSelected: boolean;
  onSelect: (country: Country) => void;
}

const Card = styled.div<{ isSelected: boolean }>`
  width: 150px;
  margin: 10px;
  padding: 10px;
  border: ${(props) =>
    props.isSelected ? "2px solid green" : "1px solid gray"};
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
  }

  h3 {
    margin: 10px 0 5px 0;
  }
`;

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  isSelected,
  onSelect,
}) => {
  return (
    <Card isSelected={isSelected} onClick={() => onSelect(country)}>
      <img src={country.flags.svg} alt={`${country.name.common} flag`} />
      <h3>{country.name.common}</h3>      
    </Card>
  );
};

export default CountryCard;
