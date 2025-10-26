import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn, PropsWithStyle } from "@/lib/utils";
import type { FC } from "react";

type User = {
	avatar?: string | null;
	name?: string | null;
	email?: string | null;
};

type UserAvatarProps = React.ComponentProps<typeof Avatar> &
	PropsWithStyle & {
		user?: User | null;
		loading?: boolean;
	};

export const UserAvatar: FC<UserAvatarProps> = ({
	className,
	user,
	loading,
	...props
}) => (
	<Avatar className={cn(`h-8 w-8 rounded-md`, className)} {...props}>
		<AvatarImage
			src={user?.avatar ?? undefined}
			alt={user?.name ?? undefined}
		/>
		<AvatarFallback className="rounded-md border border-border/50 select-none">
			{loading ? null : (user?.name?.charAt(0) ?? "?")}
		</AvatarFallback>
	</Avatar>
);
