import React from 'react';
import AppDetails from '../AppDetails/AppDetails';
import { useLoaderData } from 'react-router';

const AllApps = () => {
    const apps = useLoaderData();
    return (
        <div>
            {
                apps.map(app =>
                    <AppDetails key={app.id} apps={apps}></AppDetails>
                )
            }
        </div>
    );
};

export default AllApps;