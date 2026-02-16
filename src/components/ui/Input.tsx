
interface InputProps {
  placeholder?: string;
  inputRef?: any;
}

export const Input = ({ placeholder, inputRef }: InputProps) => {
  return (
    <input
    ref={inputRef}
      placeholder={placeholder}
      type="text"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  );
};