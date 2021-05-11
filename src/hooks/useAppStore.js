import React from 'react';
import { AppContext } from '../stores/AppStore';

export function useAppStore() { return React.useContext(AppContext); }