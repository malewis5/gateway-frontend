import { useSupabaseClient } from '@supabase/auth-helpers-react';
import Image from 'next/image';
import { useState } from 'react';
import { useLoginModal } from '../../context/LoginModalContext';

export default function LoginForm() {
  const signInRedirect = process.env.NEXT_PUBLIC_AUTH_REDIRECT;

  const { state, dispatch } = useLoginModal();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);
  const [error, setError] = useState<any>();
  const [emailConfirmation, setEmailConfirmation] = useState(false);

  const supabase = useSupabaseClient();

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: signInRedirect },
    });
    if (error) setError(error);
  };

  const signInWithPassword = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setError(error);
  };

  const createUserWithPassword = async (email: string, password: string) => {
    setError(null);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error);
    else setEmailConfirmation(true);
  };

  const signInWithApple = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'apple',
      options: { redirectTo: signInRedirect },
    });
    if (error) setError(error);
  };

  const resetPassword = async (email: string) => {
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${signInRedirect}/reset-password`,
    });
  };

  if (emailConfirmation) {
    return (
      <div className="sm:mx-auto w-full sm:max-w-md max-w-xs">
        <div className="bg-white md:py-8 md:px-4 md:shadow md:rounded-lg sm:px-10 text-left">
          <h1 className="text-lg mb-2">
            A verification link has been sent to {email}.
          </h1>
          <h2 className="text-md mb-2">
            Please confirm your account by following the link sent to your
            email. You will not be able to sign in until you confirm your email.
          </h2>
          <p
            className="font-medium text-primary hover:text-blue-500 cursor-pointer"
            onClick={() => {
              setEmailConfirmation(false);
            }}
          >
            Back to sign in
          </p>
        </div>
      </div>
    );
  }

  if (forgotPassword) {
    return (
      <div className="sm:mx-auto w-full sm:max-w-md max-w-xs">
        <div className="bg-white md:py-8 md:px-4 md:shadow md:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  resetPassword(email);
                }}
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-darkBlue focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Reset Password
              </button>
            </div>
            <div
              className="text-sm hover:underline"
              onClick={() => setForgotPassword(false)}
            >
              <p className="font-medium text-primary hover:text-blue-500 cursor-pointer">
                Back to sign in
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="sm:mx-auto w-full sm:max-w-md max-w-xs">
      <div className="bg-white md:py-8 md:px-4 md:shadow md:rounded-lg sm:px-10">
        {!forgotPassword && (
          <div className="mb-6 grid grid-rows-2 gap-2">
            <div>
              <div
                onClick={signInWithGoogle}
                className="flex w-full cursor-pointer justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
              >
                <span className="sr-only">Continue with Google</span>
                <div className="relative h-5 w-5 mr-2">
                  <Image alt="google" src="/svg/google.svg" fill />
                </div>
                <p>Continue with Google</p>
              </div>
            </div>

            <div>
              <div
                onClick={signInWithApple}
                className="flex w-full cursor-pointer justify-center rounded-md border border-gray-300 bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-black-800"
              >
                <span className="sr-only">Continue with Apple</span>
                <div className="relative h-5 w-5 mr-2">
                  <Image alt="google" src="/svg/apple.svg" fill />
                </div>
                <p>Continue with Apple</p>
              </div>
            </div>
          </div>
        )}
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                state.signup
                  ? createUserWithPassword(email, password)
                  : signInWithPassword(email, password);
              }}
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-darkBlue focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign {state.signup ? 'up' : 'in'}
            </button>
            {error && (
              <p className="text-xs text-red-600 text-left mt-1">
                {error.message}
              </p>
            )}
          </div>

          <div className="flex-col items-center justify-center">
            {!state.signup && (
              <div
                className="text-sm hover:underline"
                onClick={() => setForgotPassword(true)}
              >
                <a
                  href="#"
                  className="font-medium text-primary hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            )}

            <div
              className="text-sm hover:underline"
              onClick={() =>
                state.signup
                  ? dispatch({ type: 'sign-in' })
                  : dispatch({ type: 'sign-up' })
              }
            >
              <a
                href="#"
                className="font-medium text-primary hover:text-blue-500"
              >
                {state.signup
                  ? 'Already have an account? Sign in'
                  : "Don't have an account? Sign up"}
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
