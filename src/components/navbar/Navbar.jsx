import { Clipboard, GraduationCap, Heart, Pause, Play, User } from "lucide-react"
import { useEffect, useState } from "react"
import './navbar.css'
const Navbar = () => {
    const messages = [
        "15% Student Discount",
        "Free Shipping on Orders Over $50",
        "New Summer Collection Out Now!",
        "Join Our Membership for Rewards"
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [pause, setPause] = useState(true)


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [messages.length]);



    const handlePause = () => {
        setPause(!pause)
    }

    return (
        <>

            <div className="bg-gray-100 py-4 flex gap-4 justify-between ">
                <div></div>
                <div >
                    <p className="text-xs flex gap-1 justify-center items-center font-semibold select-none">{messages[currentIndex]} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                    </p>
                </div>

                <div onClick={handlePause} className="cursor-pointer select-none mr-15 " >
                    {
                        pause ? <Pause size={20}></Pause> : <Play size={20}></Play>
                    }
                </div>

            </div>


            <div>
                <Fixednav> </Fixednav>
            </div>



        </>
    )
}





const Fixednav = () => {
    const categoryMen = [
        "Women",
        "Men",
        "Accessories",
        "Explore"
    ]
    return (
        <div className="mt-4 flex justify-between mx-10">
            <div className="flex gap-7">
                {
                    categoryMen.map((singleCategory, index) => {
                        return <p className="font-semibold" key={index}>{singleCategory}</p>
                    })
                }
            </div>


            {/* middle of teh */}
            <div>
                <h1 className="text-2xl font-bold">GYMSHARK</h1>
            </div>


            {/* right corner  */}


            <div className="flex gap-6 items-center mr-5">
                <fieldset className="fieldset">

                    <input type="text" className="hover-input-from input w-64 bg-gray-100 text-center px-3 py-2.5 rounded-full " placeholder="What are you looking for tod..." />

                </fieldset>

                <Navicon></Navicon>

            </div>
        </div>
    )
}


const Navicon = () => {
    return (
        <div className="flex gap-8">
            <Heart strokeWidth={1.50} width={20}></Heart>
            <User strokeWidth={1.50} width={20}></User>
            <Clipboard strokeWidth={1.50} width={20}></Clipboard>
        </div>
    )
}
export default Navbar