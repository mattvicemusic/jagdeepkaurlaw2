import type { Metadata } from "next";
import LegalPage from "@/app/components/LegalPage";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy notice",
  description:
    "How the public website and business enquiries may involve personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Your information"
      title="Privacy notice"
      intro="This notice explains the intended handling of information when you browse this public website or make a business enquiry. The client portal is a separate service."
    >
      <h2>Information and purposes</h2>
      <p>
        If you contact the practice by email or telephone, information you
        choose to provide, such as your contact details and the subject of your
        enquiry, may be used to respond, assess whether the matter can be
        considered, manage communications, and, if an engagement follows,
        administer legal work and meet professional or legal obligations. Please
        do not send case documents or sensitive information to this public site
        or in an initial email. If appropriate after an engagement, a suitable
        channel can be agreed.
      </p>

      <h2>Website operations</h2>
      <p>
        The site does not use analytics or advertising tracking tools. Hosting
        and delivery through Vercel may involve ordinary operational request
        logging, such as technical information needed to run and protect the
        service. This public website does not add a visitor account, contact
        form or stored acknowledgement.
      </p>

      <h2>Email and service providers</h2>
      <p>
        Email and telephone communications are handled through the services and
        devices used to send or receive them. Your email provider and the
        recipient's provider may process and retain message or connection
        information under their own terms. Do not assume ordinary email is
        confidential or suitable for sensitive material. The linked client
        portal is outside the scope of this public-site notice. Review the
        information provided there before using it.
      </p>

      <h2>Sharing, retention, and choices</h2>
      <p>
        Personal information is not intended to be sold or used to build
        marketing lists. Information may be handled by service providers
        involved in communications or site operation and may be retained as
        needed to respond, manage a matter, maintain appropriate practice
        records, or meet legal obligations. Retention depends on the
        circumstances and applicable requirements; no single fixed period
        applies to every record.
      </p>
      <p>
        You may ask to access, correct, or delete personal information by
        contacting <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        . Requests are considered subject to identity checks, applicable legal
        duties, recordkeeping requirements, and other valid limits.
      </p>

      <h2>No relationship from contact alone</h2>
      <p>
        Sending an enquiry does not create a lawyer-client relationship. Please
        share only the minimum information needed to make an initial enquiry.
        Further information should be provided only through an agreed channel
        after next steps are discussed.
      </p>
    </LegalPage>
  );
}
