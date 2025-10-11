import React from 'react';

const IndividualPage = ({app}) => {
    return (
        <div>
            <div>
                <img src={app.image} alt="" />
                <div>
                    <h1>{app.title}</h1>
                    <h1>Developed by productive.io</h1>

                    line 

                    <div>
                        <div>
                            <img src="/public/assets/icon-downloads.png" alt="" />
                            <h1>Downloads</h1>
                            <h1 className='text-2xl font-bold'>{app.downloads}</h1>
                        </div>
                        <div>
                            <img src="/public/assets/icon-ratings.png" alt="" />
                            <h1>Average Ratings</h1>
                            <h1 className='text-2xl font-bold'>{app.ratings}</h1>
                        </div>
                        <div>
                            <img src="/public/assets/icon-review.png" alt="" />
                            <h1>Total Reviews</h1>
                            <h1 className='text-2xl font-bold'>{app.reviews}</h1>
                        </div>
                    </div>

                    <button className='btn btn-outline'>Install Now ({app.size})</button>
                </div>
            </div>

            line 

            <div>
                <h1 className='font-semibold'>Rating</h1>

                implement chart
            </div>

            line

            <div>
                <h1>Description</h1>

                <p>{app.description}</p>
            </div>
        </div>
    );
};

export default IndividualPage;