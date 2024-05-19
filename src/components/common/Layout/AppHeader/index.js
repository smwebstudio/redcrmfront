import AppTopbar from '@/components/common/Layout/AppHeader/AppTopbar'
import AppNavbar from '@/components/common/Layout/AppHeader/AppNavbar'

export const AppHeader = ({ lng }) => {
    return (
        <>
            <AppTopbar lng={lng} />
            <AppNavbar lng={lng} />
        </>
    )
}

export default AppHeader
