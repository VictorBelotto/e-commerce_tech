import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";
import UserIcon from "../icons/userIcon";

function Login() {
	return (
		<div className="flex gap-4 items-center">
			<SignedIn>
				<UserButton />
			</SignedIn>
			<SignedOut>
				<SignInButton mode="modal">
					<div className="flex gap-2 items-center cursor-pointer group">
						<UserIcon className="group-hover:text-orange-500" />
						<p className="text-white group-hover:text-orange-500">
							Entre ou <br /> cadastre-se
						</p>
					</div>
				</SignInButton>
			</SignedOut>
		</div>
	);
}

export default Login;
