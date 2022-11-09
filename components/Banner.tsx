export const Banner = () => {
  return (
    <div className="w-full overflow-x-hidden border-b">
      <div className="min-h-[80px] flex justify-center ">
        <div className="flex w-[90%] max-width-[1200px] items-center justify-center uppercase gap-[15px] flex-col md:flex-row my-[14px]">
          <div className="w-[62px] h-[62px] border md:block hidden" />
          {/* <Image
          className="h-[62px]"
          width={62}
          height={62}
          src="https://www.chipotle.com/content/dam/chipotle/global-site-design/en/rewards/icons/points%402x.png"
          alt="gateway logo"
        /> */}
          <div className="text-center">
            <h2 className="text-2xl">
              Join Gateway Rewards and Earn Free Subs.
            </h2>
          </div>
          <div className="flex gap-[10px] items-center justify-center">
            <button className="flex items-center justify-center rounded-md border border-blue-600 px-2 py-2 text-blue-600 font-medium text-white shadow-sm hover:bg-blue-700">
              Create an Account
            </button>
            <button className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-2 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
