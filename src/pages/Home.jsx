import { AboutMe } from "../cmps/AboutMe";
import { Contact } from "../cmps/Contact";
import { ForWho } from "../cmps/ForWho";
import { Offers } from "../cmps/Offers";
import { Reviews } from "../cmps/Reviews";
import { WhyMe } from "../cmps/WhyMe";

export function Home() {
    return (
        <section className="home-page" >
            <section className="hero">
                <h1>מיניות בריאה</h1>
                <p>שיח שמותאם בדיוק לכם הורים, מחנכים ונערות, זה הזמן לנהל שיח פתוח, מכבד ומותאם גיל על מיניות, גבולות ודימוי גוף. <br /> בואו נעשה את זה יחד, עם ידע, ביטחון וכלים פרקטיים.</p>
            </section>
            <AboutMe />
            <WhyMe />
            <Offers />
            <Reviews />
            <ForWho />
            <Contact />
        </section>
    )
}