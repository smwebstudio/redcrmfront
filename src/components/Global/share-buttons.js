import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton,
} from 'next-share'
import { useRouter } from 'next/navigation'

function ShareButtons() {
    const route = useRouter()
    let publicUrl = process.env.PUBLIC_URL + route.asPath

    return (
        <div className={'shareButtons'}>
            <FacebookShareButton url={publicUrl}>
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={publicUrl}>
                <TwitterIcon size={32} round />
            </TwitterShareButton>

            <LinkedinShareButton url={publicUrl}>
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>
        </div>
    )
}

export default ShareButtons
