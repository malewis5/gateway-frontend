import { useLoginModal } from '../context/LoginModalContext';
import Image from 'next/image';

export const Banner = () => {
  const { dispatch } = useLoginModal();
  return (
    <div className="w-full overflow-x-hidden border-b">
      <div className="min-h-[80px] flex justify-center ">
        <div className="flex w-[90%] max-width-[1200px] items-center justify-center uppercase gap-[15px] flex-col md:flex-row my-[14px]">
          <div className="w-[62px] h-[62px] md:flex hidden items-center justify-center">
            <img
              className="h-[62px] w-[62px] sm:h-10"
              src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
              alt=""
            />
          </div>
          <div className="text-center">
            <h2 className="text-2xl">
              Join Gateway Rewards and Earn Free Subs.
            </h2>
          </div>
          <div className="flex gap-[10px] items-center justify-center">
            <button
              onClick={() => {
                dispatch({ type: 'toggle' });
              }}
              className="flex items-center whitespace-nowrap justify-center rounded-md border border-blue-600 px-2 py-2 text-blue-600 font-medium text-blue-600 shadow-sm hover:bg-blue-600 hover:border-blue-700 hover:text-white"
            >
              Create an Account
            </button>
            <button
              onClick={() => {
                dispatch({ type: 'toggle' });
              }}
              className="flex items-center whitespace-nowrap justify-center rounded-md border border-transparent bg-blue-600 px-2 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
