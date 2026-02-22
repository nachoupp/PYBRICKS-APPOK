import { Intent } from '@blueprintjs/core';
import { Error } from '@blueprintjs/icons';
import React from 'react';
import type { CreateToast } from '../../toasterTypes';
import { useI18n } from './i18n';

const NoDfuInterface: React.FunctionComponent = () => {
    const i18n = useI18n();
    return <p>{i18n.translate('noDfuInterface.message')}</p>;
};

export const noDfuInterface: CreateToast = (onAction) => ({
    message: <NoDfuInterface />,
    icon: <Error />,
    intent: Intent.DANGER,
    onDismiss: () => onAction('dismiss'),
});
