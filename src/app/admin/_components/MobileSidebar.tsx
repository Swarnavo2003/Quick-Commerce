import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Blocks,
  Home,
  Layers,
  Menu,
  Package2,
  ShoppingCart,
  Users,
  Warehouse,
} from "lucide-react";
import Link from "next/link";

const MobileSidebar = () => {
  const navItems = [
    {
      label: "Dashboard",
      href: "/admin",
      icon: Home,
    },
    {
      label: "Products",
      href: "/admin/products",
      icon: Layers,
    },
    {
      label: "Warehouses",
      href: "/admin/warehouses",
      icon: Warehouse,
    },
    {
      label: "Delivery Persons",
      href: "/admin/delivery-persons",
      icon: Users,
    },
    {
      label: "Orders",
      href: "/admin/orders",
      icon: ShoppingCart,
    },
    {
      label: "Inventories",
      href: "/admin/inventories",
      icon: Blocks,
    },
  ];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Choco Inc</span>
          </Link>

          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
export default MobileSidebar;
