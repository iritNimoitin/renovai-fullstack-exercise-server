export default interface Task {
  lineId: string;
  lineDisplayId: string;
  tasks: Array<subTask>;
}
interface subTask {
  taskID: string;
  type: string;
}
