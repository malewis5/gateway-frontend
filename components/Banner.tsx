import Image from 'next/image';
import { useLoginModal } from '../context/LoginModalContext';

export const Banner = () => {
  const { dispatch } = useLoginModal();
  return (
    <div className="w-full overflow-x-hidden border-b">
      <div className="min-h-[80px] flex justify-center ">
        <div className="flex w-[90%] max-width-[1200px] items-center justify-center uppercase gap-[15px] flex-col md:flex-row my-[14px]">
          <div className="w-[62px] h-[62px] md:flex hidden items-center justify-center">
            <Image
              height={62}
              width={62}
              className="h-[62px] w-[62px] sm:h-10"
              src="/svg/gateway.svg"
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
                dispatch({ type: 'sign-up' });
              }}
              className="flex items-center whitespace-nowrap justify-center rounded-md border border-primary px-2 py-2 text-primary font-medium text-primary shadow-sm hover:bg-primary hover:border-darkBlue hover:text-white"
            >
              Create an Account
            </button>
            <button
              onClick={() => {
                dispatch({ type: 'toggle' });
                dispatch({ type: 'sign-in' });
              }}
              className="flex items-center whitespace-nowrap justify-center rounded-md border border-transparent bg-primary px-2 py-2 text-base font-medium text-white shadow-sm hover:bg-darkBlue"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
