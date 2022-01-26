import { render, screen } from '@testing-library/react';
import TextLink from './textLink';

test('Button WHEN rendered SHOULD display', () => {
    render(<TextLink>Click Me!</TextLink>);

    expect(screen.getByText('Click Me!')).toBeInTheDocument();
});

test('Button WHEN loading SHOULD show cursor-progress', () => {
    render(<TextLink role="button" loading>Click Me!</TextLink>);

    expect(screen.getByRole('button')).toHaveClass('cursor-progress');
});

test('Button WHEN disabled SHOULD show cursor-not-allowed', () => {
    render(<TextLink role="button" disabled>Click Me!</TextLink>);

    expect(screen.getByRole('button')).toHaveClass('disabled:cursor-not-allowed');
});