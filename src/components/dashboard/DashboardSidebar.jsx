import { FaUser, FaCog } from "react-icons/fa";
import { Button, Drawer } from "@heroui/react";
import { MdOutlineAppRegistration, MdOutlineDashboard } from "react-icons/md";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { SlHandbag } from "react-icons/sl";
import { GoSidebarCollapse } from "react-icons/go";
const DashboardSidebar = () => {
    const navItems = [
        { icon: MdOutlineDashboard, label: "Dashboard" },
        { icon: PiBuildingOfficeFill, label: "My Company" },
        { icon: SlHandbag, label: "Manage Jobs" },
        { icon: MdOutlineAppRegistration, label: "Applications" },
        { icon: FaUser, label: "Profile" },
        { icon: FaCog, label: "Settings" },
    ];
    const navContents =
        <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
                <button
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                    type="button"
                >
                    <item.icon className="size-5 text-muted" />
                    {item.label}
                </button>
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