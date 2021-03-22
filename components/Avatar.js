import Link from "next/link"

const Avatar = () => {
    return (
        <div className="avatar">
            <Link href="/">
                <img src="/avatar.jpg" className="img-fluid" alt="avatar" />
            </Link>
        </div>
    )
}

export default Avatar
