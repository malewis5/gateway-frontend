import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { supabase } from '@supabase/auth-ui-react/dist/esm/common/theming';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useLoginModal } from '../context/LoginModalContext';
import { Button } from './common/Button';

export default function UserAccount() {
  const { state, dispatch } = useLoginModal();
  const session = useSession();
  const supabase = useSupabaseClient();
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const getUser = async () => {
      const user_id = session?.user.id;
      const response = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user_id)
        .then((res) => res.data);
      setUser(response);
    };
    getUser();
  }, []);

  return (
    <div>
      <h1>Hey, {user?.[0]?.full_name}</h1>
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
