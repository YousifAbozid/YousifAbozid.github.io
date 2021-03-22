const SocialButtons = () => {
    return (
        <div className="social_buttons">
            <a
                href="https://github.com/YousifAbozid"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span>
                    <i className="fab fa-github" aria-hidden></i>
                </span>
                GitHub
            </a>
            <a
                href="https://facebook.com/YousifAbozid"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span>
                    <i className="fab fa-facebook" aria-hidden></i>
                </span>
                FaceBook
            </a>
            <a
                href="https://t.me/YousifAbozid"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span>
                    <i className="fab fa-telegram" aria-hidden></i>
                </span>
                Telegram
            </a>
            <a
                href="mailto:yousif.abozid@yahoo.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span>
                    <i className="fas fa-at" aria-hidden></i>
                </span>
                Mail
            </a>
        </div>
    )
}

export default SocialButtons
