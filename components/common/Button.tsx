export const Button = ({ text, clickHandler }: any) => {
  return (
    <button
      onClick={clickHandler}
      className="rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-darkBlue"
    >
      {text}
    </button>
  );
};
