

function UserLoginForm() {
  return (
    <section className="relative pt-32 pb-36 bg-gradient-gray2 overflow-hidden">

    <div className="relative z-10 container mx-auto px-4">
      <div className="flex flex-wrap -m-6">
        <div className="w-full md:w-1/2 p-6">
      
          <div className="md:max-w-xl">

            <h2 className="mb-3 font-heading font-bold text-gray-900 text-6xl sm:text-7xl">Welcome back!</h2>
            
            <p className="mb-12 text-lg text-gray-500">Sign in to start selling now!</p>
            <div className="flex flex-wrap -m-2 mb-6">
              <div className="w-full p-2">
                <input className="w-full px-5 py-3.5 text-gray-500 placeholder-gray-500 bg-white outline-none focus:ring-4 focus:ring-indigo-500 border border-gray-200 rounded-lg" type="text" placeholder="Email address" name="email" />
              </div>
              <div className="w-full p-2">
                <input className="w-full px-5 py-3.5 text-gray-500 placeholder-gray-500 bg-white outline-none focus:ring-4 focus:ring-indigo-500 border border-gray-200 rounded-lg" type="password" placeholder="Password" name="password" />
              </div>
            </div>
            <div className="flex flex-wrap -m-1.5 mb-8">
              <div className="w-auto p-1.5">
                <input className="w-4 h-4" type="checkbox" />
              </div>
              <div className="flex-1 p-1.5">
                <p className="text-gray-900 text-sm">Remember me</p>
              </div>
            </div>
            <div className="group relative md:max-w-max">
             
              <button className="btn w-[250px] hover:text-blue-100">Sign-in</button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-6">
          <div className="md:max-w-lg ml-auto">
            <div className="flex flex-wrap -m-6">
              <div className="w-auto p-6">
                <div className="flex flex-wrap -m-4">
                  <div className="w-full p-4">
                    <p className="text-xl text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus urna aliquet malesuada gravida viverra vehicula. Elementum, fusce in eu nunc viverra. Diam enim, varius tincidunt orci sed mauris. Eu sed risus tempor lorem.</p>
                  </div>
                  <div className="w-full p-4">
                    <div className="flex flex-wrap items-center -m-1.5">
                      <div className="w-auto p-1.5">
                        <img src="gradia-assets/images/sign-up/elipse1.png" alt="" />
                      </div>
                      <div className="w-auto p-1.5">
                        <h3 className="font-heading font-semibold text-lg text-gray-900">Darlene Robertson</h3>
                        <p className="text-gray-600 text-sm">Software Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-auto p-6">
                <div className="flex flex-wrap -m-4">
                  <div className="w-full p-4">
                    <p className="text-xl text-black">Elementum, fusce in eu nunc viverra. Diam enim, varius tincidunt orci sed mauris. Eu sed risus tempor lorem ipsum.</p>
                  </div>
                  <div className="w-full p-4">
                    <div className="flex flex-wrap items-center -m-1.5">
                      <div className="w-auto p-1.5">
                        <img src="gradia-assets/images/sign-up/elipse2.png" alt="" />
                      </div>
                      <div className="w-auto p-1.5">
                        <h3 className="font-heading font-semibold text-lg text-gray-900">Devon Lane</h3>
                        <p className="text-gray-600 text-sm">UI/UX Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default UserLoginForm
