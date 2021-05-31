/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Heading from './heading';

describe('heading component', () => {
    let container: Element | null = null;

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
            render(<Heading />, container);
        });
        expect(container?.innerHTML).toBeDefined();
    });
    test('render component with props children', () => {
        act(() => {
            render(<Heading>inner text</Heading>, container);
        });
        expect(container?.textContent).toBe('inner text');
    });
    test('render component without props. must be with tag "p" by default', () => {
        act(() => {
            render(<Heading />, container);
        });
        expect(container?.querySelector('p')).not.toBeNull();
    });
    test(`render component with props tag="h1"`, () => {
        act(() => {
            render(<Heading tag="h1" />, container);
        });
        expect(container?.querySelector('h1')).not.toBeNull();
    });
    test(`render component with props tag="h2"`, () => {
        act(() => {
            render(<Heading tag="h2" />, container);
        });
        expect(container?.querySelector('h2')).not.toBeNull();
    });
    test(`render component with props tag="h3"`, () => {
        act(() => {
            render(<Heading tag="h3" />, container);
        });
        expect(container?.querySelector('h3')).not.toBeNull();
    });
    test(`render component with props tag="h4"`, () => {
        act(() => {
            render(<Heading tag="h4" />, container);
        });
        expect(container?.querySelector('h4')).not.toBeNull();
    });
    test(`render component with props tag="h4" and className="testClass"`, () => {
        act(() => {
            render(<Heading className="testClass" tag="h4" />, container);
        });
        expect(container?.querySelector('h4')?.classList.contains('testClass')).toBe(true);
    });
});
