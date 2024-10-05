export default function NumberCard()
{
    return(
        <>
       <div className="w-full bg-[#000] my-10">
                <div className="grid grid-cols-2 md:grid-cols-4 text-center p-6">
                    <div className="text-[#fff] mx-4 p-2">
                        <h1 className="text-4xl font-bold">7+</h1>
                        <p>Years in business</p>
                    </div>
                    <div className="text-[#fff] mx-4 p-2">
                        <h1 className="text-4xl font-bold">100+</h1>
                        <p>Projects Completed</p>
                    </div>
                    <div className="text-[#fff] mx-4 p-2">
                        <h1 className="text-4xl font-bold">50+</h1>
                        <p>Clients Served</p>
                    </div>
                    <div className="text-[#fff] mx-4 p-2">
                        <h1 className="text-4xl font-bold">10+</h1>
                        <p>Awards Won</p>
                    </div>
                </div>
            </div>
        </>
    )
}