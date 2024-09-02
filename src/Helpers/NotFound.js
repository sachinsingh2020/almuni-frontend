import React from 'react';

const NotFound = () => {
    return (
        <div style={styles.container}>
            <h1>Not Found</h1>
        </div>
    );
};

const styles = {
    container: {
        color: 'white',
        border: '4px solid #2563ea',
        maxWidth: '80vw',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '30px',
        fontWeight: 'bold',
        height: '40vh',
        margin: '0 auto',
        background: '#2563ea',
        marginTop: '20px',
    },
};

export default NotFound;
