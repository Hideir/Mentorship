import React from 'react';
import './isLoading.css';

const IsLoadingComponent = () => {
    return(
        <div className="loaderContainer">
            <div class="innerLoaderContainer">
                <ul className="loader">
                    <li className="center"></li>
                    <li className="item item-1"></li>
                    <li className="item item-2"></li>
                    <li className="item item-3"></li>
                    <li className="item item-4"></li>
                    <li className="item item-5"></li>
                    <li className="item item-6"></li>
                    <li className="item item-7"></li>
                    <li className="item item-8"></li>
                </ul>
            </div>
            {/* <h2 className="loadingTitle">Loading...</h2> */}
        </div>
    );
}

export default IsLoadingComponent;