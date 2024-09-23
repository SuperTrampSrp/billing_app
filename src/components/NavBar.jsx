import { useState, } from "react"
import { menuData } from "../constants/data";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const NavBar = () => {

    const [openPrimaryIndex, setOpenPrimaryIndex] = useState(null);
    const [openSecondaryIndex, setOpenSecondaryIndex] = useState({});

    // Toggle the primary dropdown
    const togglePrimaryDropdown = (index) => {
        setOpenPrimaryIndex((prevIndex) =>
            prevIndex === index ? null : index
        );
        setOpenSecondaryIndex({});
    };

    const handleMouseEnter = (primaryIndex, secondaryIndex) => {
        setOpenSecondaryIndex((prevState) => ({
            ...prevState,
            [primaryIndex]: secondaryIndex,
        }));
    };

    const handleMouseLeave = (primaryIndex) => {
        setOpenSecondaryIndex((prevState) => ({
            ...prevState,
            [primaryIndex]: null,
        }));
    };
    return (
        <nav className="relative p-3 m-0 bg-teal-950 ">
            <ul className="flex space-x-6">
                {menuData.map((menuItem, primaryIndex) => (
                    <li key={primaryIndex} className="relative group" onMouseLeave={() => handleMouseLeave(primaryIndex)}>
                        {/* Toggle primary dropdown */}
                        <button className="py-2 px-4 text-slate-50 border border-none rounded-lg  hover:shadow-teal-600 shadow-md transition-colors" onClick={() => togglePrimaryDropdown(primaryIndex)}>
                            {menuItem.title}

                            <ExpandMoreIcon style={{ color: "white" }} />
                        </button>

                        {/* Conditionally render the primary dropdown */}
                        {openPrimaryIndex === primaryIndex && (
                            <ul className="absolute left-0 bg-teal-950 border border-white rounded-tr-xl shadow-lg group-hover:block hidden z-10">
                                {menuItem.submenu && menuItem.submenu.map((subItem, secondaryIndex) => (
                                    <li key={secondaryIndex} className="relative group align-middle w-36" onMouseEnter={() =>
                                        handleMouseEnter(primaryIndex, secondaryIndex)
                                    }>
                                        {subItem.submenu ? (
                                            <>
                                                {/* Toggle secondary dropdown */}
                                                <button
                                                    className="block py-2 px-4 text-slate-50 hover:bg-teal-800 border-teal-200 rounded-tr-xl w-full text-left transition-colors"
                                                >
                                                    {subItem.title}
                                                    <ArrowForwardIosIcon style={{ color: "white", height: "15px", float: "right", marginTop: "6px" }} />
                                                </button>


                                                {/* Conditionally render secondary dropdown */}
                                                {openSecondaryIndex[primaryIndex] === secondaryIndex && (
                                                    <ul className="absolute left-full top-0 mt-2 bg-teal-900 border-white rounded-tr-xl shadow-lg z-10 hidden group-hover:block w-full">
                                                        {subItem.submenu.map((option, optionIndex) => (
                                                            <li key={optionIndex}>
                                                                <span className="block py-2 px-4 text-slate-50 hover:bg-teal-800 border-teal-200 rounded-tr-xl transition-colors cursor-pointer">
                                                                    {option}
                                                                </span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </>
                                        ) : (
                                            <span className="block py-2 px-4 text-slate-50 hover:bg-teal-800 border-teal-200 rounded-tr-xl transition-colors">
                                                {subItem.title}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar