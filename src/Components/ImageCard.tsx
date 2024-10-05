export default function ImageCard({picture}:any) {
    return (
        <>
            <div className="w-full h-full rounded-md">
                <a href="" className="block cursor-pointer">
                    <article className="w-full h-full">
                        <figure className="w-full h-1/2 border-black border-2 shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
                            <img
                                src={picture}
                                alt="thumbnail"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                    </article>
                </a>
            </div>
        </>
    )
}