import { MapProvider } from '@/providers/MapProvider'
import { FilterProvider } from '@/providers/FilterProvider'

export default function MapLayout({ children, params: { lng } }) {
    return (
        <MapProvider>
            <FilterProvider>{children}</FilterProvider>
        </MapProvider>
    )
}
