/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Button from './button';

describe('tests for button', () => {
    let container: Element | null;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });
    afterEach(() => {
        if (container !== null) {
            unmountComponentAtNode(container);
            container.remove();
            container = null;
        }
    });
    test('render component', () => {
        act(() => {
            render(<Button onClick={jest.fn} />, container);
        });
        expect(container?.innerHTML).toBeDefined();
    });
    test('render component with props children', () => {
        act(() => {
            render(<Button onClick={jest.fn}>text for button</Button>, container);
        });
        expect(container?.textContent).toBe('text for button');
    });
    test('render component with props color=yellow', () => {
        act(() => {
            render(<Button color="yellow" onClick={jest.fn} />, container);
        });
        expect(container?.querySelector('button')?.classList.contains('yellow')).toBe(true);
    });
    test('render component with props color=green', () => {
        act(() => {
            render(<Button color="green" onClick={jest.fn} />, container);
        });
        expect(container?.querySelector('button')?.classList.contains('green')).toBe(true);
    });
    test('default color must be green!', () => {
        act(() => {
            render(<Button onClick={jest.fn} />, container);
        });
        expect(container?.querySelector('button')?.classList.contains('green')).toBe(true);
    });
    test('default size must be default!', () => {
        act(() => {
            render(<Button onClick={jest.fn} />, container);
        });
        expect(container?.querySelector('button')?.classList.contains('default')).toBe(true);
    });
    test('render component with size = wide ', () => {
        act(() => {
            render(<Button size="wide" onClick={jest.fn} />, container);
        });
        expect(container?.querySelector('button')?.classList.contains('wide')).toBe(true);
    });
    test('render component with size = small ', () => {
        act(() => {
            render(<Button size="small" onClick={jest.fn} />, container);
        });
        expect(container?.querySelector('button')?.classList.contains('small')).toBe(true);
    });
    test('component type must be button', () => {
        act(() => {
            render(<Button onClick={jest.fn} />, container);
        });
        expect(container?.querySelector('button')?.type).toBe('button');
    });

    test('Simulate click', () => {
        const onClick = jest.fn();
        act(() => {
            render(<Button onClick={onClick} />, container);
        });

        act(() => {
            document.querySelector('button')?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
