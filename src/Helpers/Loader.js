import React from 'react';

const Loader = ({ color = '#2563ea' }) => {
    return (
        <>
            <style>
                {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
            </style>
            <div style={styles.container}>
                <div style={{ ...styles.spinner, borderColor: `${color} transparent transparent transparent` }}></div>
            </div>
        </>
    );
};

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    spinner: {
        width: '74px',
        height: '74px',
        border: '8px solid',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
    },
};

export default Loader;
