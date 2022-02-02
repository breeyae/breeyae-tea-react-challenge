import React from 'react';
import {Button, TextField} from '@mui/material';
import {useState} from 'react';
import './challenge-two.css';

function ChallengeTwo() {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const isPalindrome = () => {
    const trimmedText = text.toLowerCase().split(' ').join('');
    const reversedText = trimmedText.split('').reverse().join('');

    return trimmedText === reversedText;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text.length < 3) {
      setError(true);

      if (text === '') {
        setMessage('');
      } else {
        setMessage('A palindrome must be 3 or more letters.');
      }
    } else {
      setError(false);
      isPalindrome() ? setMessage('Yes, this is a palindrome!') : setMessage('No, please try again.');
    }
  };

  return (
    <>
      <form className="form">
        <TextField label="Enter some text" type="text" name="input" value={text} onChange={(event) => setText(event.target.value)} error={error} />
        <Button variant="contained" type="submit" onClick={handleSubmit}>Is this a palindrome?</Button>
      </form>
      {message && <div className={`${error ? 'error ' : ''}message`}>{message}</div>}
    </>
  );
}

export default ChallengeTwo;
