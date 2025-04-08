import { PiBroomFill, PiCarFill, PiForkKnifeFill, PiHammerFill, PiHeadsetFill, PiPlantFill, PiTruckFill, PiWrenchFill } from "react-icons/pi";
import { Category } from "../types/categories";

export const CATEGORIES_DATA_MOCK:Category[] = [
    {
        id: 1,
        icon: <PiHeadsetFill className='categories__logo' />,
        title: "Atención al Cliente",
        description: "Cajero, representante de ventas, servicio al cliente, recepcionista."
    },
    {
        id: 2,
        icon: <PiForkKnifeFill className='categories__logo' />,
        title: "Alimentos y Bebidas",
        description: "Mesero, cocinero, panadero, barista."
    },
    {
        id: 3,
        icon: <PiTruckFill className='categories__logo' />,
        title: "Reparto y Mensajería",
        description: "Repartidor en moto/bicicleta, mensajero, conductor de delivery."
    },
    {
        id: 4,
        icon: <PiWrenchFill className='categories__logo' />,
        title: "Mantenimiento y Reparaciones",
        description: "Técnico en electrodomésticos, electricista, plomero, mecánico."
    },
    {
        id: 5,
        icon: <PiHammerFill className='categories__logo' />,
        title: "Construcción y Albañilería",
        description: "Albañil, carpintero, herrero, pintor."
    },
    {
        id: 6,
        icon: <PiCarFill className='categories__logo' />,
        title: "Transporte y Movilidad",
        description: "Taxista, conductor de autobús, chofer privado."
    },
    {
        id: 7,
        icon: <PiBroomFill className='categories__logo' />,
        title: "Servicios de Limpieza",
        description: "Personal de limpieza, lavaplatos, mantenimiento de oficinas."
    },
    {
        id: 8,
        icon: <PiPlantFill className='categories__logo' />,
        title: "Agricultura y Trabajo Rural",
        description: "Jornalero, trabajador agrícola, cuidador de animales."
    }
] 
