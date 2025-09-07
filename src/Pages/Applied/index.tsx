import { useEffect, useState } from "react"
import { useUserApplication } from "../../hooks/useUserApplication"
import { Application } from "../../entity/application"
import AppsTable from "./Components/AppsTable"

const Applied = () => {
    const { getApplication } = useUserApplication()
    const [apps, setApps] = useState<Application[]>([])
    const handleGetApplications = async () => {
        const { data, error, status } = await getApplication()
        if (status === 'success' && data != null) {
            const { applications } = data
            
            const _applications: Application[] = applications.map((elem: any) => ({ ...elem}))
            setApps(_applications)
        } else {
            console.log(error);
        }
    }
    useEffect(() => {
        handleGetApplications()
    }, [])
    return <section className="flex flex-col gap-10 w-full h-full bg-slate-100 rounded-lg p-10">
        <section>
            <nav>
                <ul className="flex gap-10">
                    <li className="border-b border-blue-400 cursor-pointer">postulaciones</li>
                    <li className="border-b border-green-400 cursor-pointer">Guardados</li>
                </ul>
            </nav>
        </section>
        <div className="h-full max-h-full">
            {
                apps.length > 0 ?
                    <AppsTable apps={apps}/>
                    : <p className="text-xl font-bold text-zinc-400">Las vacantes que apliques apareceran aqui</p>
            }
        </div>

    </section>
}
export default Applied