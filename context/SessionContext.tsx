import * as React from 'react';

type Action = { type: 'setLocation'; payload: any };
type Dispatch = (action: Action) => void;
type State = { location: string };
type LoginProviderProps = { children: React.ReactNode };

const LocationContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function loginReducer(state: State, action: Action) {
  switch (action.type) {
    case 'setLocation': {
      localStorage.setItem('location', JSON.stringify(action.payload));
      return { location: action.payload };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function SessionLocationProvider({ children }: LoginProviderProps) {
  const [state, dispatch] = React.useReducer(loginReducer, {
    location: '',
  });

  // Local Storage: setting & getting data
  React.useEffect(() => {
    let location;
    try {
      location = JSON.parse(localStorage?.getItem('location') ?? '');
    } catch (e) {}

    if (location) {
      dispatch({ type: 'setLocation', payload: location });
    }
  }, []);

  const value = { state, dispatch };
  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
}

function useLocation() {
  const context = React.useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

export { SessionLocationProvider, useLocation };
