import { FaHeart } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="h-[70px]  w-full px-[60px] flex items-center justify-between ">
            <Link href="/">
                <img src="/poke-logo.png" alt="" width="150px" />
            </Link>
            
            <div className="flex items-center gap-5">
                <FaHeart size={40} color={"#FFCB00"} />
                <Link href={"/contact"} className="font-bold">Contact</Link>
            </div>
        </div>
    )
}
export default Navbar;
