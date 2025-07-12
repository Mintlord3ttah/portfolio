
export default function FormComponent() {
  return <div className="w-full max-w-md mx-auto">
    <div className="my-4 pb-4 border-b border-b-gray-300 text-xs flex flex-col gap-3.5 " >
        <p>GitHub: <a className="text-blue-600 hover:text-amber-700" href="https://github.com/Mintlord3ttah">https://github.com/Mintlord3ttah</a></p>
        <p>LinkedIn: <a className="text-blue-600 hover:text-amber-700" href="https://www.linkedin.com/in/mintlord3ttah/">https://www.linkedin.com/in/mintlord3ttah/</a></p>
        <p>Email: <a className="text-blue-600 hover:text-amber-700" href="mailto:mintlord3ttah@gmail.com">mintlord3ttah@gmail.com</a></p>
        <p>Phone: <a className="text-blue-600 hover:text-amber-700" href="tel:+2349025377960">+234-902-537-7960</a></p>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Contact Me</h2>
        <p className="text-lg text-gray-600 mb-6">Feel free to reach out for any inquiries or collaborations. I'm here to help!</p>
      </div>
     <form action={"https://formspree.io/f/xkgblybk"} method="POST" className='flex flex-col items-center w-full max-w-md mx-auto mt-8'>
  <input type="text" name="name" required placeholder="Your Name" className='border border-gray-300 p-2 mb-4 w-full' />
  <input type="email" name="email" required placeholder="Your Email" className='border border-gray-300 p-2 mb-4 w-full' />
  <textarea name="message" required placeholder="Your Message" className='border resize-none border-gray-300 p-2 mb-4 w-full' rows={4} />
  <button className="mt-6 px-6 py-2 bg-[#c46b31] cursor-pointer text-white rounded-full hover:bg-amber-600 transition duration-300">Send Message</button>
  </form>
  </div>
}


