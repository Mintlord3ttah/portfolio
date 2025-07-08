
export default function Contact() {
  return <section className="sec-bg flex flex-col px-24 pt-12 justify-between gap-20 max-[1200px]:px-8 max-[1000px]:flex-col max-[1000px]:items-center">
    <section className='flex flex-col items-center justify-center w-full gap-8 pt-40 max-[620px]:pt-24'>
      <h1 className=' text-8xl flex text-amber-700 text-center'>Let's Discuss It</h1>
      <p className='text-2xl text-center text-gray-700'>I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. You are just a message away!</p>
        <form className='flex flex-col items-center w-full max-w-md mx-auto mt-8'>
          <input type="text" placeholder="Your Name" className='border border-gray-300 p-2 mb-4 w-full' />
          <input type="email" placeholder="Your Email" className='border border-gray-300 p-2 mb-4 w-full' />
          <textarea placeholder="Your Message" className='border resize-none border-gray-300 p-2 mb-4 w-full' rows={4} />
          <button className="mt-6 px-6 py-2 bg-[#c46b31] cursor-pointer text-white rounded-full hover:bg-amber-600 transition duration-300">Send Message</button>
          </form>
    </section>
  </section>
}
