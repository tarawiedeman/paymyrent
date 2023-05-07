import "./Home.scss";

function Home() {
    return (
        <section>

            <div className="hero">
            <h1>Rent - Made Simple</h1>
            </div>

            <div className="product">

                <p className="product__description"> <span className="product__description--bold">PayMyRent</span> is an application that allows renters to pay their individual portion of rent by credit card each month.</p>
                
                <h2 classname="benefits__subheader">Benefits for Renters:</h2>
                <ul classname="benefits__list">
                    <li>Only pay the portion of rent you owe for shared rental accomodation</li>
                    <li>Easily pay by credit card each month and accumulate points with your card provider</li>
                    <li>Avoid etransfer fees & debit transaction limits</li>
                </ul>

                <h2 classname="benefits__subheader">Benefits for Landlords:</h2>
                <ul classname="benefits__list">
                    <li>Consolidate collection of rent payments in one system - simpler auditing and tracking</li>
                    <li>Eliminate manual rent receipting</li>
                    <li>Impress potential tenants with easy payment solution</li>
                </ul>

                <h2 className="salespitch">Interested in using PayMyRent for your rental property?</h2>
                <button className="button__quote"type="submit">Request a Quote</button>
            </div>
        </section>
    );
}


export default Home;