import {
    FacebookShareButton,
    FacebookIcon, TwitterIcon, TwitterShareButton, LinkedinIcon, LinkedinShareButton
} from "next-share";
import { useRouter } from "next/router";

function ShareButtons() {
    const route = useRouter();
    let publicUrl = process.env.PUBLIC_URL + route.asPath;

    return <div className={"shareButtons"}>
        <FacebookShareButton
            url={publicUrl}
        >
            <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
            url={publicUrl}
        >
            <TwitterIcon size={32} round />
        </TwitterShareButton>

        <LinkedinShareButton
            url={publicUrl}
        >
            <LinkedinIcon size={32} round />
        </LinkedinShareButton>
    </div>;

}

export default ShareButtons;

