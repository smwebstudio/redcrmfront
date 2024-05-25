'use client'
import { Tabs } from 'antd'
import React from 'react'
import ProfessionalSection from '@/components/Professionals/professional-section'
import DarkHeading1 from '@/components/Typography/Heading1/DarkHeading1'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'

function ProfessionalTabs({ allProfessionals }) {
    return (
        <ContainerBoxed className={'mt-5'}>
            <div className={''}>
                <div className={'  pt-5 mt-5 '}>
                    <div className="row ">
                        <div className="col-8">
                            <DarkHeading1 className={'text-dark mb-12'}>
                                Մասնագետներ
                                <small className="text-main ml-3 font-size-13">
                                    / 14{' '}
                                </small>
                            </DarkHeading1>
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
                                            <ProfessionalSection
                                                type="-1"
                                                allProfessionals={
                                                    allProfessionals
                                                }
                                            />
                                        ),
                                    },
                                    {
                                        label: `Անշարժ գույքի գործակալ / գործակալություն`,
                                        key: '2',
                                        children: (
                                            <ProfessionalSection
                                                type="-2"
                                                allProfessionals={
                                                    allProfessionals
                                                }
                                            />
                                        ),
                                    },
                                    {
                                        label: `Բանկ, վարկային կազմակերպություն`,
                                        key: '3',
                                        children: (
                                            <ProfessionalSection
                                                type="1"
                                                allProfessionals={
                                                    allProfessionals
                                                }
                                            />
                                        ),
                                    },
                                    {
                                        label: `Անշարժ գույք գնահատող`,
                                        key: '4',
                                        children: (
                                            <ProfessionalSection
                                                type="2"
                                                allProfessionals={
                                                    allProfessionals
                                                }
                                            />
                                        ),
                                    },
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
