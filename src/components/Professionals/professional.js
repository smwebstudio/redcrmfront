import React from 'react'
import Link from 'next/link'
import AppImage from '@/components/common/Image/AppImage'

function Professional(props) {
    let publicUrl = process.env.PUBLIC_URL + '/'
    let professional = props.professional

    return (
        <div className="professional-card flex flex-row pt-4 pb-4 bg-white ">
            <div className="professional-image flex p-2">
                <Link href={'professionals/' + professional.id}>
                    <AppImage
                        alt={'Red Group'}
                        preview={false}
                        width={100}
                        height={100}
                        src={professional.profile_picture}
                    />
                </Link>
            </div>
            <div className="professional-info p-2 flex flex-col justify-content-center">
                <p className="font-size-13 mb-1 text-gray-800 text-dark">
                    {professional.full_name}
                </p>
                <p className="mb-3">Անշարժ գույքի գործակալ</p>
                <p className="flex mb-1 justify-content-start text-dark">
                    <AppImage
                        width={15}
                        src={publicUrl + 'assets/img/svg/envelope.svg'}
                    />
                    <span className="align-self-center ml-2">
                        {professional.email}
                    </span>
                </p>
                <p className="flex justify-content-start text-dark">
                    <AppImage
                        width={15}
                        src={publicUrl + 'assets/img/svg/mobile.svg'}
                    />
                    <span className="align-self-center ml-2">
                        {professional.phone_1}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Professional
