import Link from 'next/link';
import { useState } from 'react';

const ButtonStyled = ({ text, invert, value = false, copy = false }) => {
  const [copied, setCopied] = useState(false);
  const [btntext, setBtnText] = useState(text);
  const copyToclipboard = (e) => {
    navigator.clipboard.writeText(e.target.value);
    setBtnText('Copied!!');
    setCopied(true);
    setTimeout(() => {
      setBtnText(text);
      setCopied(false);
    }, 750);
  };

  return (
    <button
      className={
        invert
          ? `hover:text-gray-50 transition-colors text-2xl ${
              copy && copied ? 'text-green-500' : 'text-hero'
            }`
          : `hover:text-hero transition-colors text-2xl ${
              copy && copied ? 'text-green-500' : 'text-gray-50'
            }`
      }
      onClick={copy ? copyToclipboard : () => {}}
      value={value && value}
    >
      {btntext}
    </button>
  );
};

export default ButtonStyled;
