
import { HiHome, HiMagnifyingGlass, HiPlayCircle, HiStar, HiTv } from "react-icons/hi2";
import logo from '../assets/Images/logo.png';

import { useState } from "react";
import { HiDotsVertical, HiPlus } from "react-icons/hi";
import HeaderItem from "./headerItem";
function Header() {
    const [toggel, setToggel] = useState(false)
    const menu = [
        { name: 'Home', icon: HiHome },
        { name: 'Search', icon: HiMagnifyingGlass },
        { name: 'Watchlist', icon: HiPlus },
        { name: 'Originals', icon: HiStar },
        { name: 'Movies', icon: HiPlayCircle },
        { name: 'Series', icon: HiTv },

    ]
    return (
        <>
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-5">
                    <img src={logo} alt="logo" className='w-[80px] md:w-[120px] object-cover' />
                    <div className="gap-8 hidden md:flex">
                        {menu.map((item) => (
                            <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
                        ))}
                    </div>
                    <div className="md:hidden flex gap-5">
                        {menu.map((item, index) => index < 3 && (
                            <HeaderItem key={item.name} name={''} Icon={item.icon} />
                        ))}
                        <div className="md:hidden">
                            <div onClick={()=>setToggel(!toggel)}>
                                <HeaderItem name="" Icon={HiDotsVertical} />
                            </div>
                            {toggel ?
                                <div className="absolute bg-[#131313] pb-3 pl-5 pr-10 mt-2 ml-2 border-[#333636] border-[1px] rounded">
                                    {menu.map((item, index) => index > 2 && (
                                        <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
                                    ))}
                                </div>
                                : null
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                        alt="pfp" className="w-[40px] rounded-full" />
                </div>
            </div>
        </>
    )
}

export default Header