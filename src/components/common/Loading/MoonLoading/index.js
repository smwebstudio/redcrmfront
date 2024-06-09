'use client'

import MoonLoader from 'react-spinners/MoonLoader'

const MoonLoading = ({ loading }) => {
    return (
        <MoonLoader
            color={'#D8002C'}
            loading={loading}
            size={128}
            aria-label="Loading Spinner"
            data-testid="loader"
            speedMultiplier={0.4}
        />
    )
}

export default MoonLoading
