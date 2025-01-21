export function Contact({ }) {
    return (
        <section className="contact" id="contact" >
            <h2 className="pill">צרי קשר עכשיו!</h2>
            <button className="btn-contact">
                <a
                    href="https://wa.me/972585003431"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    📞 לחצי כאן כדי לעבור לוואטסאפ ולהתחיל את השינוי.
                </a>
            </button>
            <h4>התחברי אליי גם באינסטגרם ובפלטפורמות נוספות.</h4>
            <section className="links">
                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="https://res.cloudinary.com/dollaguij/image/upload/v1737471627/icons/instagram_jfudhy.png" alt="instagram" />
                </a>
                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="https://res.cloudinary.com/dollaguij/image/upload/v1737471626/icons/facebook_h1mbvg.png" alt="facebook" />
                </a>
            </section>
        </section>
    )
}