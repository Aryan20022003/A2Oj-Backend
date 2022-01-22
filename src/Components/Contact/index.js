import Field from './Field'

export default function Contact() {
  return (
    <div className="flex items-center justify-center relative overflow-hidden">
      <div className="absolute w-full h-full">
        <img src="/Images/contact/background.png" alt="" className="w-full h-full" />
      </div>
      <div className="max-w-xs px-4 xl:px-0 sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl py-24 text-white relative z-10 capitalize">
        <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center font-bold xl:tracking-tight">
          Want to <span className="text-red-500">become a Sponsor?</span>
        </h1>
        <div className="mt-6 grid grid-cols-4">
          <div className="col-span-full md:col-span-3 sm:relative sm:z-10 space-y-6 sm:space-y-8 md:space-y-14">
            <p className="text-lg sm:text-xl text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac euismod neque. Mauris arcu arcu, lobortis</p>

            <div className='text-lg sm:text-xl xl:text-3xl text-center md:text-left space-y-2 sm:space-y-3.5'>
              <p>Contact us at <span className="text-red-600 font-semibold">dccnita@gmail.com</span></p>
              <p className="font-semibold text-center"> Or </p>
              <p>Register below and our team will get in touch with you.</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault() }}>
              <Field label="company-name"> Company name: </Field>
              <Field label="email"> Email: </Field>
              <Field label="contact-us"> Contact us: </Field>

              <div className="sm:ml-24">
                <button type="submit" className="mt-2 w-full sm:w-max px-4 py-2 bg-gray-50 rounded-md border-none text-xl sm:text-2xl text-gray-900 font-bold focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-red-500 shadow-lg">
                  Click here to register
                </button>
              </div>
            </form>
          </div>

          <div className='hidden md:flex md:items-center'>
            <img src="/Images/contact/person.png" alt="" className="md:-translate-x-1/2 xl:-translate-x-12 scale-[2.8]" />
          </div>
        </div>
      </div>
    </div>
  )
}
