export default function FormInput({ title, placeholder, type, id, value, onChange }) {
  return (
    <div className="mb-2 w-full">
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-300 self-start pb-2 pt-2">
        {title}*
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        className="flex bg-transparent w-full rounded-md py-4 px-5 text-white text-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none"
      />
    </div>
  );
}
