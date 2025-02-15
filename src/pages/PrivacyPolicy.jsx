import axios from "axios";
import React, { useEffect, useState } from "react";

const PrivacyPolicy = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState([]);

  const getpolicy = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/common/privacy`);
      console.log("Response: ", res.data);
      setPrivacyPolicy(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getpolicy();
  }, []);

  return (
    <>
      {/* <div id="preloader">
    <div className="preloader">
      <span />
      <span />
    </div>
  </div> */}
      <div id="main-wrapper">
        <div className="clearfix" />
        <section>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n\t\t\t\t\tp{\n    text-align:justify;\n   margin-bottom:20px;\n   }\n   h4{\n    font-size:22px;\n    font-weight:bold;\n   }\n\t\t\t\t",
            }}
          />
          <div className="container">
            {/* Row */}
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="sec-heading center">
                  <h3>Privacy Policy </h3>
                </div>
              </div>
            </div>
            {/* Row */}
          </div>
          <div
            className="container card"
            style={{ marginTop: 20, paddingTop: 25, marginBottom: 50 }}
          >
            <p>
              {" "}
              (“we” or “us” or “our”) respects the privacy of our users (“user”
              or “you”). This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our mobile
              application (the “Application”).Please read this Privacy Policy
              carefully. IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY
              POLICY, PLEASE DO NOT ACCESS THE APPLICATION. <br />
              We reserve the right to make changes to this Privacy Policy at any
              time and for any reason. We will alert you about any changes by
              updating the “Last updated” date of this Privacy Policy. You are
              encouraged to periodically review this Privacy Policy to stay
              informed of updates. You will be deemed to have been made aware
              of, will be subject to, and will be deemed to have accepted the
              changes in any revised Privacy Policy by your continued use of the
              Application after the date such revised Privacy Policy is posted.{" "}
              <br />
              This Privacy Policy does not apply to the third-party
              online/mobile store from which you install the Application or make
              payments, including any in-game virtual items, which may also
              collect and use data about you. We are not responsible for any of
              the data collected by any such third party. <br />
            </p>
            <h4>COLLECTION OF YOUR INFORMATION</h4>
            <p>
              We may collect information about you in a variety of ways. The
              information we may collect via the Application depends on the
              content and materials you use, and includes:{" "}
            </p>
            <strong>Personal Data </strong>
            <p>
              Demographic and other personally identifiable information (such as
              your name and email address) that you voluntarily give to us when
              choosing to participate in various activities related to the
              Application, such as chat, posting messages in comment sections or
              in our forums, liking posts, sending feedback, and responding to
              surveys. If you choose to share data about yourself via your
              profile, online chat, or other interactive areas of the
              Application, please be advised that all data you disclose in these
              areas is public and your data will be accessible to anyone who
              accesses the Application.
            </p>
            <strong>Derivative Data </strong>
            <p>
              Information our servers automatically collect when you access the
              Application, such as your native actions that are integral to the
              Application, including liking, re-blogging, or replying to a post,
              as well as other interactions with the Application and other users
              via server log files.
            </p>
            <strong>Financial Data </strong>
            <p>
              Financial information, such as data related to your payment method
              (e.g. valid credit card number, card brand, expiration date) that
              we may collect when you purchase, order, return, exchange, or
              request information about our services from the Application. [We
              store only very limited, if any, financial information that we
              collect. Otherwise, all financial information is stored by our
              payment processor, [Amazon Payments,] [Paypal,] [Stripe,] [WePay,]
              [2Checkout,], and you are encouraged to review their privacy
              policy and contact them directly for responses to your questions.
            </p>
            <strong>Facebook Permissions</strong>
            <p>
              The Application may by default access your Facebook basic account
              information, including your name, email, gender, birthday, current
              city, and profile picture URL, as well as other information that
              you choose to make public. We may also request access to other
              permissions related to your account, such as friends, checkins,
              and likes, and you may choose to grant or deny us access to each
              individual permission. For more information regarding Facebook
              permissions, refer to the Facebook Permissions Reference page.
            </p>
            <strong>Data from Social Networks</strong>
            <p>
              User information from social networking sites, such as [Apple’s
              Game Center, Facebook, Google+ Instagram, Pinterest, Twitter],
              including your name, your social network username, location,
              gender, birth date, email address, profile picture, and public
              data for contacts, if you connect your account to such social
              networks. This information may also include the contact
              information of anyone you invite to use and/or join the
              Application.
            </p>
            <strong>Geo-Location Information </strong>
            <p>
              We may request access or permission to and track location-based
              information from your mobile device, either continuously or while
              you are using the Application, to provide location-based services.
              If you wish to change our access or permissions, you may do so in
              your device’s settings.
            </p>
            <strong>Mobile Device Access </strong>
            <p>
              We may request access or permission to certain features from your
              mobile device, including your mobile device’s [bluetooth,
              calendar, camera, contacts, microphone, reminders, sensors, SMS
              messages, social media accounts, storage,] and other features. If
              you wish to change our access or permissions, you may do so in
              your device’s settings.
            </p>
            <strong>Mobile Device Data </strong>
            <p>
              Device information such as your mobile device ID number, model,
              and manufacturer, version of your operating system, phone number,
              country, location, and any other data you choose to provide.
            </p>
            <strong>Push Notifications</strong>
            <p>
              We may request to send you push notifications regarding your
              account or the Application. If you wish to opt-out from receiving
              these types of communications, you may turn them off in your
              device’s settings.
            </p>
            <strong>Third-Party Data</strong>
            <p>
              Information from third parties, such as personal information or
              network friends, if you connect your account to the third party
              and grant the Application permission to access this information.
            </p>
            <strong>Data From Contests, Giveaways, and Surveys </strong>
            <p>
              Personal and other information you may provide when entering
              contests or giveaways and/or responding to surveys.
            </p>
            <h4>USE OF YOUR INFORMATION</h4>
            <p>
              Having accurate information about you permits us to provide you
              with a smooth, efficient, and customized experience. Specifically,
              we may use information collected about you via the Application to:
              <br />
              1. Administer sweepstakes, promotions, and contests. <br />
              2. Assist law enforcement and respond to subpoena.
              <br />
              3. Compile anonymous statistical data and analysis for use
              internally or with third parties.
              <br />
              4. Create and manage your account.
              <br />
              5. Deliver targeted advertising, coupons, newsletters, and other
              information regarding promotions and the Application to you.{" "}
              <br />
              6. Email you regarding your account or order.
              <br />
              7. Enable user-to-user communications.
              <br />
              8. Fulfill and manage purchases, orders, payments, and other
              transactions related to the Application.
              <br />
              9. Generate a personal profile about you to make future visits to
              the Application more personalized.
              <br />
              10. Increase the efficiency and operation of the Application.
              <br />
              11. Monitor and analyze usage and trends to improve your
              experience with the Application.
              <br />
              12. Notify you of updates to the Application.
              <br />
              13. Offer new products, services, mobile applications, and/or
              recommendations to you.
              <br />
              14. Perform other business activities as needed.
              <br />
              15. Prevent fraudulent transactions, monitor against theft, and
              protect against criminal activity.
              <br />
              16. Process payments and refunds.
              <br />
              17. Request feedback and contact you about your use of the
              Application. <br />
              18. Resolve disputes and troubleshoot problems.
              <br />
              19. Respond to product and customer service requests.
              <br />
              20. Send you a newsletter.
              <br />
              21. Solicit support for the Application.
              <br />
            </p>
            <h4>DISCLOSURE OF YOUR INFORMATION</h4>
            <p>
              We may share information we have collected about you in certain
              situations. Your information may be disclosed as follows:{" "}
            </p>
            <strong>By Law or to Protect Rights </strong>
            <p>
              If we believe the release of information about you is necessary to
              respond to legal process, to investigate or remedy potential
              violations of our policies, or to protect the rights, property,
              and safety of others, we may share your information as permitted
              or required by any applicable law, rule, or regulation. This
              includes exchanging information with other entities for fraud
              protection and credit risk reduction.
            </p>
            <strong>Third-Party Service Providers</strong>
            <p>
              We may share your information with third parties that perform
              services for us or on our behalf, including payment processing,
              data analysis, email delivery, hosting services, customer service,
              and marketing assistance.{" "}
            </p>
            <strong>Marketing Communications</strong>
            <p>
              With your consent, or with an opportunity for you to withdraw
              consent, we may share your information with third parties for
              marketing purposes, as permitted by law.
            </p>
            <strong>Interactions with Other Users </strong>
            <p>
              If you interact with other users of the Application, those users
              may see your name, profile photo, and descriptions of your
              activity, including sending invitations to other users, chatting
              with other users, liking posts, following blogs.{" "}
            </p>
            <strong>Online Postings</strong>
            <p>
              When you post comments, contributions or other content to the
              Applications, your posts may be viewed by all users and may be
              publicly distributed outside the Application in perpetuity
            </p>
            <strong>Third-Party Advertisers</strong>
            <p>
              We may use third-party advertising companies to serve ads when you
              visit the Application. These companies may use information about
              your visits to the Application and other websites that are
              contained in web cookies in order to provide advertisements about
              goods and services of interest to you.
            </p>
            <strong>Affiliates </strong>
            <p>
              We may share your information with our affiliates, in which case
              we will require those affiliates to honor this Privacy Policy.
              Affiliates include our parent company and any subsidiaries, joint
              venture partners or other companies that we control or that are
              under common control with us.
            </p>
            <strong>Business Partners </strong>
            <p>
              We may share your information with our business partners to offer
              you certain products, services or promotions.{" "}
            </p>
            <strong>Offer Wall </strong>
            <p>
              The Application may display a third-party-hosted “offer wall.”
              Such an offer wall allows third-party advertisers to offer virtual
              currency, gifts, or other items to users in return for acceptance
              and completion of an advertisement offer. Such an offer wall may
              appear in the Application and be displayed to you based on certain
              data, such as your geographic area or demographic information.
              When you click on an offer wall, you will leave the Application. A
              unique identifier, such as your user ID, will be shared with the
              offer wall provider in order to prevent fraud and properly credit
              your account.{" "}
            </p>
            <strong>Social Media Contacts </strong>
            <p>
              If you connect to the Application through a social network, your
              contacts on the social network will see your name, profile photo,
              and descriptions of your activity.
            </p>
            <strong>Other Third Parties</strong>
            <p>
              We may share your information with advertisers and investors for
              the purpose of conducting general business analysis. We may also
              share your information with such third parties for marketing
              purposes, as permitted by law.{" "}
            </p>
            <strong>Sale or Bankruptcy </strong>
            <p>
              If we reorganize or sell all or a portion of our assets, undergo a
              merger, or are acquired by another entity, we may transfer your
              information to the successor entity. If we go out of business or
              enter bankruptcy, your information would be an asset transferred
              or acquired by a third party. You acknowledge that such transfers
              may occur and that the transferee may decline honor commitments we
              made in this Privacy Policy.
            </p>
            <p>
              We are not responsible for the actions of third parties with whom
              you share personal or sensitive data, and we have no authority to
              manage or control third-party solicitations. If you no longer wish
              to receive correspondence, emails or other communications from
              third parties, you are responsible for contacting the third party
              directly.{" "}
            </p>
            <h4>TRACKING TECHNOLOGIES</h4>
            <strong>Cookies and Web Beacons</strong>
            <p>
              We may use cookies, web beacons, tracking pixels, and other
              tracking technologies on the Application to help customize the
              Application and improve your experience. When you access the
              Application, your personal information is not collected through
              the use of tracking technology. Most browsers are set to accept
              cookies by default. You can remove or reject cookies, but be aware
              that such action could affect the availability and functionality
              of the Application. You may not decline web beacons. However, they
              can be rendered ineffective by declining all cookies or by
              modifying your web browser’s settings to notify you each time a
              cookie is tendered, permitting you to accept or decline cookies on
              an individual basis.
            </p>
            <strong>Internet-Based Advertising</strong>
            <p>
              Additionally, we may use third-party software to serve ads on the
              Application, implement email marketing campaigns, and manage other
              interactive marketing initiatives. This third-party software may
              use cookies or similar tracking technology to help manage and
              optimize your online experience with us. For more information
              about opting-out of interest-based ads, visit the Network
              Advertising Initiative Opt-Out Tool or Digital Advertising
              Alliance Opt-Out Tool.
            </p>
            <h4>SECURITY OF YOUR INFORMATION</h4>
            <p>
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that despite our efforts, no security measures
              are perfect or impenetrable, and no method of data transmission
              can be guaranteed against any interception or other type of
              misuse. Any information disclosed online is vulnerable to
              interception and misuse by unauthorized parties. Therefore, we
              cannot guarantee complete security if you provide personal
              information.
            </p>
            <h4>POLICY FOR CHILDREN</h4>
            <p>
              We do not knowingly solicit information from or market to children
              under the age of 13. If you become aware of any data we have
              collected from children under age 13, please contact us using the
              contact information provided below.{" "}
            </p>
            <h4>CONTROLS FOR DO-NOT-TRACK FEATURES</h4>
            <p>
              Most web browsers and some mobile operating systems [and our
              mobile applications] include a Do-Not-Track (“DNT”) feature or
              setting you can activate to signal your privacy preference not to
              have data about your online browsing activities monitored and
              collected. No uniform technology standard for recognizing and
              implementing DNT signals has been finalized. As such, we do not
              currently respond to DNT browser signals or any other mechanism
              that automatically communicates your choice not to be tracked
              online. If a standard for online tracking is adopted that we must
              follow in the future, we will inform you about that practice in a
              revised version of this Privacy Policy.
            </p>
            <h4>OPTIONS REGARDING YOUR INFORMATION</h4>
            <p>
              You may at any time review or change the information in your
              account or terminate your account by:
            </p>
            <p>
              ● Logging into your account settings and updating your account
            </p>
            <p>
              ● Contacting us using the “Email” button in the app. Enter “cancel
              my account” in the subject line Upon your request to terminate
              your account, we will deactivate or delete your account and
              information from our active databases. However, some information
              may be retained in our files to prevent fraud, troubleshoot
              problems, assist with any investigations, enforce our Terms of Use
              and/or comply with legal requirements.
            </p>
            <strong>Emails and Communications</strong>
            <p>
              If you no longer wish to receive correspondence, emails, or other
              communications from us, you may opt-out by:
            </p>
            <p>
              ● Noting your preferences at the time you register your account
              with the Application
            </p>
            <p>
              ● Logging into your account settings and updating your
              preferences.
            </p>
            <p>
              ● Contacting us using the “Email” button in the app. Enter “update
              my account” in the subject line If you no longer wish to receive
              correspondence, emails, or other communications from third
              parties, you are responsible for contacting the third party
              directly.{" "}
            </p>
            <h4>CONTACT US</h4>
            <p>
              If you have questions or comments about this Privacy Policy,
              please contact us at:
            </p>
            <p>
              XXXX-XXXXXXXX <br />
              test@mail.com
            </p>
          </div>
        </section>
        <a id="back2Top" className="top-scroll" title="Back to top" href="#">
          <i className="ti-arrow-up" />
        </a>
      </div>
    </>
  );
};

export default PrivacyPolicy;
