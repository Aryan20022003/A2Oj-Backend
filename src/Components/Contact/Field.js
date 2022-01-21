export default function Field({ children }) {
  return (
    <>
      <label htmlFor="company-name" className="col-span-2 block text-3xl font-semibold"> { children } </label>
      <input type="text" className="col-span-3 p-2 outline-none border-none bg-gray-100/70 text-gray-900 font-medium rounded-md shadow-sm focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-red-500" />
    </>
  )
}