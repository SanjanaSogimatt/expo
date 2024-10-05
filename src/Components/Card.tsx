export const Card = ({ bgcolor='white',svgIcon, title}:any) => {
    return (
        <div className="w-3/4 h-full border-black border-2 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] "
            style={{ backgroundColor: bgcolor }}
        >
            <a href="" className="block cursor-pointer">
                <article className="w-full h-full">
                    <div className="px-6 py-5 text-left h-full">
                        <figure className="w-full h-1/2">
                            {svgIcon}
                        </figure>
                        <h1 className="text-[32px] mb-4 font-SpaceGrotesk">{title}</h1>
                        <p className="text-l m-4 font-SpaceGrotesk">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac rutrum dui, nec porta ex. Curabitur auctor orci lacus, sit amet iaculis ante dapibus ac. Cras sodales mauris quis est varius, a scelerisque ligula imperdiet. Praesent nec elit iaculis, tincidunt lorem nec, maximus quam. Donec justo enim, pellentesque nec tincidunt et, tincidunt sagittis justo.
                        </p>

                    </div>
                </article>
            </a>
        </div>

    )
}
