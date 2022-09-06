export interface Project {
  id: string;
  name: string;
  todos: Todo[];
}

export interface Todo {
  id: string;
  title: string;
  status: 'completed' | 'incomplete' | 'deleted';
  when?: Date;
  project?: Project;
}

export interface Area {
  id: string;
  name: string;
  projects: Project[];
}
