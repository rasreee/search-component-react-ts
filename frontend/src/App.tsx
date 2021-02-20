import React from 'react';
import styled from 'styled-components';
import { SearchBar } from './components';

function App() {
  const handleSubmit = (value: string) => {
    console.log('submitting query=', value)
  }
  return (
    <Layout>
      <h1>SearchBar</h1>
      <SearchBar onSubmit={handleSubmit} />
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  flex-direction: column;
`