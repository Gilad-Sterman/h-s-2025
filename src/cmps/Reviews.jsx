export function Reviews({ }) {
    return (
        <section className="reviews" id="reviews" >
            <h2 className="pill">מה אומרים עליי?</h2>
            <h4>לקוחות ממליצים</h4>
            <section className="card-container">
                <div className="review card" data-aos="fade-up">
                    <h4>💬 "שירה מקצועית, רגישה ומלאת ידע. הבנות התלהבו!"</h4>
                    <h5>מוריה קמפני</h5>
                </div>
                <div className="review card" data-aos="fade-up">
                    <h4>💬 "שירה הסבירה עם המון סבלנות והתייחסה ברגישות לכל שאלה."</h4>
                    <h5>עדי אברהם</h5>
                </div>
                <div className="review card" data-aos="fade-up">
                    <h4>💬 "סדנה מקצועית ומרגשת, שירה הייתה מקסימה ונעימה." </h4>
                    <h5>אתי דקלים</h5>
                </div>
                <div className="review card" data-aos="fade-up">
                    <h4>💬 "שירה הייתה קשובה, מקצועית ואכפתית."</h4>
                    <h5>שני מלמד</h5>
                </div>
                <div className="review card" data-aos="fade-up">
                    <h4>💬 "הייתה חוויה מעצימה ומלמדת לכל המשתתפות!"</h4>
                    <h5>הלל בנט</h5>
                </div>
                <div className="review card" data-aos="fade-up">
                    <h4>💬 "הבנות כתבו לי במשובים שהן הרגישו בנוח לשאול ולהבין."</h4>
                    <h5>עדי יפה</h5>
                </div>
            </section>
            <button className="btn-add-review">
                ✍️ רוצה להוסיף המלצה? לחצי כאן!
            </button>
        </section>
    )
}