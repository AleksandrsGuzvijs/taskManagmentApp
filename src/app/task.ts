export interface Task{
    id: number;
    name: string;
    timeSpent: number;
    taskDone: boolean;
    assignee: string;
    taskGroup: string;
}