import "./home.css";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/app/components/WhatsAppButton";
import { Arrow } from "@/app/components/Arrow";
import { SiteFooter } from "@/app/components/SiteFooter";
import { siteConfig, supportAreas } from "@/lib/data";

const scopeLabels = [
  "Policies & training",
  "Reporting & ongoing support",
  "Complaint-process guidance",
];

export default function HomePage() {
  return (
    <div className="home-preview">
      <header className="home-header">
        <div className="home-container home-header-inner">
          <Link href="/" className="home-wordmark">
            <span>Jagdeep Kaur</span>
            <span>Advocate</span>
          </Link>
          <nav aria-label="Main navigation">
            <a href="#scope">POSH support</a>
            <a href="#about">About Jagdeep</a>
            <a className="home-nav-contact" href="#contact">
              Contact <Arrow diagonal />
            </a>
          </nav>
        </div>
      </header>
      <main id="main-content" tabIndex={-1}>
        <section className="home-hero" aria-labelledby="hero-title">
          <div className="home-hero-copy">
            <p className="home-kicker">POSH & workplace law</p>
            <h1 id="hero-title">
              POSH compliance.
              <br />
              Workplace legal
              <br />
              support.
            </h1>
            <p className="home-hero-intro">
              I support employers and HR teams with policies, training,
              reporting and the legal questions that arise along the way.
            </p>
            <div className="home-hero-actions">
              <a className="home-button" href="#scope">
                Explore the scope <Arrow />
              </a>
              <WhatsAppButton compact />
            </div>
            <p className="home-location">
              {siteConfig.location}
              <br />
              Consultations by appointment
            </p>
          </div>
          <figure className="home-hero-photo">
            <Image
              src="/images/portrait.jpg"
              alt="Professional portrait retained from the original website"
              width={1025}
              height={1534}
              priority
              unoptimized
              sizes="(max-width: 700px) 100vw, 48vw"
            />
            <figcaption>
              <span>Jagdeep Kaur</span>
              <span>Advocate</span>
            </figcaption>
          </figure>
        </section>

        <section
          id="scope"
          className="home-scope home-section"
          aria-labelledby="scope-title"
        >
          <div className="home-container home-scope-layout">
            <div className="home-section-intro">
              <p className="home-kicker">The work</p>
              <h2 id="scope-title">
                Support for your
                <br />
                workplace responsibilities.
              </h2>
              <p>
                Policies, people and process all need attention. The work can
                begin with existing arrangements and continue around an agreed
                training and reporting calendar.
              </p>
              <a className="home-inline-link" href="#working-together">
                How ongoing support works <Arrow />
              </a>
            </div>
            <div className="home-services">
              {supportAreas.map((area, index) => (
                <details
                  className="home-service"
                  name="posh-scope"
                  key={area.number}
                  open={index === 0}
                >
                  <summary>
                    <span className="home-service-name">
                      {scopeLabels[index]}
                    </span>
                    <span className="home-service-toggle" aria-hidden="true" />
                  </summary>
                  <div className="home-service-content">
                    <p>{area.description}</p>
                    <ul>
                      {area.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </details>
              ))}
              <p className="home-scope-note">
                The scope and responsibilities are agreed for each engagement.
              </p>
            </div>
          </div>
        </section>

        <section
          id="working-together"
          className="home-working home-section"
          aria-labelledby="working-title"
        >
          <div className="home-container home-working-layout">
            <div>
              <p className="home-kicker">Working together</p>
              <h2 id="working-title">
                An ongoing
                <br />
                working relationship.
              </h2>
              <p className="home-working-intro">
                Support can be arranged around your organisation's needs, rather
                than a single document or filing.
              </p>
            </div>
            <div className="home-working-steps">
              <div>
                <h3>Understand the starting point</h3>
                <p>
                  Review the organisation's arrangements, workplace context and
                  requirements.
                </p>
              </div>
              <div>
                <h3>Agree the work and responsibilities</h3>
                <p>
                  Set out the scope, roles and calendar for training, reviews
                  and applicable reporting.
                </p>
              </div>
              <div>
                <h3>Keep the scope under review</h3>
                <p>
                  Assess additional or incident-specific matters separately,
                  including the appropriate role and any conflicts.
                </p>
              </div>
            </div>
          </div>
          <div className="home-container home-working-notes">
            <p>
              Quarterly reviews may be included in an engagement. Filing
              requirements are assessed for the organisation and its
              jurisdiction, not assumed to be the same everywhere.
            </p>
            <p>
              The employer and Internal Committee retain their statutory
              responsibilities. External-member appointments and incident work
              require separate assessment, appropriate eligibility and clear
              role boundaries.
            </p>
          </div>
        </section>

        <section
          id="about"
          className="home-about home-section"
          aria-labelledby="about-title"
        >
          <div className="home-container home-about-layout">
            <figure className="home-about-photo">
              <Image
                src="/images/about-portrait.jpg"
                alt="Second professional portrait retained from the original website"
                width={1023}
                height={1537}
                unoptimized
                sizes="(max-width: 700px) 90vw, 40vw"
              />
            </figure>
            <div className="home-about-copy">
              <p className="home-kicker">A little about me</p>
              <h2 id="about-title">
                I'm Jagdeep Kaur.
                <br />
                An advocate based
                <br />
                in the Mumbai region.
              </h2>
              <p>
                My work includes POSH reporting and SHe-Box guidance,
                employment-contract work, legal drafting and counsel
                coordination.
              </p>
              <p>
                I also work on family-law matters and related drafting. The
                scope of each engagement is agreed in light of the matter and
                the responsibilities of those involved.
              </p>
              <dl className="home-credentials">
                <div>
                  <dt>Education</dt>
                  <dd>Bachelor of Laws, University of Mumbai</dd>
                </div>
                <div>
                  <dt>Professional</dt>
                  <dd>
                    Bar Council of Maharashtra and Goa
                    <br />
                    AIBE XIX passed
                  </dd>
                </div>
              </dl>
              <a className="home-inline-link" href="#contact">
                Contact details <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="home-contact home-section"
          aria-labelledby="contact-title"
        >
          <div className="home-container home-contact-layout">
            <div>
              <p className="home-kicker">Contact</p>
              <h2 id="contact-title">
                Start with
                <br />a conversation.
              </h2>
              <p>
                Initial professional enquiries can be made by email, telephone
                or WhatsApp.
              </p>
            </div>
            <div className="home-contact-details">
              <a href={"mailto:" + siteConfig.email}>
                <span>Email</span>
                <span>{siteConfig.email}</span>
                <Arrow diagonal />
              </a>
              <a href={siteConfig.phoneHref}>
                <span>Telephone</span>
                <span>{siteConfig.phone}</span>
                <Arrow diagonal />
              </a>
              <div className="home-whatsapp-contact">
                <WhatsAppButton />
              </div>
              <p className="home-contact-hours">{siteConfig.hours}</p>
              <p className="home-contact-caution">
                Please keep your first message general. Do not send complaint
                details, evidence or confidential documents until an appropriate
                channel and engagement have been agreed.
              </p>
            </div>
          </div>
        </section>
      </main>
      <div className="home-footer">
        <SiteFooter />
        <div
          role="region"
          aria-label="Website information"
          className="home-container home-disclaimer"
        >
          <p>
            General professional information only. Access or an enquiry does not
            create a lawyer-client relationship.{" "}
            <Link href="/disclaimer">Read the disclaimer</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
