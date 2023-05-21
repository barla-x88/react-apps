import React, { useState } from "react";

import "./Download.css";

export default function Download() {
  //Initial value of checked attibute
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  //Render download page
  const [startDownload, setStartDownload] = useState(false);

  const handleChange = (e) => {
    //need to use the checked attribute
    console.log(e.target.checked);
    setAgreeToTerms(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agreeToTerms && setStartDownload(true);
  };

  if (startDownload) {
    return (
      <div className="download">
        <p>Your download will start shortly.</p>
      </div>
    );
  }
  return (
    <div className="terms">
      <h1>Terms of use</h1>
      <div>
        <p>
          These terms and conditions ("Agreement") govern your use of the
          website and any services offered on or through the website
          ("Services"). Please read these terms and conditions carefully before
          using the website or downloading any content. By accessing or using
          the website, you agree to be bound by this Agreement. If you do not
          agree with these terms and conditions, you should not use the website
          or download any content. 1. Acceptance of Terms: By using the website
          and downloading any content, you acknowledge that you have read,
          understood, and agree to be bound by this Agreement, as well as any
          additional terms and conditions, guidelines, or rules that may be
          posted on the website. Intellectual Property Rights: All intellectual
          property rights, including but not limited to copyrights, trademarks,
          patents, trade secrets, and any other proprietary rights, in and to
          the website and its content, belong to their respective owners. You
          agree not to infringe upon these rights and to use the content solely
          for your personal, non-commercial use. User Obligations: (a) You must
          be at least 18 years old or the legal age of majority in your
          jurisdiction to use the website and download any content. (b) You are
          responsible for maintaining the confidentiality of any login
          information associated with your account and for all activities that
          occur under your account. (c) You agree not to use the website for any
          illegal, unauthorized, or prohibited purposes, including but not
          limited to distributing, transmitting, or storing any content that is
          unlawful, harmful, threatening, abusive, harassing, defamatory,
          vulgar, obscene, or invasive of another person's privacy. Disclaimer
          of Warranties: (a) The website and its content are provided on an
          "as-is" and "as available" basis without warranties of any kind,
          either express or implied. (b) We do not warrant that the website will
          be uninterrupted, error-free, secure, or free from viruses or other
          harmful components. (c) We disclaim any warranties regarding the
          accuracy, reliability, completeness, or timeliness of the content.
          Limitation of Liability: (a) To the extent permitted by applicable
          law, in no event shall we be liable for any indirect, consequential,
          incidental, special, or punitive damages arising out of or in
          connection with your use of the website or the content, even if we
          have been advised of the possibility of such damages. (b) Our total
          liability to you for any claims arising from or related to this
          Agreement shall not exceed the amount paid by you, if any, for
          accessing the website or downloading content. Indemnification: You
          agree to indemnify and hold us harmless from and against any claims,
          losses, damages, liabilities, costs, and expenses, including
          reasonable attorneys' fees, arising out of or in connection with your
          use of the website or any violation of this Agreement. Modification
          and Termination: We reserve the right to modify, suspend, or terminate
          the website or any part of the Services at any time, with or without
          notice. We may also modify this Agreement at any time, and such
          modifications will be effective immediately upon posting on the
          website. Your continued use of the website after any modifications to
          this Agreement constitutes your acceptance of the modified terms.
          Governing Law and Jurisdiction: This Agreement shall be governed by
          and construed in accordance with the laws of [Your Jurisdiction]. Any
          dispute arising out of or in connection with this Agreement shall be
          subject to the exclusive jurisdiction of the courts located in [Your
          Jurisdiction]. Entire Agreement: This Agreement constitutes the entire
          agreement between you and us regarding the subject matter hereof and
          supersedes all prior or contemporaneous understandings and agreements.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="checkbox"
          name="agreeToTerms"
          id="checkbox"
          checked={agreeToTerms}
          onChange={handleChange}
        />
        <label htmlFor="checkbox">I agree to all terms and conditions.</label>
        <input type="submit" value="DOWNLOAD" />
      </form>
    </div>
  );
}
