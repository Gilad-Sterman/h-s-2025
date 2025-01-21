export function Offers({ }) {
    return (
        <section className="offers" id="offers" >
            <h2 className="pill">מה אני מציעה?</h2>
            <h4>סדנאות ומפגשים מותאמים אישית לכל קהל</h4>
            <section className="card-container">
                <div className="offer card" data-aos="flip-up">
                    <h4>📚 להורים:</h4>
                    <h5>"איך לדבר עם ילדים על הגוף"</h5>
                    <p>מפגש מעשי שנותן כלים איך לדבר עם ילדים על מיניות, גבולות ודימוי גוף בצורה מכבדת ופתוחה.
                        למי זה מתאים?: הורים לילדים בגילאי 0-11.
                        מה תקבלו?: כלים להתמודד עם שאלות מביכות, לבנות שיח בריא ולחזק ערכים בבית.</p>
                </div>
                <div className="offer card" data-aos="flip-up">
                    <h4>🌸 לנערות:</h4>
                    <h5>"אני בעקבות השינוי"</h5>
                    <p>סדנה מרתקת לגיל ההתבגרות. נלמד על דימוי גוף חיובי, מחזוריות האישה, ואיך לשמור על תחושת ערך עצמי.
                        למי זה מתאים?: נערות בגילאי 12-15.
                        מה תקבלי?: ביטחון עצמי מוגבר, הבנה עמוקה יותר של גופך ושיח פתוח על נושאים חשובים.</p>
                </div>
                <div className="offer card" data-aos="flip-up">
                    <h4>🎤 לקהלים מגוונים:</h4>
                    <h5>"דברי עכשיו ילדה אני שומעת"</h5>
                    <p>סיפור אישי על פגיעה מינית, הכוח לרפא, והחשיבות של שיח פתוח.</p>
                </div>
            </section>
            <button className="btn-contact">
                <a
                    href="https://wa.me/972585003431"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    רוצה לדעת איזו סדנה מתאימה לך? לחצי כאן ונדבר!
                </a>
            </button>
        </section>
    )
}