import React, { useEffect, useState } from 'react'
import Professional from '@/components/Professionals/professional'
import { Col, Row } from 'antd'
import { FullListSkeleton } from '@/components/common/Skeletons/FullListSkeleton'

export function ProfessionalTabList({ professionals, type }) {
    const [profData, setProfData] = useState(professionals)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [professionals])

    return (
        <>
            {loading && <FullListSkeleton />}
            {!loading && (
                <Row gutter={[24, 24]} className={'pt-10 pb-10'}>
                    {profData.data?.map((item, i) => (
                        <Col
                            xs={24}
                            md={12}
                            key={i}
                            className={item.contract_type_id}>
                            <Professional professional={item} />
                        </Col>
                    ))}
                </Row>
            )}
        </>
    )
}

export default ProfessionalTabList
