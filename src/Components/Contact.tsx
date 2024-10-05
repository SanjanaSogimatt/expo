import Input from "./Input"
import Button from "./Button"

export default function Contact() {
    return (
        <>
        <div className="flex flex-col justify-center p-6 m-4" id="contact">
            <div className="flex flex-col items-start">
                <h1 className="text-4xl md:text-7xl font-SpaceGrotesk font-bold p-2">Ready to Start your Project?</h1>
                <p className="font-SpaceGrotesk p-2">We're eager to hear about project. Let's start a conversation today and embrak on a journey to bild somethings amazing together. Reach out to us below and let's make your vision a digital reality</p>
            </div>
            <div className="flex justify-center m-4">
                <form action="">
                    <div className="m-4">
                        <Input />
                    </div>
                    <div className="m-4">
                        <Input />
                    </div>
                    <div className="m-4">
                        <Input />
                    </div>
                    <Button text={'Submit'} />
                </form>
            </div>
            </div>
        </>
    )
}