interface IInputInterface {
  htmlFor?: string;
  id?: string;
  name?: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  screenReaderLabel?: string;
  defaultValue?: string;
}

export const Input = (props: IInputInterface) => {
  return (
    <div>
      <label htmlFor={props.htmlFor} className="sr-only">
        {props.screenReaderLabel}
      </label>
      <input
        id={props.id}
        name={props.name}
        type={props.type}
        autoComplete={props.autoComplete}
        className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        placeholder={props.placeholder}
      />
    </div>
  );
};
