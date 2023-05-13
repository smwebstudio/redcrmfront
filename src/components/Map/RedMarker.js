import React from 'react';
import { Marker } from '@react-google-maps/api';

const RedMarker = ({ text, lat, lng, imageUrl }) => {
    return (
        <Marker position={{ lat, lng }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={imageUrl} alt="marker" style={{ width: 30, height: 30, marginRight: 10 }} />
                <span>{text}</span>
            </div>
        </Marker>
    );
};

export default RedMarker;
