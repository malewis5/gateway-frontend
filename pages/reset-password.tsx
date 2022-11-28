import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Loader } from '../components/common/Loader';
import { Button } from '../components/common/Button';
import Link from 'next/link';

export default function ResetPassword() {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const supabase = useSupabaseClient();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const updatePassword = async (password: string, confirmPassword: string) => {
    setLoading(true);
    setError(null);
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    } else {
      const { data, error } = await supabase.auth.updateUser({
        password: password,
      });
      if (error) {
        setError(error.message);
      } else {
        setError(null);
        setSubmitted(true);
      }
    }
    setLoading(false);
  };

  return (
    <div className="mx-auto w-full sm:max-w-md max-w-xs min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="min-w-full min-h-full">
        <div className="bg-white md:py-8 md:px-4 md:shadow md:rounded-lg sm:px-10">
          {submitted ? (
            <div className=" flex flex-col items-center justify-center">
              <h1 className="text-xl mb-1">Password Reset Successfully</h1>
              <Link href="/">
                <Button text="Go to home page" />
              </Link>
            </div>
          ) : (
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                  {error && (
                    <p className="text-xs text-red-600 mt-1">{error}</p>
                  )}
                </div>
              </div>
              <div>
                <button
                  disabled={loading}
                  onClick={(e) => {
                    e.preventDefault();
                    updatePassword(password, confirmPassword);
                  }}
                  type="submit"
                  className="disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-primary flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-darkBlue focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {loading ? <Loader /> : 'Submit'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
