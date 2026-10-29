import type { Metadata } from "next";
import LegalPage from "@/app/components/LegalPage";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "General information and terms for using the website of Jagdeep Kaur, Advocate.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      eyebrow="Website information"
      title="Disclaimer"
      intro="This website offers general professional information about Jagdeep Kaur, Advocate, and her practice. It is not a substitute for advice on your circumstances."
    >
      <h2>General information, not legal advice</h2>
      <p>
        The material here is provided for general information and may not
        reflect the latest legal developments or apply to your situation. Do not
        act or refrain from acting on it without advice based on the relevant
        facts and law.
      </p>

      <h2>Professional conduct and voluntary access</h2>
      <p>
        This site is intended to identify the advocate and provide general
        information, not to solicit work or advertise legal services. It is made
        available subject to the professional conduct rules applicable to
        advocates, including Rule 36 of the Bar Council of India Rules.
        Accessing it is voluntary. This notice does not represent or certify
        approval by a regulatory body or a determination of compliance.
      </p>

      <h2>No engagement by browsing or enquiry</h2>
      <p>
        Viewing this site, contacting the office, or receiving a reply does not
        by itself create a lawyer-client relationship. Representation or advice
        begins only after conflicts and suitability are considered and a formal
        engagement is agreed. No confidential or sensitive case documents should
        be sent by ordinary email or through this public website. If a matter
        proceeds, an appropriate channel can be agreed.
      </p>

      <h2>POSH information and scope</h2>
      <p>
        Information about workplace sexual harassment and POSH support is
        general. Employers and their Internal Committees retain the duties
        assigned to them by law. An external member serves on an Internal
        Committee only when eligible and properly appointed. Parties cannot
        bring a legal practitioner to represent them in Internal or Local
        Committee proceedings under Rule 7(6) of the POSH Rules. Specific
        responsibilities depend on the facts and applicable requirements.
      </p>

      <h2>No outcome guarantee</h2>
      <p>
        Care is taken in preparing this material, but no warranty is given that
        it is complete, current, or suitable for a particular purpose. Legal
        outcomes depend on their circumstances; no result is promised or
        implied.
      </p>

      <aside className="legal-note">
        For existing clients, the{" "}
        <a href={siteConfig.portalUrl}>client portal</a> is separate from this
        public website. Please check the information and terms provided there.
      </aside>
    </LegalPage>
  );
}
