"use client"
import ApplicationTable from '@/components/dashboard/ApplicationTable';
import DashboardStat from '@/components/dashboard/DashboardStat';
import { getCompanyJobs } from '@/lib/api/jobs';
import { authClient } from '@/lib/auth-client';
import { Spinner } from "@heroui/react";
import { FiBriefcase, FiUsers, FiCheckCircle, FiXCircle } from "react-icons/fi";


const Recruiterdashboardhomepage = () => {
    const { data: session, isPending, error, refetch } = authClient.useSession();
    if (isPending) { return <div className="flex items-center gap-4"><Spinner /></div> }
    const user = session?.user;
    const getData = async () => {
        const companyId = 'company_123'
        const jobs = await getCompanyJobs(companyId)
        console.log(jobs)
    }
    const recruiterStats = [
        { title: "Total Job Posts", value: 48, icon: FiBriefcase, },
        { title: "Total Applicants", value: "1,284", icon: FiUsers, },
        { title: "Active Jobs", value: 18, icon: FiCheckCircle, },
        { title: "Jobs Closed", value: 32, icon: FiXCircle, },
    ];

    return (
        <div className='container mx-auto'>
            <h1 className='text-3xl ' onClick={getData}> hi wellcome Back {user?.name}</h1>
            <section>
                <DashboardStat stats={recruiterStats} />
            </section>
            <section className='pt-5'><ApplicationTable /></section>
        </div>
    );
};

export default Recruiterdashboardhomepage;








