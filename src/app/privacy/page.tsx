import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy — War & Peace Daily",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="August 5, 2026">
      <p>
        This Privacy Policy explains how ConcertBuddy AI LLC (&quot;ConcertBuddy
        AI,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects,
        uses, and shares information in connection with War &amp; Peace Daily
        (the &quot;Service&quot;).
      </p>

      <h2>1. Information We Collect</h2>
      <p>We collect the following categories of information:</p>
      <ul>
        <li>
          <strong>Account information:</strong> email address, username, and
          password (handled by our authentication provider, Supabase — we never
          see or store your raw password).
        </li>
        <li>
          <strong>Gameplay data:</strong> your answers, scores, and completed
          rounds, so we can show you results and history.
        </li>
        <li>
          <strong>Phone number and consent record:</strong> if you opt in to
          text alerts, we store the phone number you provide along with a
          timestamped record of the consent language you agreed to.
        </li>
        <li>
          <strong>Technical data:</strong> IP address, browser/device
          information, and standard server logs, collected automatically by
          our hosting provider.
        </li>
      </ul>

      <h2>2. How We Use Information</h2>
      <ul>
        <li>To operate, maintain, and improve the Service;</li>
        <li>To authenticate your account and save your progress;</li>
        <li>To send text alerts to users who have opted in, once that feature is active;</li>
        <li>To detect, prevent, and address technical issues, fraud, or abuse;</li>
        <li>To comply with legal obligations.</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2>3. Third-Party Service Providers</h2>
      <p>We share information with the following service providers, solely to operate the Service:</p>
      <ul>
        <li><strong>Supabase</strong> — account authentication and database storage.</li>
        <li><strong>Vercel</strong> — application hosting and server logs.</li>
        <li>
          <strong>Mapbox</strong> — map rendering for map-based questions; Mapbox
          may process your IP address and interactions with map tiles under its
          own privacy policy.
        </li>
      </ul>
      <p>
        If we begin sending text messages, we will use a dedicated SMS
        provider solely to deliver messages to numbers that have opted in, and
        will not share your phone number for that provider&apos;s own marketing
        purposes.
      </p>

      <h2>4. Cookies</h2>
      <p>
        We use a session cookie set by Supabase to keep you signed in. We do
        not currently use advertising or third-party tracking cookies.
      </p>

      <h2>5. Text Message Communications</h2>
      <p>
        If you opt in to text alerts, you can withdraw consent at any time by
        replying STOP to any message, or by contacting{" "}
        <a href="mailto:support@concertbuddy.ai">support@concertbuddy.ai</a>. We
        retain your consent record even after opt-out, solely to document that
        the opt-out occurred.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain account and gameplay data for as long as your account is
        active, and for a reasonable period afterward to comply with legal
        obligations and resolve disputes. You may request deletion at any time
        (see Section 7).
      </p>

      <h2>7. Your Rights &amp; Choices</h2>
      <p>
        You may access, correct, or request deletion of your personal
        information by contacting{" "}
        <a href="mailto:support@concertbuddy.ai">support@concertbuddy.ai</a>. If
        you are a California resident, you may have additional rights under
        the California Consumer Privacy Act (CCPA), including the right to
        know what personal information we hold and to request its deletion;
        contact us to exercise these rights.
      </p>

      <h2>8. Children&apos;s Privacy</h2>
      <p>
        The Service is not directed to children under 13, and we do not
        knowingly collect personal information from children under 13. If you
        believe a child has provided us with personal information, contact us
        and we will delete it.
      </p>

      <h2>9. Data Security</h2>
      <p>
        We use reasonable administrative and technical measures to protect
        your information, but no method of transmission or storage is
        completely secure, and we cannot guarantee absolute security.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will update
        the &quot;Last updated&quot; date above when we do, and material changes
        will be reflected here.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about this Privacy Policy can be sent to{" "}
        <a href="mailto:support@concertbuddy.ai">support@concertbuddy.ai</a>.
      </p>
    </LegalPage>
  );
}
