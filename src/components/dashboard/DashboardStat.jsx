import StatCard from "./StatCard";

const DashboardStat = ({ stats }) => {
    return (
       <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <StatCard
          key={item.title}
          title={item.title}
          value={item.value}
          icon={item.icon}
        />
      ))}
    </div>
    );
};

export default DashboardStat;


