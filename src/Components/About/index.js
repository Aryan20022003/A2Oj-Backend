export default function About() {
    return (
      <>
      <div class="relative">
      <div class="container max-w-7xl mx-auto m-12">
        <div class="flex flex-wrap">
          <div class="w-2/3 p-6">
          <p className="mt-6 text-base text-center sm:text-xl lg:text-left text-white tracking-wider font-semibold break-all">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac euismod neque. 
          Mauris arcu arcu, lobortis <span className="text-red-600">Nec maximus egestas, maximus eget lacus.</span> 
          Fusce mollis et elit sed finibus. Quisque sed nunc vitae eros fermentum volutpat. 
          In in laoreet purus. In tempus commodo lacus at elementum. Sed in turpis sed neque cursus posuere at et erat. 
          Ut dignissim lorem eget mauris elementum, sed elementum lorem tempor. Aenean rhoncus vel lacus sit amet iaculis. 
          Nulla facilisi.
          </p>
          </div>
        </div>
      </div>
      <div class="absolute right-0 w-1/3 -my-72">
          <img class="object-cover w-full" src="./Images/about/side.png" />
      </div>
      </div>
      </>
    )
  }