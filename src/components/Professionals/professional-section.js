import React, { useEffect, useState } from 'react'
import Professional from '@/components/Professionals/professional'
import { apiURL } from '@/constants'
import { Col } from 'antd'

export function ProfessionalSection({ allProfessionals, type }) {
    const [profData, setProfData] = useState(allProfessionals)

    console.log('profData')
    console.log(profData)
    useEffect(() => {
        if (type !== -1) {
            setProfData({})
            fetch(apiURL + 'api/brokers/profession/' + type)
                .then(res => res.json())
                .then(data => {
                    setProfData(data)
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }, [type])

    return (
        <>
            <div className="property-area min-vh-100 pt-5">
                <div className="">
                    <div className="property-filter-area_changed row custom-gutter">
                        {profData.data?.map((item, i) => (
                            <Col
                                sm={12}
                                xs={24}
                                key={i}
                                className={item.contract_type_id}>
                                <Professional professional={item} />
                            </Col>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfessionalSection
