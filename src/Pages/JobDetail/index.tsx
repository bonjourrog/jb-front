import { numberToCurrency } from '../../utils/formatting';
import { useJobStore } from '../../stores/jobStore';
import { useEffect } from 'react';
import { useJobs } from '../../hooks/useJobs';
import { Filter } from '../../entity/filter';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import HTMLContent from '../../Components/HTMLContent/inde';
import { HiBookmark, HiCalendar, HiCheckCircle, HiClock, HiDocumentText, HiLocationMarker, HiOfficeBuilding, HiPhone, HiShare } from 'react-icons/hi';

const JobDetail = () => {
    const { company_name, slug } = useParams();
    const job = useJobStore(s => s.job)
    const { getJob, isLoading } = useJobs({} as Filter);

    const handleGetjob = async () => {
        if (!company_name || !slug) {
            toast.error("ocurrio un error, recargue la página o verifique la url")
            return;
        }
        await getJob(company_name, slug)
    }
    const formatSalary = (salary: number) => {
        return numberToCurrency(salary)
    };

    const formatDate = (date: any) => {
        return new Intl.DateTimeFormat('es-MX', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(date));
    };

    const handleClick = (phoneNumber: string, message: string) => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const handleClipboard = () => {

        navigator.clipboard.writeText(`${import.meta.env.VITE_BASE_URL}job/${job.company_name?.replace(" ", "-").toLowerCase()}/${job.slug}`)
            .then(() => {
                toast.success("enlace copiado")
            })
            .catch(() => {
                toast.error("error al copiar el enlace, intente de nuevo o recarge la página")
            });
    }

    useEffect(() => {
        handleGetjob()
    }, [])
    return isLoading ? 'cargando...' : (


        <div className="min-h-screen bg-white">
            <style>{`
                @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideIn {
                from { opacity: 0; transform: translateX(-20px); }
                to { opacity: 1; transform: translateX(0); }
                }
                @keyframes scaleIn {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
                }
                @keyframes shimmer {
                0% { background-position: -1000px 0; }
                100% { background-position: 1000px 0; }
                }
                @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
                }
                .animate-fade-in {
                animation: fadeIn 0.6s ease forwards;
                }
                .animate-slide-in {
                animation: slideIn 0.5s ease forwards;
                }
                .animate-scale-in {
                animation: scaleIn 0.4s ease forwards;
                }
                .animate-float {
                animation: float 3s ease-in-out infinite;
                }
                .glassmorphism {
                background: rgba(255, 255, 255, 0.8);
                backdrop-filter: blur(20px);
                border: 1px solid rgba(93, 108, 247, 0.08);
                }
                .gradient-text {
                background: linear-gradient(135deg, #5d6cf7 0%, #4a59d9 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                }
                .shine-effect {
                position: relative;
                overflow: hidden;
                }
                .shine-effect::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                transition: left 0.5s;
                }
                .shine-effect:hover::before {
                left: 100%;
                }
            `}</style>

            {/* Navigation minimalista */}
            <div className="fixed top-0 left-0 right-0 z-50 glassmorphism">
                <div className="max-w-6xl mx-auto px-6 sm:px-8 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="text-2xl font-bold gradient-text">penasco.io</div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <button onClick={handleClipboard} className="p-2.5 sm:p-3 rounded-full hover:bg-gray-50 transition-all hover:scale-110 active:scale-95">
                            <HiShare className="text-gray-600 text-lg sm:text-xl" />
                        </button>
                        <button
                            // onClick={() => setSaved(!saved)}
                            className="p-2.5 sm:p-3 rounded-full hover:bg-gray-50 transition-all hover:scale-110 active:scale-95"
                        >
                            <HiBookmark
                                className={`text-lg sm:text-xl ${true ? "text-[#5d6cf7]" : "text-gray-900"}`}
                            // style={{ fill: false ? '#5d6cf7' : 'none' }}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="pt-28 sm:pt-32 pb-12 sm:pb-16 px-6 sm:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="animate-fade-in">
                        {/* Company badge */}
                        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#5d6cf7] to-[#4a59d9] rounded-2xl sm:rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity animate-float"></div>
                                <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#aeb5f7] to-[#4a59d9] flex items-center justify-center text-2xl sm:text-4xl shadow-lg overflow-hidden">
                                    {job.company_logo ? <img src={job.company_logo} alt="company logo" /> : <p className='text-sm font-bold text-white'>Logo</p>}
                                </div>
                            </div>
                            <div>
                                <h2 className="text-lg sm:text-xl font-extrabold text-gray-700 mb-0.5 sm:mb-1">{company_name?.replace("-", " ").toUpperCase()}</h2>
                                <p className="text-sm sm:text-base text-gray-500">{job.industry}</p>
                            </div>
                        </div>

                        {/* Title */}
                        <div className="mb-4 sm:mb-6">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 tracking-tight leading-tight">
                                {job.title}
                            </h1>
                            {job.is_formal_job && (
                                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#5d6cf7]/10 to-[#4a59d9]/10 border border-[#5d6cf7]/20">
                                    <div className="w-2 h-2 rounded-full bg-[#5d6cf7] animate-pulse"></div>
                                    <span className="text-xs sm:text-sm font-semibold text-[#5d6cf7]">Empleo Formal</span>
                                </div>
                            )}
                        </div>

                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed">
                            {job.short_description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats - Optimizado para móvil */}
            <div className="px-6 sm:px-8 mb-12 sm:mb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide animate-scale-in">
                        {[
                            { icon: HiLocationMarker, label: 'Ubicación', value: 'Puerto Peñasco', gradient: 'from-blue-500 to-cyan-500' },
                            { icon: HiClock, label: 'Jornada', value: job.schedule, gradient: 'from-purple-500 to-pink-500' },
                            { icon: HiDocumentText, label: 'Contrato', value: job.contract_type, gradient: 'from-orange-500 to-red-500' }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="snap-start flex-shrink-0 w-64 sm:flex-1 relative group overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-md shadow-zinc-100 md:hover:shadow-lg hover:-translate-y-1 shine-effect"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                                <div className="relative p-5 sm:p-8">
                                    <div className={`inline-flex p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.gradient} mb-3 sm:mb-4`}>
                                        <item.icon className="text-white text-xl sm:text-2xl" />
                                    </div>
                                    <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2 font-medium">{item.label}</p>
                                    <p className="text-lg sm:text-2xl font-bold text-gray-800">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="px-6 sm:px-8 pb-16 sm:pb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12 sm:space-y-16">
                            {/* Description */}
                            <div className="animate-slide-in">
                                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Acerca del puesto</h3>
                                <div className="space-y-4 sm:space-y-6 md:max-h-72 overflow-scroll">
                                    <HTMLContent html={job.description} />
                                </div>
                            </div>

                            {/* Benefits */}
                            <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
                                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Beneficios</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    {job.benefits.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-100 hover:border-[#5d6cf7]/30 hover:bg-gradient-to-br hover:from-[#5d6cf7]/5 hover:to-transparent transition-all duration-300 shine-effect"
                                        >
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#5d6cf7]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                                <HiCheckCircle className="text-[#5d6cf7] text-lg sm:text-xl" />
                                            </div>
                                            <span className="text-sm sm:text-base text-gray-700 font-medium pt-1 sm:pt-2">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="lg:sticky lg:top-32 space-y-5 sm:space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                                {/* Apply Card */}
                                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#5d6cf7] to-[#4a59d9] p-6 sm:p-8 shadow-2xl shine-effect">
                                    <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-white/10 rounded-full -mr-16 sm:-mr-20 -mt-16 sm:-mt-20"></div>
                                    <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full -ml-12 sm:-ml-16 -mb-12 sm:-mb-16"></div>
                                    <div className="relative">
                                        <p className="text-white/80 text-xs sm:text-sm mb-2 font-medium">Salario mensual</p>
                                        <p className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">{formatSalary(job.salary)}</p>
                                        <button
                                            onClick={() => handleClick(`${job.company_phone}`, `Hola, vengo de penasco.io y quiero aplicar al puesto de ${job.title}`)}
                                            className="w-full py-3.5 sm:py-4 bg-white text-[#5d6cf7] rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 shadow-xl">
                                            Aplicar ahora
                                        </button>
                                    </div>
                                </div>

                                {/* Company Info */}
                                <div className="rounded-2xl sm:rounded-3xl border border-gray-100 p-6 sm:p-8 bg-white hover:shadow-lg transition-shadow">
                                    <h4 className="font-bold text-gray-800 mb-5 sm:mb-6 text-lg sm:text-xl">Información de contacto</h4>
                                    <div className="space-y-4 sm:space-y-5">
                                        <div className="flex items-start gap-3 sm:gap-4">
                                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                                                <HiOfficeBuilding className="text-gray-600 text-lg" />
                                            </div>
                                            <div>
                                                <p className="text-xs sm:text-sm text-gray-500 mb-1">Industria</p>
                                                <p className="text-sm sm:text-base text-gray-800 font-semibold">{job.industry}</p>
                                            </div>
                                        </div>

                                        {job.company_phone && (
                                            <div className="flex items-start gap-3 sm:gap-4">
                                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                                                    <HiPhone className="text-gray-600 text-lg" />
                                                </div>
                                                <div>
                                                    <p className="text-xs sm:text-sm text-gray-500 mb-1">Teléfono</p>
                                                    <p className="text-sm sm:text-base text-gray-800 font-semibold">{job.company_phone}</p>
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex items-start gap-3 sm:gap-4">
                                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                                                <HiCalendar className="text-gray-600 text-lg" />
                                            </div>
                                            <div>
                                                <p className="text-xs sm:text-sm text-gray-500 mb-1">Publicado</p>
                                                <p className="text-sm sm:text-base text-gray-800 font-semibold">{formatDate(job.created_at)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                display: none;
                }
                .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
                }
            `}</style>
        </div>

    );
};

export default JobDetail;