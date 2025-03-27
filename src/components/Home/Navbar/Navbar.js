// components/Navbar.jsx or .tsx
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-4 py-4 md:px-6">
      <div className="flex-1">
        <Button
          variant="ghost"
          className="text-lg md:text-xl text-left h-auto"
          style={{ lineHeight: "1.1rem" }}
        >
          <Image
            alt="User avatar"
            src="/images/logo.png"
            height={100}
            width={100}
            quality={100}
            priority
            className="h-full w-12 md:w-20 object-cover"
          />
          <div className="flex flex-col items-start">
            <span>Sulio Art</span>
            <span>Artist AI ChatBot</span>
          </div>
        </Button>
      </div>
      <div className="hidden md:block">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar>
                <AvatarImage
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="User avatar"
                />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuItem className="flex justify-between">
              Profile
              <Badge variant="secondary" className="ml-2">New</Badge>
            </DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
