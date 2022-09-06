import { writable } from 'svelte/store';
import type { Area, Project, Todo } from '../types';

const storedProjects = localStorage.projects;
const storedAreas = localStorage.areas;
const storedTodos = localStorage.todos;

export const projects = writable<Project[]>(storedProjects ? JSON.parse(storedProjects) : []);
export const areas = writable<Area[]>(storedAreas ? JSON.parse(storedAreas) : []);
export const todos = writable<Todo[]>(storedTodos ? JSON.parse(storedTodos) : []);

projects.subscribe((projects) => {
  localStorage.projects = JSON.stringify(projects);
});

areas.subscribe((areas) => {
  localStorage.areas = JSON.stringify(areas);
});

todos.subscribe((todos) => {
  localStorage.todos = JSON.stringify(todos);
});
