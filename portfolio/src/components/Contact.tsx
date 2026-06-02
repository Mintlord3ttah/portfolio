
export default function Contact() {
  return (
    <div className="flex items-center justify-center flex-col gap-4 max-w-4xl">
        <h2 className="text-orange-700 text-center text-6xl">Hire For Your Next Big Project</h2>
        <p className=" text-neutral-500 text-center mt-8 text-lg">I am currently open to new opportunities and projects. If you are interested in working with me, please feel free to reach out to me through the contact form below or via email at <a href="mailto:mintlordettah@gmail.com" className="text-orange-700 hover:underline">
          mintlordettah@gmail.com
        </a>.</p>

        <div className="flex max-[700px]:flex-col rounded-2xl gap-4 mt-12 bg-orange-200 text-gray-800 w-full">
            <div className="bg-gray-400  rounded-2xl w-full">
                <img src="/coffee-code.jfif" alt="contact" className="size-full rounded-2xl object-cover" />
            </div>
            
            <div className="size-full p-8 max-[400px]:p-4 flex flex-col  gap-8">
                <div className="w-full">
                    <h3 className="text-2xl font-bold">Let's Work Together!</h3>
                    <p className="mt-4 text-neutral-500 text-sm">Whether you have a project in mind or just want to say hello, I'm here to listen. Don't hesitate to get in touch, and let's create something amazing together!</p>
                </div>
                <form action="https://formspree.io/f/xkgblybk" method="post" className="resize-none" >
                    <div className="flex flex-col gap-4">
                        <input type="text" name="name" required placeholder="Your Name" className="bg-white text-neutral-500 placeholder:text-neutral-500 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                        <input type="email" name="email" required placeholder="Your Email" className="bg-white text-neutral-500 placeholder:text-neutral-500 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                        <select name="reason" id="reason" required className="bg-white text-neutral-500 placeholder:text-neutral-500 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500">
                            <option value="">Select a reason</option>
                            <option value="hire">Hire</option>
                            <option value="consulting">Consulting</option>
                            <option value="collaboration">Collaboration</option>
                        </select>
                        <textarea name="message" required placeholder="Your Message" className="bg-white text-neutral-500 placeholder:text-neutral-500 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500" rows={4}></textarea>
                        <button type="submit" className="bg-orange-700 text-white py-2 px-4 rounded-lg hover:bg-orange-800 transition duration(3) ease-in-out">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
