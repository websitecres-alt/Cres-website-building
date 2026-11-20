import React, { useState } from 'react';
import { Car } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle = 'CRES Managed Fleet',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#09142A] via-[#0F244D] to-[#1E3A8A] text-white/80 p-8 text-center ${className}`}
      >
        <Car className="w-10 h-10 text-cyan-400 mb-3" strokeWidth={1.5} aria-hidden="true" />
        <p className="font-display text-sm font-semibold tracking-tight text-white">{fallbackTitle}</p>
        <p className="text-xs text-slate-300 mt-1 max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
