import { useSupabaseClient } from '@supabase/auth-helpers-react';

import { useUser } from '../context/UserContext';

import { useLoginModal } from '../context/LoginModalContext';
import { Button } from './common/Button';

export default function UserAccount() {
  const { dispatch } = useLoginModal();
  const { state } = useUser();
  const supabase = useSupabaseClient();

  return (
    <div>
      <h1>Name: {state?.user?.full_name}</h1>
      <h2>Username: {state.user?.username}</h2>
      <Button
        text={'Logout'}
        clickHandler={async () => {
          dispatch({ type: 'toggle' });
          await supabase.auth.signOut();
        }}
      />
    </div>
  );
}
