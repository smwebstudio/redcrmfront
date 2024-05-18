'use client'
import { Tabs } from 'antd'
import React from 'react'
import ProfessionalSection from '@/components/Professionals/professional-section'

function ProfessionalTabs(props) {
    return (
        <div className={'mt-5'}>
            <div className={''}>
                <div className={'container  pt-5 mt-5 border-top'}>
                    <div className="row ">
                        <div className="col-8">
                            <h4 className={'text-dark'}>
                                Մասնագետներ
                                <small className="text-main ml-3 font-size-13">
                                    / 14{' '}
                                </small>
                            </h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Tabs
                                defaultActiveKey="1"
                                items={[
                                    {
                                        label: `Բոլորը`,
                                        key: '1',
                                        children: (
                                            <ProfessionalSection type="-1" />
                                        ),
                                    },
                                    {
                                        label: `Անշարժ գույքի գործակալ / գործակալություն`,
                                        key: '2',
                                        children: (
                                            <ProfessionalSection type="-2" />
                                        ),
                                    },
                                    {
                                        label: `Բանկ, վարկային կազմակերպություն`,
                                        key: '3',
                                        children: (
                                            <ProfessionalSection type="1" />
                                        ),
                                    },
                                    {
                                        label: `Անշարժ գույք գնահատող`,
                                        key: '4',
                                        children: (
                                            <ProfessionalSection type="2" />
                                        ),
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalTabs
