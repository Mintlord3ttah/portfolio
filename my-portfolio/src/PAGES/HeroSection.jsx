import Button from "../UI/Button";

export default function HeroSection({ flexCenter }) {
    return (<div className="container-hero w-full flex justify-center px-4 py-8">
        <div className={`${flexCenter} max-w-3xl gap-7`}>
            <h1 className="md:text-5xl text-5xl text-center md:font-bold font-medium">Make your brand stand out with our professional services!</h1>
            <p className="text-center">Hi there, I'm Mint, a professional web developer. I can create you a sleek and modern website that will make your brand stand out from the crowd.</p>
            <Button>See Projects &rarr;</Button>
        </div>
    </div>);
}
