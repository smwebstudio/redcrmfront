import React from 'react'
import Link from 'next/link'
import AppImage from '@/components/common/Image/AppImage'

function Professional(props) {
    let publicUrl = process.env.PUBLIC_URL + '/'
    let professional = props.professional

    return (
        <div className="professional-card flex flex-row pt-4 pb-4">
            <div className="professional-image flex p-2">
                <Link href={'professionals/' + professional.id}>
                    <AppImage
                        alt={'Red Group'}
                        preview={false}
                        width={50}
                        height={50}
                        src={professional.profile_picture}
                    />
                </Link>
            </div>
            <div className="professional-info p-2 flex flex-col justify-content-center">
                <p className="font-size-13 mb-1 text-gray-800 text-dark">
                    {professional.full_name}
                </p>
                <p className="mb-1">Անշարժ գույքի գործակալ</p>
                <p className="flex mb-1 justify-content-start text-dark">
                    <AppImage
                        className="mr-2"
                        src={publicUrl + 'assets/img/svg/envelope.svg'}
                    />
                    <span className="align-self-center">
                        {professional.email}
                    </span>
                </p>
                <p className="flex justify-content-start text-dark">
                    <AppImage
                        className="mr-2"
                        src={publicUrl + 'assets/img/svg/mobile.svg'}
                    />
                    <span className="align-self-center">
                        {professional.phone_1}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Professional
