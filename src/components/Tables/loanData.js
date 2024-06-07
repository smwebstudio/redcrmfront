import React from 'react'
import { Table } from 'antd'
import { useTranslation } from '@/app/i18n/client'

function LoanData({ payments }) {
    const { t } = useTranslation(props.lng, 'common')

    const columns = [
        {
            title: t('label.mortgage.month'),
            dataIndex: 'paymentDate',
            key: 'paymentDate',
        },
        {
            title: t('label.mortgage.monthlyFee'),
            dataIndex: 'paymentAmount',
            key: 'paymentAmount',
            render: value => parseInt(value),
        },
        {
            title: t('label.mortgage.motherMoney'),
            dataIndex: 'principalAmount',
            key: 'principalAmount',
            render: value => parseInt(value),
        },
        {
            title: t('label.mortgage.percent'),
            dataIndex: 'interestAmount',
            key: 'interestAmount',
            render: value => parseInt(value),
        },
        {
            title: t('label.mortgage.balance'),
            dataIndex: 'finalBalance',
            key: 'finalBalance',
            render: value => parseInt(value),
        },
    ]

    const data = payments.map((pay, index) => ({ ...pay, key: index }))

    return <Table columns={columns} dataSource={data} />
}

export default LoanData
