'use client'

import Container from "../Container";

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { 
    GiBarn,
    GiBoatFishing, 
    GiCastle, 
    GiCaveEntrance, 
    GiDesert, 
    GiForestCamp, 
    GiIsland, 
    GiWindmill 
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'this property is in the beach side'
    },
    {
        label: 'Winmills',
        icon: GiWindmill,
        description: 'this property is in a windmills side'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'this property is modern'
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'this property is in the mountains'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'this property is in a pool side'
    },
    {
        label: 'Islands',
        icon: GiIsland,
        description: 'this property is in an island'
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'this property is in a lake side'
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'this property is in a skiing side'
    },
    {
        label: 'Casltes',
        icon: GiCastle,
        description: 'this property is in a castle side'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'this property is in a forest camp'
    },
    {
        label: 'Arctic',
        icon: BsSnow,
        description: 'this property is in a snow'
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'this property is in a cave'
    },
    {
        label: 'Desert',
        icon: GiDesert,
        description: 'this property is in the desert'
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description: 'this property is in the barn'
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description: 'this property is luxurious'
    },
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === "/";

    if (!isMainPage){
        return null;
    }
    return (
        <Container>
            <div
                className="
                    flex
                    flex-row
                    justify-between
                    items-center
                    pl-4
                    overflow-x-auto
                "
            >
                {categories.map((item) => (
                    <CategoryBox 
                        key={item.label}
                        label={item.label}
                        icon={item.icon}
                        selected={category === item.label}
                    />
                ))}
            </div>
        </Container>
    );
}
 
export default Categories;