import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { BiPlus } from "react-icons/bi"
import { formatDateToSpanish, numberToCurrency } from "../../../../utils/formatting"
import { ApplicationStatus } from "../../../../types/application";
import { TbEye } from "react-icons/tb";
import { AppsTableProps } from "./AppsTable.props";

const AppsTable:React.FC<AppsTableProps> = ({apps}) => {
    const applicationStatusColors = {
            Received: { bg: "#E0E0E0", text: "#616161" }, // gris claro / gris oscuro
            Viewed: { bg: "#BBDEFB", text: "#1976D2" }, // azul claro / azul fuerte
            InProcess: { bg: "#FFE082", text: "#F57F17" }, // amarillo claro / naranja fuerte
            Rejected: { bg: "#FFCDD2", text: "#C62828" }, // rojo claro / rojo fuerte
            Accepted: { bg: "#C8E6C9", text: "#2E7D32" }, // verde claro / verde fuerte
            Cancelled: { bg: "#D7CCC8", text: "#4E342E" }, // marrón claro / marrón fuerte
            OnHold: { bg: "#FFE0B2", text: "#EF6C00" }  // naranja claro / naranja fuerte
        } as const;
        const handleStatusColor = (status: ApplicationStatus): { bg: string; text: string } => {
            return status == "Viewed" || status == "InProcess" ? applicationStatusColors["Viewed"] : status == "Rejected" || status === "Cancelled" ? applicationStatusColors["Cancelled"] :
                applicationStatusColors[status];
        }
    return <TableContainer component={Paper} elevation={0}>
        <Table className="bg-sl" size="small" sx={{
            minWidth: 650, borderCollapse: "collapse",
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
                {apps.map((job) => (
                    <TableRow
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
                        <TableCell sx={{ fontWeight: 900 }} align="left">{job.job.title}</TableCell>
                        <TableCell sx={{ fontWeight: 900 }} align="left">
                            <ul className="flex gap-2 flex-wrap text-xs">
                                {job.job.benefits.slice(0, 3).map((elem, index) => (
                                    <li
                                        key={index}
                                        className="py-1 px-3 rounded-full bg-emerald-100 text-emerald-500"
                                    >
                                        {elem}
                                    </li>
                                ))}

                                {job.job.benefits.length > 3 && (
                                    <li className="py-1 px-3 rounded-full bg-emerald-100 text-emerald-500 flex items-center gap-1">
                                        <BiPlus size={14} />
                                        {job.job.benefits.length - 3}
                                    </li>
                                )}
                            </ul>
                        </TableCell>
                        <TableCell align="left">{formatDateToSpanish(job.applied_at)}</TableCell>
                        <TableCell align="left">{numberToCurrency(job.job.salary)}</TableCell>
                        <TableCell sx={{ py: 2, width: 150 }} align="left">
                            <div
                                style={{
                                    backgroundColor: handleStatusColor(job.status as ApplicationStatus).bg,
                                    color: handleStatusColor(job.status as ApplicationStatus).text
                                }}
                                className={`
                                                border
                                                inline
                                                rounded-lg
                                                p-2
                                                font-bold`}
                            >{job.status}</div>
                        </TableCell>
                        <TableCell sx={{ width: 50, ":hover": { bgcolor: '#bfdbfe' } }} align="left">
                            <TbEye size={25} className="text-zinc-500" />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        <p className="py-2 text-xs text-zinc-500 text-center">Lista de postulaciones</p>
    </TableContainer>
}
export default AppsTable;