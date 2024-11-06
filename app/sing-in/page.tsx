import { SignIn } from "@clerk/nextjs";
import React from "react";

interface SingInPageProps {
	searchParams: {
		redirectUrl: string;
	};
}

const SingInPage = ({ searchParams: { redirectUrl } }: SingInPageProps) => {
	return (
		<section className="py-14">
			<div className="container mx-auto px-4">
				<div className="flex justify-center">
					<SignIn redirectUrl={redirectUrl} />
				</div>
			</div>
		</section>
	);
};

export default SingInPage;
