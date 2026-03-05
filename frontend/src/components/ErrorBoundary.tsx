import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props { children: ReactNode; }
interface State { hasError: boolean; error?: Error; }

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error('Stacks Runner Error:', error, info);
    }

    render() {
        if (this.state.hasError) {
            return React.createElement('div', {
                style: { display: 'flex', flexDirection: 'column', alignItems: 'center',
                    justifyContent: 'center', height: '100vh', background: '#0a0a1a',
                    color: '#fff', fontFamily: 'monospace', textAlign: 'center', padding: '2rem' }
            },
                React.createElement('h1', { style: { color: '#ff4444', fontSize: '2rem' } }, 'Something went wrong'),
                React.createElement('p', { style: { color: '#888', marginTop: '1rem' } }, this.state.error?.message),
                React.createElement('button', {
                    onClick: () => window.location.reload(),
                    style: { marginTop: '2rem', padding: '12px 24px', background: '#aa44ff',
                        color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }
                }, 'Reload Game')
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
