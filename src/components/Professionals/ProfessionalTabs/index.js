'use client'
import React from 'react'
import DarkHeading1 from '@/components/Typography/Heading1/DarkHeading1'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import AppTabs from '@/components/common/Tabs/AppTabs'
import ProfessionalTabList from '@/components/Professionals/ProfessionalTabList'

const ProfessionalTabs = ({ allProfessionals }) => {
    return (
        <ContainerBoxed className={'mt-5'}>
            <div className={''}>
                <div className={'  pt-5 mt-5 '}>
                    <div className="row ">
                        <div className="col-8">
                            <DarkHeading1 className={'text-dark mb-12'}>
                                Մասնագետներ
                                <small className="text-main ml-3 font-size-13">
                                    / {allProfessionals.data.length}
                                </small>
                            </DarkHeading1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <AppTabs
                                defaultActiveKey="1"
                                items={[
                                    {
                                        label: `Բոլորը`,
                                        key: '1',
                                        children: (
                                            <ProfessionalTabList
                                                professionals={allProfessionals}
                                            />
                                        ),
                                    },
                                    // {
                                    //     label: `Անշարժ գույքի գործակալ / գործակալություն`,
                                    //     key: '2',
                                    //     children: (
                                    //         <ProfessionalTabList
                                    //             professionals={brokers}
                                    //         />
                                    //     ),
                                    // },
                                    // {
                                    //     label: `Բանկ, վարկային կազմակերպություն`,
                                    //     key: '3',
                                    //     children: (
                                    //         <ProfessionalTabList
                                    //             professionals={banks}
                                    //         />
                                    //     ),
                                    // },
                                    // {
                                    //     label: `Անշարժ գույք գնահատող`,
                                    //     key: '4',
                                    //     children: (
                                    //         <ProfessionalTabList
                                    //             professionals={estimators}
                                    //         />
                                    //     ),
                                    // },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </ContainerBoxed>
    )
}

export default ProfessionalTabs
