import { render, screen } from '@testing-library/react';
import ButtonLink from './textLink';

test('Button WHEN rendered SHOULD display', () => {
    render(<ButtonLink>Click Me!</ButtonLink>);

    expect(screen.getByText('Click Me!')).toBeInTheDocument();
});

test('Button WHEN loading SHOULD show cursor-progress', () => {
    render(<ButtonLink role="button" loading>Click Me!</ButtonLink>);

    expect(screen.getByRole('button')).toHaveClass('cursor-progress');
});

test('Button WHEN disabled SHOULD show cursor-not-allowed', () => {
    render(<ButtonLink role="button" disabled>Click Me!</ButtonLink>);

    expect(screen.getByRole('button')).toHaveClass('disabled:cursor-not-allowed');
});