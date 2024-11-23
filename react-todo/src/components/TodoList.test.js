import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './TodoList';

describe('TodoList Component', () => {
    test('renders the initial todos', () => {
        render(<TodoList />);
        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Add a new todo');
        const addButton = screen.getByText('Add');

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(addButton);

        expect(screen.getByText('New Todo')).toBeInTheDocument();
    });

    test('toggles a todo', () => {
        render(<TodoList />);
        const todo = screen.getByText('Learn React');

        fireEvent.click(todo);
        expect(todo).toHaveStyle('text-decoration: line-through');

        fireEvent.click(todo);
        expect(todo).not.toHaveStyle('text-decoration: line-through');
    });

    test('deletes a todo', () => {
        render(<TodoList />);
        const todo = screen.getByText('Learn React');
        const deleteButton = todo.nextSibling;

        fireEvent.click(deleteButton);
        expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    });
});