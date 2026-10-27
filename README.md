# Paediatric Neurodisability Lung Health Network

First website draft for `nadinefreitag-md/pnlh-network`. Intended domain: `pnlh-network.org`.

A static, single-page website based on Editorial by HTML5 UP and the supplied network header. No CMS, package installation or build process is needed. The original Editorial scripts handle the responsive sidebar.

## Preview and edit

Open `index.html` in a browser. All page content is in that file. Small layout adjustments are in `assets/css/network.css`; the template and brand colour substitutions are in `assets/css/template.css`. The header is an optimised WebP copy of the supplied PNG, with its full composition preserved. Original source files were not changed.

Images, styles and sidebar scripts are local. Editorial’s original Google Fonts import supplies Open Sans and Roboto Slab. No analytics or submission service is added. The interest form link takes visitors to Google Forms. Contact and meeting-enquiry links open the visitor's email application and do not send automatically. The form is linked rather than embedded; Google Forms loads only when a visitor follows the link.

## Content to review

- Review the proposed About, topics and aims with the network.
- General contact and meeting enquiries use Nadine.Freitag@hhu.de.
- First meeting: Monday, 9 November 2026, 10:00–11:00 CET. The meeting link will be shared with those who register for the network.
- Expressions of interest use the supplied Google Form: https://docs.google.com/forms/d/e/1FAIpQLSdVHIjpjgrReL8xeqRAR_NBtgXd8V8We9zdrXpy4SKrq-Im3Q/viewform?usp=dialog

## Publish to the existing GitHub repository

1. Upload the **contents** of this folder to the root of `nadinefreitag-md/pnlh-network`. Keep the asset folders together. Do not upload the enclosing ZIP or the contact spreadsheet.
2. Commit the files to the repository's main branch. Review any existing README before replacing it.
3. In repository Settings → Pages, select **Deploy from a branch**, then **main** and **/(root)**, and Save.
4. Wait for the Pages deployment to complete and use the URL displayed by GitHub. Before adding a custom domain, the expected URL is `https://nadinefreitag-md.github.io/pnlh-network/`.

Relative asset paths support both the repository URL and the eventual domain. `.nojekyll` is supplied. No CNAME is included yet, so the first deployment can be checked before redirecting to the domain.

## Connect pnlh-network.org after the first deployment

Verify the domain in GitHub, then add `pnlh-network.org` under the repository's Pages custom-domain setting **before** changing DNS. With branch publishing GitHub creates the CNAME file; retain it in future updates. Configure the domain provider's DNS using GitHub's current instructions. Once DNS and the certificate are ready, enable Enforce HTTPS. The domain provider and current DNS have not yet been inspected or changed.

Official instructions checked on 27 October 2026:
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Template and artwork

Editorial by HTML5 UP (https://html5up.net), used under Creative Commons Attribution 3.0; see LICENSE-template.txt. Keep the visible attribution. The original Editorial sidebar, typography, feature icons, section headings, spacing and outlined buttons are retained. The coral accent is replaced with teal and text colours are adjusted for legibility. Minimal additions live in network.css. The original JavaScript and Font Awesome assets are included; demo photos are omitted. accessibility.js adds keyboard state handling for the sidebar.

Network header supplied by the project owner. The template licence does not establish rights to that separate artwork or to the network name.
