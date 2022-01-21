import Field from './Field'

export default function Contact() {
  return (
    <div className="flex items-center justify-center relative overflow-hidden">
      <div className="absolute w-full h-full">
        <img src="/Images/contact/background.png" alt="" className="w-full h-full" />
      </div>
      <div className="max-w-xs px-4 sm:max-w-4xl py-24 text-white relative z-10 capitalize">
        <h1 className="uppercase text-3xl sm:text-6xl text-center font-bold tracking-tight">
          Want to <span className="text-red-500">become a Sponsor?</span>
        </h1>
        <div className="mt-6 grid grid-cols-4">
          <div className="col-span-full sm:col-span-3 sm:relative sm:z-10">
            <p className="text-sm sm:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac euismod neque. Mauris arcu arcu, lobortis</p>

            <p className="mt-6 sm:mt-14 text-lg sm:text-3xl">Contact us at <span className="text-red-600 font-semibold">dccnita@gmail.com</span></p>
            <p className="mt-2 sm:mt-4 sm:text-3xl font-semibold text-center"> Or </p>
            <p className="mt-2 sm:mt-3 sm:text-2xl">Register below and our team will get in touch with you.</p>

            <form className="mt-6 sm:mt-14 space-y-4" onSubmit={(e) => { e.preventDefault() }}>
              <Field label="company-name"> Company name: </Field>
              <Field label="email"> Email: </Field>
              <Field label="contact-us"> Contact us: </Field>

              <div className="sm:ml-24 sm:mr-0">
                <button type="submit" className="mt-4 sm:mt-0 w-full sm:w-max px-4 py-2 bg-gray-50 rounded-md border-none text-xl sm:text-2xl text-gray-900 font-bold focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-red-500 shadow-lg">
                  Click here to register
                </button>
              </div>
            </form>
          </div>

          <div className='hidden sm:flex sm:items-center'>
            <img src="/Images/contact/person.png" alt="" className="-translate-x-12 scale-[2.8]" />
          </div>
        </div>
      </div>
    </div>
  )
}