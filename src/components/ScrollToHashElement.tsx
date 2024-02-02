'use client';
import { useEffect } from 'react';

// NOTE: custom component to scroll to hash element provided in URL
// inspired by https://ncoughlin.com/posts/react-router-v6-hash-links/

export function ScrollToHashElement() {
  useEffect(() => {
    const hash = window.location.hash; // since we can't use useRouter()

    const scrollToHash = () => {
      const targetElement = hash ? document.querySelector(hash) : null;

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'auto',
          block: 'center',
          inline: 'nearest',
        });
      }
    };

    scrollToHash();
  }, []);

  return null;
}
