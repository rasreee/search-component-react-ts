import React from 'react';
import styled from 'styled-components';
import { SearchBar } from './components';
import useStore from './hooks/useStore';
import ViewModel from './ViewModel';

function App() {
  const store = useStore();

  const viewModel = new ViewModel(store)

  return (
    <Layout>
      <h1>Search Bar Demo</h1>
      <SearchBar onSubmit={viewModel.handleSubmit} store={viewModel.store} />
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