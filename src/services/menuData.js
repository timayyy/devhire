//Icons
import { FiSearch, FiHeart } from "react-icons/fi";

// Dashboard side nav data
export const MenuData = [
    {
        label: "Home",
        icon: <FiSearch size={12} />,
        to: "/"
    },
    {
        label: "Favorites",
        icon: <FiHeart size={12} />,
        to: "/favorites"
    },
]