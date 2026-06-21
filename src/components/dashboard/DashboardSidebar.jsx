import { FaUser, FaCog } from "react-icons/fa";
import { Button, Drawer } from "@heroui/react";
import { MdOutlineAppRegistration, MdOutlineDashboard } from "react-icons/md";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { SlHandbag } from "react-icons/sl";
import { GoSidebarCollapse } from "react-icons/go";
import Link from "next/link";
const DashboardSidebar = () => {
   const navItems = [
    { icon: MdOutlineDashboard, label: "Home", path: "/dashboard" },
    { icon: SlHandbag, label: "Manage Jobs", path: "/dashboard/recruiter" },
    { icon: SlHandbag, label: "Post Job", path: "/dashboard/recruiter/jobs/new" },
    { icon: PiBuildingOfficeFill, label: "Company Profile", path: "/dashboard/recruiter/company" },
    { icon: MdOutlineAppRegistration, label: "Massage", path: "/applications" },
    { icon: FaUser, label: "Profile", path: "/profile" },
    { icon: FaCog, label: "Settings", path: "/settings" },
  ];
    const navContents =
        <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
                <Link href={item.path} key={item.label}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                    type="button"
                >
                    <item.icon className="size-5 text-muted" />
                    {item.label}
                </Link>
            ))}
        </nav>;
    return (
        <>
            <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
                {navContents}
            </aside>
            <Drawer>
                <Button variant="secondary" className="lg:hidden">
                    <GoSidebarCollapse />
                    Menu
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                {navContents}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>
    );
};

export default DashboardSidebar;