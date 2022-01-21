export default function Field({ label, type = 'text', children }) {
  return (
    <div className="sm:grid sm:grid-cols-5 sm:gap-4">
      <label htmlFor={ label } className="sm:col-span-2 block text-sm sm:text-xl md:text-2xl xl:text-3xl font-medium sm:font-semibold"> { children } </label>
      <input
        type={ type }
        id={ label }
        className="w-full mt-1 sm:mt-0 sm:col-span-3 p-2 outline-none border-none bg-gray-100/70 text-gray-900 font-medium rounded-md shadow-sm focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-red-500"
      />
    </div>
  )
}