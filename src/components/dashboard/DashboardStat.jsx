import StatCard from "./StatCard";
// import { getCompanyJobs } from '@/lib/api/jobs';
const DashboardStat = ({ stats }) => {
  // const companyId = 'compnay_123'
  //   const jobs = await getCompanyJobs(companyId)
  //   console.log(jobs)
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <StatCard  key={item.title}
          title={item.title}
          value={item.value}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default DashboardStat;


