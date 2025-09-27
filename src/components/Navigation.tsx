import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Brain, Calendar, Home, Menu, MessageSquare, Star, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: Star, label: "Why Us", href: "/why-us" },
    { icon: Calendar, label: "Plans", href: "/plans" },
    { icon: MessageSquare, label: "Testimonials", href: "/testimonials" },
    { icon: Brain, label: "Mock Interview", href: "/mock-interview" },
    { icon: User, label: "Resume Builder", href: "/resume-builder" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/dashboard" className="flex items-center space-x-2">
          <Brain className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">SKILL UP BUDDY</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link key={item.href} to={item.href}>
              <Button
                variant={isActive(item.href) ? "default" : "ghost"}
                size="sm"
                className="flex items-center space-x-2"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Button>
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              <Link to="/dashboard" className="flex items-center space-x-2 mb-8">
                <Brain className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">SKILL UP BUDDY</span>
              </Link>
              
              {navItems.map((item) => (
                <Link key={item.href} to={item.href}>
                  <Button
                    variant={isActive(item.href) ? "default" : "ghost"}
                    className="w-full justify-start space-x-2"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navigation;