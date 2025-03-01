import { Link } from "react-router-dom";
import { companyDetails } from "../content/constant";

const PrivacyPolicy = () => {
  return (
    <div className="mt-[4.5rem] pt-[2rem] lg:pt-[6rem]">
      <div data-aos="fade-up" className="wrapper">
        <h1 className="text1 mb-8">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text3 mb-4">1. Introduction</h2>
          <p className="desc text-white/70 mb-4">
            Welcome to Rutansh Technologies LLP (“Company,” “we,” “our,” or
            “us”). We are committed to safeguarding your personal information
            and respecting your privacy. This Privacy Policy explains how we
            collect, use, store, and protect the personal information you
            provide when you visit our website (“Site”) or use our services.
          </p>
          <p className="desc text-white/70">
            By accessing or using our Site, you agree to the terms of this
            Privacy Policy. If you do not agree with these terms, please refrain
            from using our Site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text3 mb-4">2. Information We Collect</h2>

          <h3 className="text3 text-xl font-semibold mb-2">
            2.1 Information You Provide
          </h3>
          <p className="desc text-white/70 mb-4">
            We may collect personal information you voluntarily provide, such
            as:
          </p>
          <ul className="list-disc list-inside desc text-white/70 mb-4">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>Any other details you include in contact forms or inquiries</li>
          </ul>

          <h3 className="text3 text-xl font-semibold mb-2">
            2.2 Automatically Collected Information
          </h3>
          <p className="desc text-white/70">
            When you visit our Site, we may automatically collect certain
            information, including:
          </p>
          <ul className="list-disc list-inside desc text-white/70 mb-4">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device information (e.g., operating system)</li>
            <li>Pages visited on our Site</li>
            <li>Time spent on each page</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text3 mb-4">3. How We Use Your Information</h2>
          <p className="desc text-white/70 mb-4">
            We use the information we collect for the following purposes:
          </p>
          <ol className="list-decimal list-inside desc text-white/70 mb-4">
            <li>
              To Provide and Improve Our Services: We use your information to
              operate, maintain, and enhance our Site and services.
            </li>
            <li>
              To Respond to Inquiries: We may use your contact information to
              respond to questions or requests you submit.
            </li>
            <li>
              To Send Communications: We may send service-related updates,
              promotional materials, or other information related to our
              services.
            </li>
            <li>
              To Improve Website Functionality: We analyze user behavior to
              optimize user experience and Site performance.
            </li>
            <li>
              To Comply With Legal Obligations: We may process your information
              to fulfill legal requirements or respond to lawful requests.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text3 mb-4">4. Sharing Your Information</h2>
          <p className="desc text-white/70 mb-4">
            We do not sell, rent, or share your personal information with third
            parties for their marketing purposes. However, we may share your
            information in the following circumstances:
          </p>
          <ol className="list-decimal list-inside desc text-white/70 mb-4">
            <li>
              Service Providers: We work with third-party service providers who
              assist us in operating our Site and delivering our services. These
              providers have access to your information only to perform tasks on
              our behalf and are obligated to protect it.
            </li>
            <li>
              Legal Authorities: We may disclose your information if required by
              law, subpoena, or other legal processes, or if we believe
              disclosure is necessary to protect our rights, property, or
              safety.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text3 mb-4">5. Cookies and Tracking Technologies</h2>
          <p className="desc text-white/70 mb-4">
            We use cookies to enhance your browsing experience. A cookie is a
            small file placed on your device that helps us recognize you and
            remember your preferences.
          </p>

          <h3 className="text3 text-xl font-semibold mb-2">
            5.1 Types of Cookies We Use
          </h3>
          <ul className="list-disc list-inside desc text-white/70 mb-4">
            <li>
              Essential Cookies: Necessary for the Site to function properly.
            </li>
            <li>
              Performance Cookies: Help us understand how visitors interact with
              our Site (e.g., most visited pages, time spent).
            </li>
            <li>
              Functional Cookies: Remember your preferences, settings, and
              improve your user experience.
            </li>
          </ul>

          <h3 className="text3 text-xl font-semibold mb-2">
            5.2 Managing Cookies
          </h3>
          <p className="desc text-white/70">
            Most web browsers allow you to manage or disable cookies through the
            browser settings. Please note that disabling cookies may limit some
            functionality of our Site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text3 mb-4">6. Data Security</h2>
          <p className="desc text-white/70">
            We implement industry-standard security measures to protect your
            personal information from unauthorized access, disclosure, or
            alteration. However, no method of electronic transmission or storage
            is entirely secure. While we strive to protect your data, we cannot
            guarantee its absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text3 mb-4">7. Your Rights</h2>
          <p className="desc text-white/70 mb-4">
            Depending on the laws in your jurisdiction, you may have certain
            rights regarding your personal information, including:
          </p>
          <ul className="list-disc list-inside desc text-white/70 mb-4">
            <li>
              Right of Access: You have the right to request access to your
              personal information.
            </li>
            <li>
              Right to Rectification: You can request the correction of any
              inaccurate or incomplete information.
            </li>
            <li>
              Right to Erasure (“Right to be Forgotten”): You can ask us to
              delete your personal information, subject to certain exceptions.
            </li>
            <li>
              Right to Restrict Processing: You can request that we limit how
              your personal information is used.
            </li>
            <li>
              Right to Data Portability: You can request a copy of your personal
              information in a structured, machine-readable format.
            </li>
            <li>
              Right to Object: You have the right to object to certain types of
              data processing.
            </li>
          </ul>
          <p className="desc text-white/70">
            To exercise any of these rights, please contact us at{" "}
            <Link
              to={`mailto:${companyDetails.email}`}
              className="text-primary"
            >
              {companyDetails.email}
            </Link>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text3 mb-4">8. Third-Party Links</h2>
          <p className="desc text-white/70">
            Our Site may contain links to external websites or resources. We are
            not responsible for the privacy practices or content of these
            third-party sites. We encourage you to review their privacy policies
            before providing any personal information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text3 mb-4">9. Changes to This Privacy Policy</h2>
          <p className="desc text-white/70">
            We reserve the right to update or modify this Privacy Policy at any
            time. When we do, we will revise the “Last Updated” date at the top
            of this page. Your continued use of our Site after any changes
            indicates your acceptance of the updated Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text3 mb-4">10. Contact Us</h2>
          <p className="desc text-white/70 mb-4">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="desc text-white/70">
            Rutansh Technologies LLP
            <br />
            {companyDetails.address}
            <br />
            Phone:{" "}
            <Link to={`tel:${companyDetails.phone}`} className="text-primary">
              {companyDetails.phone}
            </Link>
            <br />
            Email:{" "}
            <Link
              to={`mailto:${companyDetails.email}`}
              className="text-primary"
            >
              {companyDetails.email}
            </Link>
          </p>
          <p className="desc text-white/70 mt-4">
            Thank you for choosing Rutansh Technologies LLP. We are committed to
            safeguarding your privacy and providing a secure online experience.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
