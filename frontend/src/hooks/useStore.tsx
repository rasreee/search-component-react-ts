import React from 'react';
import { StoreContext } from '../contexts/StoreContext';

export default function useStore() {
    const context = React.useContext(StoreContext);
    if (context === undefined) {
        throw new Error('useStore must be used within StoreContext provider');
    }

    return context;
}
