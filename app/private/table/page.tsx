"use client";

import type React from "react";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Clock,
	Package,
	User,
	GripVertical,
	Plus,
	CheckCircle2,
	Circle,
	Loader2,
	XCircle,
	RotateCcw,
} from "lucide-react";

type TaskStatus = "todo" | "wip" | "done" | "canceled" | "rollback";

interface Task {
	id: string;
	hour: string;
	name: string;
	version: string;
	type: string;
	status: TaskStatus;
	user: string;
}

const statusConfig: Record<
	TaskStatus,
	{ label: string; color: string; icon: React.ReactNode }
> = {
	todo: {
		label: "To Do",
		color: "bg-gray-100 text-gray-700 border-gray-300",
		icon: <Circle className="h-3 w-3" />,
	},
	wip: {
		label: "In Progress",
		color: "bg-amber-100 text-amber-700 border-amber-300",
		icon: <Loader2 className="h-3 w-3 animate-spin" />,
	},
	done: {
		label: "Done",
		color: "bg-emerald-100 text-emerald-700 border-emerald-300",
		icon: <CheckCircle2 className="h-3 w-3" />,
	},
	canceled: {
		label: "Canceled",
		color: "bg-red-100 text-red-700 border-red-300",
		icon: <XCircle className="h-3 w-3" />,
	},
	rollback: {
		label: "Rollback",
		color: "bg-destructive/10 text-destructive border-destructive/30",
		icon: <RotateCcw className="h-3 w-3" />,
	},
};

const initialTasks: Task[] = [
	{
		id: "task-1",
		hour: "09:00",
		name: "Database Migration",
		version: "v2.1.0",
		type: "Backend",
		status: "done",
		user: "Alice Chen",
	},
	{
		id: "task-2",
		hour: "10:00",
		name: "API Gateway Update",
		version: "v3.0.1",
		type: "Infrastructure",
		status: "wip",
		user: "Bob Smith",
	},
	{
		id: "task-3",
		hour: "10:00",
		name: "Auth Service Deploy",
		version: "v1.5.2",
		type: "Backend",
		status: "wip",
		user: "Carol Davis",
	},
	{
		id: "task-4",
		hour: "11:30",
		name: "Frontend Bundle",
		version: "v4.2.0",
		type: "Frontend",
		status: "todo",
		user: "David Lee",
	},
	{
		id: "task-5",
		hour: "13:00",
		name: "CDN Cache Purge",
		version: "v1.0.0",
		type: "Infrastructure",
		status: "todo",
		user: "Eve Martinez",
	},
	{
		id: "task-6",
		hour: "13:00",
		name: "Monitoring Setup",
		version: "v2.3.1",
		type: "DevOps",
		status: "todo",
		user: "Frank Wilson",
	},
];

export default function ReleaseChronogram() {
	const [tasks, setTasks] = useState<Task[]>(initialTasks);
	const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);

	const handleDragStart = (taskId: string) => {
		setDraggedTaskId(taskId);
	};

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault();
	};

	const handleDrop = (targetIndex: number) => {
		if (!draggedTaskId) return;

		const newTasks = [...tasks];
		const sourceIndex = newTasks.findIndex((t) => t.id === draggedTaskId);

		if (sourceIndex === -1) return;

		const [task] = newTasks.splice(sourceIndex, 1);
		newTasks.splice(targetIndex, 0, task);

		setTasks(newTasks);
		setDraggedTaskId(null);
	};

	const updateTaskStatus = (taskId: string, status: TaskStatus) => {
		setTasks((prev) =>
			prev.map((task) => (task.id === taskId ? { ...task, status } : task)),
		);
	};

	const shouldRoundBottom = (index: number) => {
		if (index === tasks.length - 1) return true;
		return tasks[index].hour !== tasks[index + 1].hour;
	};

	const shouldRoundTop = (index: number) => {
		if (index === 0) return true;
		return tasks[index].hour !== tasks[index - 1].hour;
	};

	return (
		<div className="space-y-6">
			<div className="flex flex-wrap items-center justify-between">
				<div className="flex items-center gap-4">
					<Badge variant="outline" className="text-sm">
						{tasks.length} Tasks
					</Badge>
				</div>
				<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
					<Plus className="h-4 w-4 mr-2" />
					Add Task
				</Button>
			</div>

			<Card className="p-4">
				<div className="space-y-0">
					{tasks.map((task, taskIndex) => (
						<div
							key={task.id}
							draggable
							onDragStart={() => handleDragStart(task.id)}
							onDragOver={handleDragOver}
							onDrop={() => handleDrop(taskIndex)}
							className={`overflow-x-scroll group relative bg-background border border-border p-4 hover:shadow-md transition-shadow cursor-move ${
								taskIndex && shouldRoundTop(taskIndex) ? "mt-4" : ""
							}
                            ${
															shouldRoundTop(taskIndex) ? "rounded-t-lg" : ""
														} ${shouldRoundBottom(taskIndex) ? "rounded-b-lg" : ""} ${
															!shouldRoundBottom(taskIndex) ? "border-b-0" : ""
														}`}
						>
							<div className="flex items-center gap-4">
								<div className="flex-shrink-0">
									<GripVertical className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
								</div>

								<div className="flex items-center gap-3 min-w-[80px]">
									<Clock className="h-4 w-4 text-muted-foreground" />
									<span className="font-mono text-sm font-medium">
										{task.hour}
									</span>
								</div>

								<div className="flex-1 min-w-0">
									<div className="font-semibold text-foreground truncate">
										{task.name}
									</div>
								</div>

								<div className="flex items-center gap-2">
									<Package className="h-4 w-4 text-muted-foreground" />
									<span className="font-mono text-sm">{task.version}</span>
								</div>

								<Badge
									variant="outline"
									className="min-w-[100px] justify-center"
								>
									{task.type}
								</Badge>

								<div className="min-w-[140px]">
									<select
										value={task.status}
										onChange={(e) =>
											updateTaskStatus(task.id, e.target.value as TaskStatus)
										}
										className={`w-full px-3 py-1.5 rounded-md border text-sm font-medium flex items-center gap-2 cursor-pointer ${
											statusConfig[task.status].color
										}`}
									>
										{Object.entries(statusConfig).map(([key, config]) => (
											<option key={key} value={key}>
												{config.label}
											</option>
										))}
									</select>
								</div>

								<div className="flex items-center gap-2 min-w-[140px]">
									<User className="h-4 w-4 text-muted-foreground" />
									<span className="text-sm truncate">{task.user}</span>
								</div>
							</div>

							<div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity" />
						</div>
					))}
				</div>
			</Card>
		</div>
	);
}
