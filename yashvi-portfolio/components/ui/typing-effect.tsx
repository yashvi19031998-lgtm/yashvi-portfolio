"use client";

import React, { useEffect, useState } from "react";

interface TypingEffectProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

export function TypingEffect({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  delayBetween = 2500,
}: TypingEffectProps) {
  const [currentText, setCurrentText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && currentText === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), delayBetween);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className="inline-flex items-center text-white">
      <span>{currentText}</span>
      <span className="w-[2px] h-[0.9em] ml-1.5 bg-primary animate-[pulse_1s_infinite] inline-block rounded-full" />
    </span>
  );
}
