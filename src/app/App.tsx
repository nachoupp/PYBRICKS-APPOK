import 'react-splitter-layout/lib/index.css';
import './app.scss';
import { Classes, Spinner } from '@blueprintjs/core';
import React, { useEffect } from 'react';
import SplitterLayout from 'react-splitter-layout';
import { useLocalStorage } from 'usehooks-ts';
import Activities from '../activities/Activities';
import StatusBar from '../status-bar/StatusBar';
import Toolbar from '../toolbar/Toolbar';
import { useI18n } from './i18n';

const Editor = React.lazy(async () => {
    const [sagaModule, componentModule] = await Promise.all([
        import('../editor/sagas'),
        import('../editor/Editor'),
    ]);

    window.dispatchEvent(
        new CustomEvent('pb-lazy-saga', { detail: { saga: sagaModule.default } }),
    );

    return componentModule;
});

const Terminal = React.lazy(async () => {
    const [sagaModule, componentModule] = await Promise.all([
        import('../terminal/sagas'),
        import('../terminal/Terminal'),
    ]);

    window.dispatchEvent(
        new CustomEvent('pb-lazy-saga', { detail: { saga: sagaModule.default } }),
    );

    return componentModule;
});

const App: React.FunctionComponent = () => {
    const i18n = useI18n();
    const [terminalSplit, setTerminalSplit] = useLocalStorage('app-terminal-split', 30);

    // Classes.DARK has to be applied to body element, otherwise it won't
    // affect portals
    useEffect(() => {
        document.body.classList.add(Classes.DARK);
        return () => document.body.classList.remove(Classes.DARK);
    }, []);

    useEffect(() => {
        const listener = (e: KeyboardEvent) => {
            // prevent default browser keyboard shortcuts that we use
            // NB: some of these like 'n' and 'w' cannot be prevented when
            // running "in the browser"
            if (e.ctrlKey && ['n', 's', 'w'].includes(e.key)) {
                e.preventDefault();
            }
        };

        addEventListener('keydown', listener);
        return () => removeEventListener('keydown', listener);
    }, []);

    return (
        <div className="pb-app" onContextMenu={(e) => e.preventDefault()}>
            <div className="pb-app-body">
                <aside
                    className="pb-app-activities"
                    aria-label={i18n.translate('landmark.activities')}
                >
                    <Activities />
                </aside>
                {/* need a container with position: relative; for SplitterLayout since it uses position: absolute; */}
                <div className="pb-app-main" style={{ position: 'relative' }}>
                    <SplitterLayout
                        vertical={true}
                        percentage={true}
                        secondaryInitialSize={terminalSplit}
                        onSecondaryPaneSizeChange={setTerminalSplit}
                    >
                        <main
                            className="pb-app-editor"
                            aria-label={i18n.translate('landmark.editor')}
                        >
                            <Toolbar />
                            <React.Suspense
                                fallback={<Spinner className="pb-editor" />}
                            >
                                <Editor />
                            </React.Suspense>
                        </main>
                        <aside
                            className="pb-app-terminal"
                            aria-label={i18n.translate('landmark.terminal')}
                        >
                            <React.Suspense fallback={<Spinner className="h-100" />}>
                                <Terminal />
                            </React.Suspense>
                        </aside>
                    </SplitterLayout>
                </div>
            </div>
            <StatusBar />
        </div>
    );
};

export default App;
