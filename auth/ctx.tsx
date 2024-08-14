import { useContext, createContext, type PropsWithChildren } from 'react';
import { useStorageState } from './use-storage-state';

const AuthContext = createContext<{
  saveSessionToken: (token: string) => void;
  removeSessionToken: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  saveSessionToken: () => null,
  removeSessionToken: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');

  return (
    <AuthContext.Provider
      value={{
        saveSessionToken: (token: string) => {
          setSession(token);
        },
        removeSessionToken: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
