const Select = ({label, options, value, onChange, required}) => (

    <label className="block text-sm font-medium text-gray-700">
        {label}
        <select 
            required={required}
            value={value} 
            onChange={onChange} 
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">

            <option value="">Selecione uma opção</option>
            {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}

        </select>
    </label>
);

export default Select;