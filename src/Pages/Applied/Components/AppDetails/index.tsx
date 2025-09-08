import { Box, CircularProgress, Typography } from "@mui/material";
import { applicationStatusColors } from "../../../../data/Status";
import { AppDetailsProps } from "./AppDetails.props";
import { LiaIndustrySolid } from "react-icons/lia";
import { LuCircleDashed } from "react-icons/lu";
import { FiClock } from "react-icons/fi";
import { MdOutlineBedtime, MdOutlineChecklistRtl } from "react-icons/md";
import { TbFileDescription } from "react-icons/tb";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const AppDetails: React.FC<AppDetailsProps> = ({ job, status }) => {
    const [expandDesc, setExpandDesc] = useState<boolean>(false);
    const statusMapping = {
        Received: { progress: 14, label: "Recibida" },
        Viewed: { progress: 28, label: "Vista" },
        InProcess: { progress: 42, label: "En Proceso" },
        Rejected: { progress: 100, label: "Rechazada" },
        Accepted: { progress: 100, label: "Aceptada" },
        Cancelled: { progress: 100, label: "Cancelada" },
        OnHold: { progress: 100, label: "En Espera" },
    };
    const currentStatus = statusMapping[status] || { progress: 0, label: "Desconocido" };

    return <div className="p-6">
        <div className="flex flex-col gap-2 py-2">
            <div className="flex items-center gap-2 text-xs text-zinc-500">
                <div className={`w-12 h-12 bg-zinc-100 border ${job.company_logo ? 'border-zinc-100' : 'border-zinc-200'}`}>
                    {job.company_logo ? <img className="" src={job.company_logo} /> : undefined}
                </div>
                <p>{job.company_name}</p>
            </div>
            <h1 className="text-2xl text-zinc-800 font-bold">{job.title}</h1>
        </div>
        <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2 text-zinc-700">
                <LiaIndustrySolid className="text-zinc-500" />Industria
                <p className="px-2 rounded-sm bg-zinc-200">{job.industry}</p>
            </li>
            <li className="flex items-center gap-2 text-zinc-700">
                <FiClock className="text-zinc-500" />Tipo
                <p className="px-2 rounded-sm bg-zinc-200">{job.contract_type}</p>
            </li>
            <li className="flex items-center gap-2 text-zinc-700">
                <MdOutlineBedtime  className="text-zinc-500"/>
                Horario
                <p className="px-2 rounded-sm bg-zinc-200">{job.schedule}</p>
            </li>
            <hr />
            <li className="flex flex-col gap-2">
                <div className="flex gap-2 items-center text-zinc-700">
                    <MdOutlineChecklistRtl />
                    Beneficios
                </div>
                <ul className="flex gap-2">
                    {job.benefits.map(benefit=>(
                        <li className="px-2 rounded-sm bg-emerald-100 text-emerald-500">{benefit}</li>
                    ))}
                </ul>
            </li>
            <hr />
            <li className="flex flex-col gap-4">
                <div className="flex gap-2 items-center text-zinc-700">
                    <TbFileDescription />
                    Descripcion
                </div>
                {job.description.length> 200? <p className="flex flex-col items-center justify-normal">
                    {expandDesc?job.description:`${job.description.substring(0, 200)}...`}
                    <button onClick={()=>setExpandDesc(!expandDesc)}>
                        {expandDesc?<p className="flex items-center text-zinc-400">Ver menos<FaChevronUp /></p>:<p className="flex items-center text-zinc-400">Ver más<FaChevronDown /></p>}
                    </button>
                </p>:job.description}
                {/* <p className="text-sm">{job.description}</p> */}
            </li>
            <hr />
            <li className="flexflex-col gap-4">
                <Typography sx={{ color: '#3f3f46', display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LuCircleDashed /> Estado 
                    <p className="px-4 rounded-sm" style={{background:applicationStatusColors[status].bg, color:applicationStatusColors[status].text}}>{currentStatus.label}</p>
                </Typography>
                <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%' }}>

                    <CircularProgress
                        variant="determinate"
                        value={currentStatus.progress}
                        size={150}
                        sx={{ color: applicationStatusColors[status].bg }}
                        thickness={10}
                    />
                    <Box
                        sx={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant="caption" component="div" color="text.secondary">
                            {`${Math.round(currentStatus.progress)}%`}
                        </Typography>
                    </Box>
                </Box>
            </li>
        </ul>
    </div>
}
export default AppDetails;