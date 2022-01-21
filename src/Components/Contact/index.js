import Field from './Field'

export default function Contact() {
  return (
    <div className="flex items-center justify-center relative overflow-hidden">
      <div className="absolute w-full h-full">
        <img src="/Images/contact/background.png" alt="" className="w-full h-full" />
      </div>
      <div className="max-w-4xl py-24 text-white relative z-10 capitalize">
        <h1 className="uppercase text-6xl text-center font-bold tracking-tight">
          Want to <span className="text-red-500">become a Sponsor?</span>
        </h1>
        <div className="mt-6 grid grid-cols-4">
          <div className="col-span-3 relative z-10">
            <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac euismod neque. Mauris arcu arcu, lobortis</p>

            <p className="mt-14 text-3xl">Contact us at <span className="text-red-600 font-semibold">dccnita@gmail.com</span></p>
            <p className="mt-4 text-3xl font-semibold text-center"> Or </p>
            <p className="mt-3 text-2xl">Register below and our team will get in touch with you.</p>

            <form className="mt-14 grid grid-cols-5 gap-4" onSubmit={(e) => { e.preventDefault() }}>
              <Field> Company name: </Field>
              <Field> Email: </Field>
              <Field> Contact us: </Field>

              <button type="submit" className='ml-24 mt-4 w-max px-4 py-2 bg-gray-50 rounded-md border-none text-2xl text-gray-900 font-bold focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-red-500 shadow-lg'>
                Click here to register
              </button>
            </form>
          </div>

          <div className='flex items-center'>
            <img src="/Images/contact/person.png" alt="" className="-translate-x-12 scale-[2.8]" />
          </div>
        </div>
      </div>
    </div>
  )
}