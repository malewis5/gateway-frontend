import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useLoginModal } from '../context/LoginModalContext';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';

export function LoginModal() {
  const { state, dispatch } = useLoginModal();
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <Transition.Root show={state.show} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          dispatch({ type: 'toggle' });
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-screen h-screen transform overflow-hidden bg-white shadow-xl transition-all ">
                <div className="w-full h-full flex items-center justify-center">
                  <div
                    onClick={() => dispatch({ type: 'toggle' })}
                    className="bg-white rounded-[50%] flex absolute top-[10px] right-[1.5em] cursor-pointer items-center justify-center"
                  >
                    <XMarkIcon color="#2563EB" height={40} width={40} />
                  </div>
                  {!session ? (
                    <Auth
                      supabaseClient={supabase}
                      appearance={{ theme: ThemeSupa }}
                      theme="dark"
                    />
                  ) : (
                    <p>Account page will go here.</p>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
