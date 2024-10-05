import Collage from "./Collage"
export default function Hero() {
    return (
        <>
            <div className="flex flex-col md:flex-row h-screen bg-purple border-black border-b-2" id="home">
                <div className="flex items-center justify-center p-4 md:w-1/2">
                    <div>
                        <h1 className="text-4xl md:text-7xl font-SpaceGrotesk font-bold p-2">
                            Experience a New World of Digital Innovation
                        </h1>
                        <p className="font-SpaceGrotesk p-2">
                            We are a multi-disciplinary agency, specialized in delivering a spectrum of IT skills ranging from UI/UX design to software development to digital marketing and advertising, empowering businesses with the right tools and technologies to grow and scale.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center p-4 md:w-1/2">
                    <div>
                    <svg width="58" height="53" viewBox="0 0 58 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8753 39C16.0372 32.7556 13.5468 26.5284 8.08628 22.7701C5.9718 21.3148 3.46688 20.7849 1 20.3446C11.0219 19.9936 14.5012 9.28774 15.8956 1C15.4114 8.43308 19.2189 16.4619 27 17.2028C19.2541 21.8538 16.5956 30.3885 15.8753 39Z" fill="white" stroke="#1D1D1D" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M57 40.0135C53.3749 42.9522 49.8537 47.4864 48.2052 52C47.1023 46.5025 43.8306 42.1863 39 39.5546C44.1829 39.0043 48.1132 32.6573 49.3515 28C49.5077 32.6342 53.0485 37.5415 57 40.0135Z" fill="white" stroke="#1D1D1D" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        <Collage />
                        {/* <h1 className="text-2xl font-bold">Right Column</h1>
                        <p>This is the content of the right column.</p> */}
                    </div>
                </div>
            </div>
        </>
    )
}