import { MapProvider } from '@/providers/MapProvider'

export default function MapLayout({ children, params: { lng } }) {
    return <MapProvider>{children}</MapProvider>
}
