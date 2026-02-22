// Icon for indicating external links

import './clipboard.scss';
import { Icon } from '@blueprintjs/core';
import { Duplicate } from '@blueprintjs/icons';
import React from 'react';

const ClipboardIcon: React.FunctionComponent = () => {
    return (
        <span className="pb-clipboard">
            &nbsp;
            <sup>
                <Icon icon={<Duplicate size={12} />} />
            </sup>
        </span>
    );
};

export default ClipboardIcon;
