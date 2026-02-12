export default function ContactForm() {
  return (
    <section className="w-full bg-[#f5f5f5] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <form className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <input
                type="text"
                placeholder="First name"
                className="w-full bg-transparent border-b border-gray-400 focus:border-black outline-none py-3 text-lg placeholder-gray-700"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Last name"
                className="w-full bg-transparent border-b border-gray-400 focus:border-black outline-none py-3 text-lg placeholder-gray-700"
              />
            </div>
          </div>

          <div>
            <input
              type="email"
              placeholder="Email id:"
              className="w-full bg-transparent border-b border-gray-400 focus:border-black outline-none py-3 text-lg placeholder-gray-700"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Phone:"
              className="w-full bg-transparent border-b border-gray-400 focus:border-black outline-none py-3 text-lg placeholder-gray-700"
            />
          </div>

          <div>
            <textarea
              placeholder="Message:"
              rows={4}
              className="w-full bg-transparent border-b border-gray-400 focus:border-black outline-none py-3 text-lg placeholder-gray-700 resize-none"
            />
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="bg-black text-white px-10 py-3 text-sm tracking-wide hover:bg-gray-800 transition-all duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
