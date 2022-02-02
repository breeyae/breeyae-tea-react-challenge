import {render, screen, fireEvent} from '@testing-library/react';
import ChallengeTwo from './challenge-two';

describe('Challenge Two - Palindrome', () => {
  test('should confirm a palindrome', () => {
    render(<ChallengeTwo />);

    const button = screen.getByText('Is this a palindrome?');
    const input = screen.getByLabelText('Enter some text');
    fireEvent.change(input, {target: {value: 'racecar'}});
    fireEvent.click(button);
    expect(screen.getByText('Yes, this is a palindrome!')).toBeInTheDocument();
  });

  test('should display please try again message for an invalid palindrome', () => {
    render(<ChallengeTwo />);

    const button = screen.getByText('Is this a palindrome?');
    const input = screen.getByLabelText('Enter some text');
    fireEvent.change(input, {target: {value: 'asdfb'}});
    fireEvent.click(button);
    expect(screen.getByText('No, please try again.')).toBeInTheDocument();
  });

  test('should display error if fewer than 3 characters', () => {
    render(<ChallengeTwo />);

    const button = screen.getByText('Is this a palindrome?');
    const input = screen.getByLabelText('Enter some text');
    fireEvent.change(input, {target: {value: 'a'}});
    fireEvent.click(button);
    expect(screen.getByText('A palindrome must be 3 or more letters.')).toBeInTheDocument();
  });
});
