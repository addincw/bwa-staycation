import { render, screen } from '@testing-library/react';
import Button from './button';

test('Button WHEN rendered SHOULD display', () => {
    render(<Button>Click Me!</Button>);

    expect(screen.getByText('Click Me!')).toBeInTheDocument();
});

test('Button WHEN loading SHOULD show cursor-progress', () => {
    render(<Button role="button" loading>Click Me!</Button>);

    expect(screen.getByRole('button')).toHaveClass('cursor-progress');
});

test('Button WHEN disabled SHOULD show cursor-not-allowed', () => {
    render(<Button role="button" disabled>Click Me!</Button>);

    expect(screen.getByRole('button')).toHaveClass('disabled:cursor-not-allowed');
});