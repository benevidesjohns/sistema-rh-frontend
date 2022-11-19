import React from 'react';

import { AuthProvider } from './auth';
import { JobsProvider } from './jobs';
import { CandidatesProvider } from './candidates';

const GlobalProvider = ({ children }) => {
  return (
    <AuthProvider>
      <JobsProvider>
        <CandidatesProvider>
          {children}
        </CandidatesProvider>
      </JobsProvider>
    </AuthProvider>
  );
}

export { GlobalProvider };
