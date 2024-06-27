import React from 'react';
import CountryList from './components/CountryList';
import styled from 'styled-components';

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    background-color: #f5f5f5;
    padding: 20px;
`;

const App: React.FC = () => {
    return (
        <AppContainer>
            <CountryList />
        </AppContainer>
    );
};

export default App;
