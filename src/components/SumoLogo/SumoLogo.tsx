import classNames from 'classnames';
import React from 'react';
import './SumoLogo.scss';

export interface SumoLogoProps {
    small?: boolean;
    disconnected?: boolean;
    className?: string;
}

export const SumoLogo: React.FunctionComponent<SumoLogoProps> = ({
    small,
    disconnected,
    className,
}) => {
    return (
        <main
            className={classNames(
                'sumo-logo-container',
                { small, disconnected },
                className,
            )}
        >
            {/* Decorative Speed Lines */}
            <div className="speed-lines" />
            <div className="robotic-grit" />

            {/* Robot Head Section */}
            <div className="robot-head">
                {/* Red Headband */}
                <div className="headband">
                    <div className="headband-detail" />
                </div>

                {/* Top Sensor Head */}
                <div className="head-block">
                    {/* The Black Eye Socket */}
                    <div className="eye-socket">
                        <div className="eye" />
                        <div className="eye" />
                    </div>
                </div>

                {/* Bumper */}
                <div className="bumper" />

                {/* Upper Torso Fragment */}
                <div className="upper-torso">
                    {/* Center Sensor/Button */}
                    <div className="core-node">
                        <div className="core-glow" />
                    </div>
                </div>
            </div>

            {/* Wheels/Base Section */}
            <div className="wheels">
                <div className="wheel left">
                    <div className="treads" />
                    <div className="sheen" />
                </div>
                <div className="wheel right">
                    <div className="treads" />
                    <div className="sheen" />
                </div>
            </div>

            {/* Title Overlay */}
            <div className="title-overlay">
                <div className="title-badge">
                    <h1>SUMO</h1>
                </div>
            </div>
        </main>
    );
};
