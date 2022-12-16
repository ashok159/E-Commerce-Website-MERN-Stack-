import React from "react";
import { Link } from "react-router-dom";
import "../styles/PrivacyPage.css";
import Footer from "../components/Footer";

function PrivacyPage() {
    return (
        <div className="privacy">
            <div className="privacy-header">
                <h1>Privacy Policy</h1>
                <br/>
                <p>This privacy policy will explain how our organization uses the personal data we collect from you when you use our website.</p>
            </div>
            <div className="privacy-body">
                <h2>What data do we collect?</h2>
                <p>Our organization collects the following data:</p>
                <p> First Name, Last Name, Address, City, State, Zip Code, Email, Phone Number </p>
            </div>
            <div className="privacy-body">
                <h2>How do we collect your data?</h2>
                <p>You directly provide our organization with most of the data we collect. We collect data and process data when you:</p>
                <ul>
                    <li>Place an order</li>
                    <li>Enter information on our website</li>
                    <li>Use or view our website via your browser's cookies</li>
                </ul>
            </div>
            <div className="privacy-body">
                <h2>How will we use your data?</h2>
                <p>Our organization collects your data so that we can:</p>
                <ul>
                    <li>Process your order and manage your account</li>
                    <li>Email you with special offers on other products and services we think you might like</li>
                </ul>
            </div>
            <div className="privacy-body">
                <h2>How do we store your data?</h2>
                <p>Our organization securely stores your data at a secure location. We will keep your data for 1 year.</p>
            </div>
            <div className="privacy-body">
                <h2>What are your data protection rights?</h2>
                <p>Our organization would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                <ul>
                    <li>The right to access – You have the right to request our organization for copies of your personal data. We may charge you a small fee for
                    this service.</li>
                    <li>The right to rectification – You have the right to request that our organization correct any information you believe is inaccurate. You
                    also have the right to request our organization to complete the information you believe is incomplete.</li>
                    <li>The right to erasure – You have the right to request that our organization erase your personal data, under certain conditions.</li>
                    <li>The right to restrict processing – You have the right to request that our organization restrict the processing of your personal data, under
                    certain conditions.</li>
                    <li>The right to object to processing – You have the right to object to our organization's processing of your personal data, under certain
                    conditions.</li>
                    <li>The right to data portability – You have the right to request that our organization transfer the data that we have collected to another
                    organization, or directly to you, under certain conditions.</li>
                </ul>
            </div>
            <div className="privacy-body">
                <h2>What are cookies?</h2>
                <p>Cookies are text files placed on your computer to collect standard Internet log information and visitor behavior information. When you visit our
                websites, we may collect information from you automatically through cookies or similar technology</p>
                <p>For further information, visit allaboutcookies.org.</p>
            </div>
            <div className="privacy-body">
                <h2>How do we use cookies?</h2>
                <p>Our organization uses cookies in a range of ways to improve your experience on our website, including:</p>
                <ul>
                    <li>Keeping you signed in</li>
                    <li>Understanding how you use our website</li>
                </ul>
            </div>
            <div className="privacy-body">
                <h2>What types of cookies do we use?</h2>
                <p>There are a number of different types of cookies, however, our website uses:</p>
                <ul>
                    <li>Functionality – Our organization uses these cookies so that we recognize you on our website and remember your previously selected
                    preferences. These could include what language you prefer and location you are in. A mix of first-party and third-party cookies are used.</li>
                </ul>
            </div> 
            <div className="privacy-body">
                <h2>How to manage cookies</h2>
                <p>You can set your browser not to accept cookies, and the above website tells you how to remove cookies from your browser. However, in a few cases,
                some of our website features may not function as a result.</p>
            </div>
            <div className="privacy-body">
                <h2>Privacy policies of other websites</h2>
                <p>The our organization website contains links to other websites. Our privacy policy applies only to our website, so if you click on a link to another
                website, you should read their privacy policy.</p>
            </div>
            <div className="privacy-body">
                <h2>Changes to our privacy policy</h2>
                <p>Our organization keeps its privacy policy under regular review and places any updates on this web page. This privacy policy was last updated on 1
                January 2021.</p>
            </div>
            <div className="privacy-body">
                <h2>How to contact us</h2>
                <p>If you have any questions about our organization's privacy policy, the data we hold on you, or you would like to exercise one of your data
                protection rights, please do not hesitate to contact us.</p>
                <p>Email us at:  <a href="mailto:nozama@gmail.com">nozama@gmail.com </a> </p >




          </div>
        </div>
    )
}
export default PrivacyPage;
