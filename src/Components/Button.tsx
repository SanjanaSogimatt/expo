export default function Button({text}:any) {
    return (

        <div className="flex justify-evenly space-x-6">
            <button
                className="h-12 border-black border-2 p-2.5 bg-[#fff] hover:bg-[#A6FAFF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md"
            >
                {text}
            </button>
        </div>

    )
}