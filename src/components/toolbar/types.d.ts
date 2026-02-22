import type { AriaLabelingProps, DOMProps } from '@react-types/shared';

export type ToolbarProps = {
    firstFocusableItemId: string;
};

export type AriaToolbarProps = ToolbarProps & DOMProps & AriaLabelingProps;
