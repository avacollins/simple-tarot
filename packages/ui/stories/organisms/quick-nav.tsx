import React, { useState } from 'react';

import { SpeedDial } from '@rneui/themed';

type QuickNavProps = {
    navigationEvent?: (navOpen: boolean) => void;
};

const QuickNav = ({ navigationEvent }: QuickNavProps) => {
    const [open, setOpen] = useState(false);

    const onOpen = () => {
        if (navigationEvent) {
            navigationEvent(true);
        }
        setOpen(true);
    };

    const onClose = () => {
        if (navigationEvent) {
            navigationEvent(false);
        }
        setOpen(false);
    };

    const openProfile = () => {
        setOpen(false);
    };

    const goToHistory = () => {
        setOpen(false);
    };

    const startNewReading = () => {
        setOpen(false);
    };

    const goToHome = () => {
        setOpen(false);
    };

    return (
        <SpeedDial
            color={open ? 'white' : 'black'}
            isOpen={open}
            icon={{ name: 'navigation', color: 'white' }}
            openIcon={{ name: 'close', color: 'black' }}
            onOpen={onOpen}
            onClose={onClose}>
            <SpeedDial.Action
                color="white"
                icon={{
                    type: 'material-community',
                    name: 'account-outline',
                    color: '#000'
                }}
                title="Profile"
                onPress={openProfile}
            />

            <SpeedDial.Action
                color="white"
                icon={{ name: 'history', color: '#000' }}
                title="History"
                onPress={goToHistory}
            />
            <SpeedDial.Action
                color="white"
                icon={{
                    type: 'material-community',
                    name: 'cards-outline',
                    color: '#000'
                }}
                title="New Reading"
                onPress={startNewReading}
            />
            <SpeedDial.Action
                color="white"
                icon={{
                    type: 'material-community',
                    name: 'home-outline',
                    color: '#000'
                }}
                title="Home"
                onPress={goToHome}
            />
        </SpeedDial>
    );
};

export default QuickNav;
