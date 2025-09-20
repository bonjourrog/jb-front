    import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
    import { BiPlus } from "react-icons/bi"
    import { formatDateToSpanish, numberToCurrency } from "../../../../utils/formatting"
    import { ApplicationStatus } from "../../../../types/application";
    import { TbEye } from "react-icons/tb";
    import { AppsTableProps } from "./AppsTable.props";
    import AppDetails from "../AppDetails";
    import { useState } from "react";
    import { Job } from "../../../../entity/job";
    import { applicationStatusColors } from "../../../../data/Status";

    const AppsTable: React.FC<AppsTableProps> = ({ apps }) => { 
        const [jobSelected, setJobSelected] = useState<{job:Job, status: string} | null>(null)
        
        const handleStatusColor = (status: ApplicationStatus): { bg: string; text: string } => {
            return status == "Viewed" || status == "InProcess" ? applicationStatusColors["Viewed"] : status == "Rejected" || status === "Cancelled" ? applicationStatusColors["Cancelled"] :
                applicationStatusColors[status];
        }
        const handleSelectedJob = (job: Job, status:ApplicationStatus) => {
            
            setJobSelected({ job:job, status: status})
        }
        return <TableContainer component={Paper} elevation={0} sx={{overflowX:'auto', width: '100%', maxWidth:'100%'}}>
            {jobSelected ?
                <>
                    <div onClick={()=>setJobSelected(null)} className="fixed bg-zinc-950 opacity-5 w-screen h-screen top-0 left-0">Cerrar</div>
                    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[96%] md:w-[90%] lg:w-[50em] h-[70vh] bg-white shadow-lg shadow-zinc-200 rounded-lg overflow-y-scroll">
                        <AppDetails job={jobSelected.job} status={jobSelected.status as ApplicationStatus} />
                    </div>
                </>
                : undefined}
            <Table size="small" sx={{
                minWidth: 1000, borderCollapse: "collapse",
                "& td, & th": {
                    color: '#797979',
                    cursor: 'pointer',
                    padding: '20px',
                },
                "& th": {
                    backgroundColor: "white",
                    color: "#000",
                    fontWeight: 900,
                },
                "& td": {
                    backgroundColor: "transparent", // por defecto sin color
                }
            }} aria-label="simple table">
                <TableHead sx={{
                    '& .MuiTableCell-root': {
                        py: 2
                    },
                }}>
                    <TableRow>
                        <TableCell align="left">Titulo</TableCell>
                        <TableCell align="left">Beneficios</TableCell>
                        <TableCell align="left">Fecha de postulacion</TableCell>
                        <TableCell align="left">Sueldo</TableCell>
                        <TableCell align="left">Estado</TableCell>
                        <TableCell align="left">Ver</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {apps.map((job) => {
                        console.log(job.status);
                        
                        return <TableRow
                            key={job._id}
                            sx={{
                                border: '.1em solid white',
                                px: 10,
                                "&:hover": {
                                    transition: 'all .2s ease-out',
                                    background: 'white',
                                    boxShadow: '0em .8em 1.6em rgba(0, 0, 0, 0.1)',
                                    cursor: "pointer"
                                }
                            }}
                        >
                            <TableCell sx={{ fontWeight: 900 }} align="left">{job.title}</TableCell>
                            <TableCell sx={{ fontWeight: 900 }} align="left">
                                <ul className="flex gap-2 flex-wrap text-xs">
                                    {job.benefits.slice(0, 3).map((elem, index) => (
                                        <li
                                            key={index}
                                            className="py-1 px-3 rounded-full bg-emerald-100 text-emerald-500"
                                        >
                                            {elem}
                                        </li>
                                    ))}

                                    {job.benefits.length > 3 && (
                                        <li className="py-1 px-3 rounded-full bg-emerald-100 text-emerald-500 flex items-center gap-1">
                                            <BiPlus size={14} />
                                            {job.benefits.length - 3}
                                        </li>
                                    )}
                                </ul>
                            </TableCell>
                            <TableCell align="left">{formatDateToSpanish(job.applied_at)}</TableCell>
                            <TableCell align="left">{numberToCurrency(job.salary)}</TableCell>
                            <TableCell sx={{ py: 2, width: 150 }} align="left">
                                <div
                                    style={{
                                        backgroundColor: handleStatusColor(job.status ? job.status as ApplicationStatus:"Received").bg,
                                        color: handleStatusColor(job.status ? job.status as ApplicationStatus:"Received").text
                                    }}
                                    className={`
                                                    border
                                                    inline
                                                    rounded-lg
                                                    p-2
                                                    font-bold`}
                                >{job.status}</div>
                            </TableCell>
                            <TableCell onClick={() => handleSelectedJob(job, job.status as ApplicationStatus)} sx={{ width: 50, ":hover": { bgcolor: '#bfdbfe' } }} align="left">
                                <TbEye size={25} className="text-zinc-500" />
                            </TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
            <p className="py-2 text-xs text-zinc-500 text-center">Lista de postulaciones</p>
        </TableContainer>
    }
    export default AppsTable;