import { useLocation } from '../../context/SessionContext';

export default function LocationSelect() {
  const { dispatch, state } = useLocation();
  return (
    <div>
      <select
        value={state.location}
        onChange={(e) =>
          dispatch({ type: 'setLocation', payload: e.target.value })
        }
        id="location"
        name="location"
        placeholder="Select Location"
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      >
        <option value="" hidden disabled>
          Select Location
        </option>
        <option value="gateway-subs-saint-petersburg-st-petersburg">
          St. Petersburg
        </option>
        <option value="South Pasadena">South Pasadena</option>
      </select>
    </div>
  );
}
