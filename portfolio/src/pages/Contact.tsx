import FormComponent from "../components/FormComponent";
import Navigators from "../components/Navigators";

export default function Contact() {
  return <section className="sec-bg flex flex-col px-24 max-[500px]:px-4 pt-12 justify-between gap-20 max-[1200px]:px-8 max-[1000px]:flex-col max-[1000px]:items-center">
    <section className='flex flex-col items-center justify-center w-full gap-8 pt-40 max-[620px]:pt-24'>
      <h1 className=' text-8xl max-[490px]:text-6xl flex text-amber-700 text-center'>Let's Discuss It</h1>
      <p className='text-2xl max-[490px]:text-xl text-center '>I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. You are just a message away!</p>
      
      <FormComponent />
    </section>
        <Navigators nav_back="About" />
    
  </section>
}
