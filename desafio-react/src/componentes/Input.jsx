const Input = ({label, placeholder, type = "text", required, value, onChange}) => (

    <label className="block text-sm font-medium text-gray-700">
        {label}
        <input 
            required = {required}
            type={type} 
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </label>
);

export default Input;