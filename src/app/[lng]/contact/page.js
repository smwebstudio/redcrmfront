'use client'
import React from 'react'
import AppPage from '@/components/common/Layout/AppPage'
import { ContactDetails } from '@/components/pages/Contact/ContactDetails'

export default async function ContactPage({
    params: { lng, slug },
    searchParams,
}) {
    return (
        <AppPage>
            <ContactDetails />
        </AppPage>
    )
}
