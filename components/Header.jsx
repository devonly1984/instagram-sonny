import {
	HeartIcon,
	MenuIcon,
	PaperAirplaneIcon,
	PlusCircleIcon,
	SearchIcon,
	UserGroupIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";

import { HomeIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";

const Header = () => {
	const { data: session } = useSession();
	const router = useRouter();
	const [open, setOpen] = useRecoilState(modalState);
	return (
		<div className="sticky shadow-sm border-b bg-white top-0 z-50">
			<div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
				{/**Left */}
				<div
					onClick={() => router.push("/")}
					className="hidden lg:inline-grid relative w-24 cursor-pointer">
					<Image
						src="https://links.papareact.com/ocw"
						layout="fill"
						objectFit="contain"
					/>
				</div>
				<div
					onClick={() => router.push("/")}
					className="relative w-10  lg:hidden flex-shrink-0 cursor-pointer">
					<Image
						src="https://links.papareact.com/jjm"
						layout="fill"
						objectFit="contain"
					/>
				</div>
				<div className="max-w-xs">
					<div className="mt-1 relative p-3 rounded-md">
						<div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
							<SearchIcon className="h-5 w-5 text-gray-500" />
						</div>

						<input
							type="text"
							placeholder="Search"
							className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
						/>
					</div>
				</div>
				<div className="flex items-center justify-end space-x-4">
					<HomeIcon className="navBtn" onClick={() => router.push("/")} />
					<MenuIcon className="md:hidden h-6 cursor-pointer" />
					{session ? (
						<>
							<div className="relative navBtn">
								<PaperAirplaneIcon className="navBtn rotate-45" />
								<div className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center hover:animate-pulse text-white">
									3
								</div>
							</div>
							<PlusCircleIcon
								onClick={() => setOpen(true)}
								className="navBtn"
							/>
							<UserGroupIcon className="navBtn" />
							<HeartIcon className="navBtn" />
							<img
								onClick={signOut}
								src={session?.user?.image}
								alt="Profile"
								className="rounded-full cursor-pointer h-10"
							/>
						</>
					) : (
						<button onClick={signIn}>Sign In</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
