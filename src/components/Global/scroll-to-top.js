import {useEffect} from 'react';

function ScrollToTop() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
            <button
                onClick={() => {
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                }}
                style={{
                    position: 'fixed',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    zIndex: '9999999',
                    fontSize: '20px',
                    bottom: '40px',
                    right: '40px',
                    backgroundColor: '#fff',
                    color: '#fff',
                    textAlign: 'center',
                }}
            >
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_368_170)">
                        <path d="M0.372367 7.72414C0.758574 8.11034 1.42064 8.11034 1.80685 7.72414L6.99306 2.48276L12.2344 7.72414C12.6206 8.11035 13.3379 8.11035 13.7241 7.72414C14.1103 7.33793 14.1103 6.67586 13.7241 6.23448L7.76547 0.275865C7.54478 0.0551757 7.26892 -0.0551697 7.04823 -0.0551697C6.82754 -0.0551697 6.49651 0.0551756 6.33099 0.275865L0.317196 6.23448C0.0965063 6.45517 0.0413333 6.67586 0.0413333 7.0069C0.0413333 7.33793 0.151677 7.50345 0.372367 7.72414Z" fill="#181819"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_368_170">
                            <rect width="13.9586" height="8" fill="white" transform="translate(14 8) rotate(-180)"/>
                        </clipPath>
                    </defs>
                </svg>

            </button>
    );
}

export default ScrollToTop;
