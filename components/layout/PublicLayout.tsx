import { FC, PropsWithChildren } from "react";
import { Grain } from "../effects/Grain";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";

export const PublicLayout: FC<PropsWithChildren> = ({ children }) => (
	<main className="min-h-screen flex flex-col items-center justify-center p-8">
		<Grain />
		{children}
		<div className="absolute bottom-4 right-4">
			<ThemeSwitcher />
		</div>
	</main>
);
