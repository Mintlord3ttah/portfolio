
export default function FormComponent() {
  return <form action={"https://formspree.io/f/xkgblybk"} method="POST" className='flex flex-col items-center w-full max-w-md mx-auto mt-8'>
  <input type="text" name="name" placeholder="Your Name" className='border border-gray-300 p-2 mb-4 w-full' />
  <input type="email" name="email" placeholder="Your Email" className='border border-gray-300 p-2 mb-4 w-full' />
  <textarea name="message" placeholder="Your Message" className='border resize-none border-gray-300 p-2 mb-4 w-full' rows={4} />
  <button className="mt-6 px-6 py-2 bg-[#c46b31] cursor-pointer text-white rounded-full hover:bg-amber-600 transition duration-300">Send Message</button>
  </form>
}


