import React from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider, setLogger } from 'react-query';

// suppress errors written to console
setLogger({
    log: console.log,
    warn: console.warn,
    error: () => {
        // swallow the errors
    },
});

const defaultQueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retryDelay: 1,
            retry: 0,
        },
    },
});

export function renderWithQueryClient(component: React.ReactNode, client?: any) {
    const queryClient = client ?? defaultQueryClient;

    render(
        <QueryClientProvider client={queryClient}>
            {component}
        </QueryClientProvider>,
    );
}
