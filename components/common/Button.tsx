export const Button = ({ text, clickHandler }: any) => {
  return (
    <button
      onClick={clickHandler}
      className="rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
    >
      {text}
    </button>
  );
};
