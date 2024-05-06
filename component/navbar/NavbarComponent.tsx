"use client";
import React from "react";
import {
  Navbar,
  Image,
  DropdownMenu,
  DropdownItem,
  User,
  DropdownTrigger,
  Dropdown,
  NavbarMenu,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { IoCartOutline } from "react-icons/io5";

import { useState } from "react";
import { MenuList } from "./Menu";
import { AiOutlineLogin } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";

import { redirect, useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { signOut, useSession } from "next-auth/react";

import { cookies } from "next/headers";

type MenuItem = {
  name: string;
  path: string;
  active: boolean;
};
import {
	selectAvatar,
	selectBio,
} from "@/redux/features/userProfile/userProfileSlice";

export default function NavbarComponent() {

  const session = useSession();
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const userAvatar = useAppSelector(selectAvatar);
  const userBio = useAppSelector(selectBio);

  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Policy",
      path: "/policy",
    },
    {
      name: "My Shop",
      path: "/dashboard",
    },
  ];

  const cart = useAppSelector((state) => state.cart.products);
  let cartLength = cart.length;

  const handleSignout = async () => {
    const isSignout = await signOut();
    if (isSignout) {
      signOut();
      router.push("/login");
    }
  };

  const handleLogout = async () => {
    fetch(process.env.NEXT_PUBLIC_BASE_URL_LOCALHOST + "/logout", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Response data from logout", data);
      })
      .catch((error) => {
        console.error("Refresh Token error:", error);
      });

    router.push("/login");
  };

  return (
    <Navbar shouldHideOnScroll  className="h-[50px] w-full">
      <NavbarBrand>
        <img src="./icons/" alt="" />
        <p className="font-bold text-inherit">CAMSTORE</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathName === "/"}>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathName === "/about"}>
          <Link color="foreground" href="/about">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathName === "/policy"}>
          <Link color="foreground" href="/policy">
            Policy
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathName === "/dashboard"}>
          <Link color="foreground" href="/dashboard">
            My Shop
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex items-center gap-5">
          <button onClick={() => router.push("/cart")}>
          <IoCartOutline className="h-5 w-5" />
            <span className="self-center grid place-content-center whitespace-nowrap text-medium font-medium  text-red-800 bg-black w-[25px] h-[25px] rounded-full absolute top-2 ml-10">
              {cartLength}
            </span>
          </button>
          {true ? (
						<div className="flex items-center gap-4">
							<Dropdown placement="bottom-start">
								<DropdownTrigger>
									<User
										as="button"
										avatarProps={{
											isBordered: true,
											src: `${
												session.data === null
													? userAvatar
													: session.data?.user?.image
											}`,
										}}
										className="flex flex-col transition-transform md:flex-row"
										description={
											session.data === null
												? userBio
												: session.data?.user?.name
										}
										name={
											session.data === null
												? ""
												: session.data?.user?.name
										}
									/>
								</DropdownTrigger>
								<DropdownMenu
									aria-label="User Actions"
									variant="flat">
									<DropdownItem
										key="profile"
										className="h-14 gap-2">
										<p className="font-bold">
											Signed in as
										</p>
										<p className="font-bold">
											{session.data === null
												? "User"
												: session.data?.user?.email}
										</p>
									</DropdownItem>
									<DropdownItem
										key="login"
										onClick={() => {
											router.push("/login");
										}}>
										Login
									</DropdownItem>
									<DropdownItem
										key="logout"
										color="danger"
										onClick={() => {
											session.data === null
												? handleLogout()
												: handleSignout();
										}}>
										Log Out
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</div>
					) : (
						<Button
							href="/login"
							as={Link}
							color="primary"
							variant="flat">
							Login
						</Button>
					)}

        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color={
								index === 2
									? "primary"
									: index === menuItems.length - 1
									? "danger"
									: "foreground"
							}
							className="w-full"
							href={item.path}
							size="lg">
							{item.name}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
    </Navbar>
  );
}

{
  /*<Navbar fluid rounded>
      <Navbar.Brand href="">
        <img
          src="https://kaufland-ecommerce.com/wp-content/uploads/KL_Ecommerce_Logo_RGB1.png"
          className="mr-4 h-10 sm:h-9"
          alt="Ecommerce"
        />
      </Navbar.Brand>
      <Navbar.Collapse>
        {menu.map((item, index) => (
          <NavbarLink
            key={index}
            as={Link}
            href={item.path}
            active={item.path === pathname}
          >
            {item.name}
          </NavbarLink>
        ))}
      </Navbar.Collapse>

      <Navbar.Collapse>
        <NavbarLink
          as={Link}
          href="/cart"
          active={cartLength > 0}
          className="flex items-center justify-center"
        >
          <Image src="/icons/cart.png" alt="backgroud" width={30} height={30} />
          <span className="self-center grid place-content-center whitespace-nowrap text-medium font-medium text-white bg-black w-[25px] h-[25px] rounded-full absolute top-1 ml-5">
            {cartLength}
          </span>
        </NavbarLink>
      </Navbar.Collapse>

      <div className="flex md:order-2  ">
        <button className=" bg-slate-50 hove:bg-slate-50">
          <img src="/icons/cart.png" alt="cart" className="h-5 w-5" />
        </button>
        <Button>
          Login <AiOutlineLogin className=" h-5 w-5" />
        </Button>
        <Navbar.Toggle />
      </div>
      
        </Navbar>*/
}
