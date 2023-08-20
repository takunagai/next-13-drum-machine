'use client';
import React from 'react';

const soundEnabledContext = React.createContext();

function SoundEnabledProvider({ children }) {
  const [soundEnabled, setSoundEnabled] =
    React.useState(true);

  return (
    <soundEnabledContext.Provider
      value={{ soundEnabled, setSoundEnabled }}
    >
      {children}
    </soundEnabledContext.Provider>
  );
}

export function useSoundEnabled() {
  const data = React.useContext(soundEnabledContext);

  if (!data) {
    throw new Error(
      'Cannot consume SoundEnabled context without SoundEnabledProvider'
    );
  }

  return data;
}

export default SoundEnabledProvider;