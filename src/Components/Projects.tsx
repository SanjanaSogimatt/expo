import Button from "./Button"
import ImageCard from "./ImageCard"

export const Projects = () => {
    return (
        <>
            <div className="bg-purple border-black border-y-2" id="project">
                {/* Center the title and description */}
                <div className="flex flex-col items-center m-6">
                    <h1 className="font-bold font-SpaceGrotesk text-4xl p-4 text-center">Our Projects</h1>
                    <p className="font-semibold font-SpaceGrotesk p-4 text-center">Check out some cool projects we've done in the past</p>
                </div>
                
                
                {/* Center the grid of projects */}
                <div className="flex justify-center"> {/* Center the grid horizontally */}
                    
                    <div className="grid grid-cols-1 w-full md:w-3/4 "> {/* Adjust grid width for responsiveness */}
                        {/* First Project */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-5">
                            <div className="text-start">
                                <h1 className="font-bold font-SpaceGrotesk text-2xl p-4">Ayshmaan, Digitalizing Healthcare Monitoring</h1>
                                <p className="font-light font-SpaceGrotesk p-4">
                                    Ayshmaan is a healthcare monitoring system that uses IoT sensors to monitor patient vitals and alert healthcare providers in case of an emergency. The system is designed to be user-friendly and easy to use, with a simple interface that allows patients to track their vitals and receive alerts when their vitals are outside of normal range. The system also includes a mobile app that allows patients to track their vitals on the go and receive alerts on their phone.
                                </p>
                                <Button text={'Know more'} />
                            </div>
                            <div className="my-5">
                                <ImageCard picture={'./proj1.jpg'} />
                            </div>
                        </div>

                        {/* Second Project */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-5">
                            <div className="my-5">
                            <ImageCard picture={'./crypto.jpg'} />
                            </div>
                            <div className="text-start">
                                <h1 className="font-bold font-SpaceGrotesk text-2xl p-4">Black dot, Redefining finance in Web3</h1>
                                <p className="font-light font-SpaceGrotesk p-4">
                                    Black dot is a decentralized finance platform that allows users to trade, lend, and borrow digital assets on the blockchain. The platform is designed to be secure, transparent, and easy to use, with a simple interface that allows users to trade assets with just a few clicks. The platform also includes a mobile app that allows users to trade assets on the go and access their funds from anywhere in the world.
                                </p>
                                <Button text={'Know more'} />
                            </div>
                        </div>

                        {/* Third Project */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-5">
                            <div className="text-start">
                                <h1 className="font-bold font-SpaceGrotesk text-2xl p-4">Mastering the Art of Digital Engagement</h1>
                                <p className="font-light font-SpaceGrotesk p-4">
                                    Mastering the Art of Digital Engagement is a digital marketing campaign that uses social media, email, and other online channels to engage customers and drive sales. The campaign is designed to be interactive, engaging, and fun, with a focus on creating a positive customer experience. The campaign includes a series of online events, contests, and promotions that encourage customers to interact with the brand and share their experiences with others.
                                </p>
                                <Button text={'Know more'} />
                            </div>
                            <div className="my-5">
                                <ImageCard picture={'./proj3.jpg'}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Button/> */}
            </div>
        </>
    );
};
