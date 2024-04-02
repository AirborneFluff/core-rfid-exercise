interface NumberInputFieldProps {
  value: number,
  onValueChange: (value: number) => void,
  min?: number,
  max?: number
}

export default function NumberInputField({value, onValueChange, min, max}: NumberInputFieldProps) {

  function handleValueChange(rawValue: number) {
    let newValue = max !== undefined ? Math.min(rawValue, max) : rawValue;
    newValue = min !== undefined ? Math.max(newValue, min) : newValue;
    onValueChange(newValue);
  }

  return (
    <input
      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
      id="minimumRegistrations"
      type="number"
      value={value}
      onChange={(e) => handleValueChange(Number(e.target.value))}/>
  )
}
