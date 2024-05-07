"use client";
import React, { useEffect } from "react";
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
import { AiOutlineLogin } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";

import { redirect, useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { signOut, useSession } from "next-auth/react";
import { clearAccessToken } from "@/redux/features/token/tokenSlice";

import {
  useGetMyProductsQuery,
  useGetProductsQuery,
  useGetUserProfileQuery,
} from "@/redux/service/products";
import { UserProfile } from "@/lib/definitions";

export default function NavbarComponent() {
  const dispatch = useAppDispatch();
  const session = useSession();
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const accessToken = useAppSelector((state) => state.accessToken.token);
  const { data, isSuccess } = useGetUserProfileQuery({});
  console.log("user Profile : ", data);

  let userProfile: UserProfile;
  if (session.data != null) {
    userProfile = {
      userAvatar: session.data?.user?.image || "",
      userBio: session.data?.user?.name || "",
      userEmail: session.data?.user?.email || "",
      userUsername: session.data?.user?.name || "",
    };
  } else if (isSuccess) {
    userProfile = {
      userAvatar: data.profile.avatar || "",
      userBio: data.profile.bio || "",
      userEmail: data.email || "",
      userUsername: data.last_name || "",
    };
  } else {
    userProfile = {
      userAvatar: "",
      userBio: "",
      userEmail: "",
      userUsername: "",
    };
  }

  console.log(userProfile);

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
    dispatch(clearAccessToken());
    signOut();
    router.push("/login");
  };

  useEffect(() => {}, [userProfile]);

  const pathname = usePathname();
  if (
    pathname === "/cart" ||
    pathname === "/dashboard" ||
    pathname === "/register"
  ) {
    return null;
  }

  return (
    <Navbar shouldHideOnScroll className="h-[50px] w-full">
      <NavbarBrand>
        <div className="p-2 h-fll w-full">
          <img
            src="./icons/logo.jpg"
            alt="K-STORE"
            className="h-10  object-cover"
          />
        </div>
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
                      src: userProfile.userAvatar,
                    }}
                    className="flex flex-col transition-transform md:flex-row"
                    description={userProfile.userBio}
                    name={userProfile.userUsername}
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-bold">Signed in as</p>
                    <p className="font-bold">{userProfile.userUsername}</p>
                  </DropdownItem>
                  {userProfile.userEmail == "" ? (
                    <DropdownItem
                      key="login"
                      onClick={() => router.push("/login")}
                    >
                      <Link href="/login" color="primary">
                        Login
                      </Link>
                    </DropdownItem>
                  ) : (
                    <DropdownItem
                      key="logout"
                      color="danger"
                      onClick={() => handleLogout()}
                    >
                      Log Out
                    </DropdownItem>
                  )}
                </DropdownMenu>
              </Dropdown>
            </div>
          ) : (
            <Button href="/login" as={Link} color="primary" variant="flat">
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
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
