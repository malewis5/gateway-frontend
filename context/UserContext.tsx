import { useSupabaseClient } from '@supabase/auth-helpers-react';
import * as React from 'react';

type Action = { type: 'setUser'; payload: IFetchUserResponse };
type Dispatch = (action: Action) => void;
type State = { user: IFetchUserResponse | undefined };
type LoginProviderProps = { children: React.ReactNode };

interface IFetchUserResponse {
  updated_at?: any;
  username?: string;
  full_name: string;
  avatar_url?: string;
  preferred_location?: string;
}

const UserContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function loginReducer(state: State, action: Action) {
  switch (action.type) {
    case 'setUser': {
      return { user: action.payload };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserContextProvider({ children }: LoginProviderProps) {
  const [state, dispatch] = React.useReducer(loginReducer, {
    user: {
      updated_at: '',
      username: '',
      full_name: '',
      avatar_url: '',
      preferred_location: '',
    },
  });

  const supabase = useSupabaseClient();
  const fetchUser = async (user_id?: string) => {
    const response = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user_id)
      .then((res) => {
        return res.data;
      });
    dispatch({ type: 'setUser', payload: response?.[0] });
  };

  supabase.auth.onAuthStateChange((e, session) => fetchUser(session?.user.id));

  const value = { state, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUser() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

export { UserContextProvider, useUser };
