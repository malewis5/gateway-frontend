import * as React from 'react';
import { useDebugValue } from 'react';

type Action = { type: 'toggle' };
type Dispatch = (action: Action) => void;
type State = { show: boolean };
type LoginProviderProps = { children: React.ReactNode };

const LoginModalContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function loginReducer(state: State, action: Action) {
  switch (action.type) {
    case 'toggle': {
      return { show: !state.show };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function LoginModalProvider({ children }: LoginProviderProps) {
  const [state, dispatch] = React.useReducer(loginReducer, { show: false });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <LoginModalContext.Provider value={value}>
      {children}
    </LoginModalContext.Provider>
  );
}

function useLoginModal() {
  const context = React.useContext(LoginModalContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

export { LoginModalProvider, useLoginModal };
