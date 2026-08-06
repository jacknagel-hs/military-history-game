import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms of Service — War & Peace Daily",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="August 5, 2026">
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of War &amp; Peace
        Daily (the &quot;Service&quot;), operated by ConcertBuddy AI LLC
        (&quot;ConcertBuddy AI,&quot; &quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;). By creating an account, submitting a phone number for text
        alerts, or otherwise using the Service, you agree to these Terms. If you do
        not agree, do not use the Service.
      </p>

      <h2>1. The Service</h2>
      <p>
        War &amp; Peace Daily is a daily military-history trivia game, including a
        map-based &quot;Daily Briefing&quot; round and additional experimental game
        modes we may add, change, or remove at any time.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        The Service is not directed to, and is not intended for use by, children
        under 13. If you are between 13 and the age of majority in your
        jurisdiction, you may only use the Service with the involvement of a
        parent or guardian.
      </p>

      <h2>3. Accounts</h2>
      <p>
        Creating an account requires an email address and password. You are
        responsible for maintaining the confidentiality of your credentials and
        for all activity under your account. Notify us promptly at{" "}
        <a href="mailto:support@concertbuddy.ai">support@concertbuddy.ai</a> if you
        suspect unauthorized use.
      </p>

      <h2>4. Text Message Alerts</h2>
      <p>
        If you opt in to text alerts, you agree to receive automated text messages
        from us at the phone number you provide, under the terms disclosed at the
        point of signup. Message and data rates may apply. Reply STOP at any time
        to stop receiving messages, or HELP for assistance. Opting in to text
        alerts is never required to use the rest of the Service.
      </p>

      <h2>5. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any unlawful purpose or in violation of these Terms;</li>
        <li>
          Attempt to interfere with, disrupt, or gain unauthorized access to the
          Service or its underlying systems;
        </li>
        <li>Scrape, harvest, or automate use of the Service without our written permission;</li>
        <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity.</li>
      </ul>

      <h2>6. Content &amp; Intellectual Property</h2>
      <p>
        The Service, including its game design, questions, code, and original
        text, is owned by ConcertBuddy AI LLC and protected by intellectual
        property laws. Some images used in the Service are sourced from public
        domain or openly licensed collections (such as Wikimedia Commons) and
        remain subject to their respective licenses and attribution
        requirements. You may not copy, redistribute, or create derivative works
        from the Service except as permitted by law.
      </p>

      <h2>7. Third-Party Services</h2>
      <p>
        The Service relies on third-party infrastructure, including Supabase
        (accounts and data storage), Vercel (hosting), and Mapbox (map
        rendering). Your use of map features is also subject to Mapbox&apos;s
        own terms. We are not responsible for the availability or performance
        of third-party services.
      </p>

      <h2>8. Disclaimer of Warranties</h2>
      <p>
        The Service is provided &quot;as is&quot; and &quot;as available,&quot;
        without warranties of any kind, express or implied. We do not warrant
        that the Service will be uninterrupted, error-free, or that historical
        content will be free of inaccuracies.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, ConcertBuddy AI LLC will not be
        liable for any indirect, incidental, special, consequential, or punitive
        damages arising out of or related to your use of the Service.
      </p>

      <h2>10. Termination</h2>
      <p>
        We may suspend or terminate your access to the Service at any time,
        with or without cause. You may stop using the Service and request
        account deletion at any time by contacting us.
      </p>

      <h2>11. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of the
        Service after changes take effect constitutes acceptance of the revised
        Terms. We will update the &quot;Last updated&quot; date above when we do.
      </p>

      <h2>12. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the United States, without
        regard to conflict-of-law principles.
      </p>

      <h2>13. Contact</h2>
      <p>
        Questions about these Terms can be sent to{" "}
        <a href="mailto:support@concertbuddy.ai">support@concertbuddy.ai</a>.
      </p>
    </LegalPage>
  );
}
