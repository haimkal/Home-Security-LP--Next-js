import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_wrapper _cont">
        <div className="footer_wrapper_row1">
          <a href="https://top10us.com">
            <img
              fetchPriority="high"
              decoding="async"
              width="170"
              height="50"
              src="top10us.svg"
              alt="logo"
            />
          </a>
          <div>
            Top10US.com offers objective American rankings and comparisons for the most popular
            financial and household services. We cater to millions of individuals globally and
            across the United States.
          </div>
        </div>
        <div className="footer_wrapper_row2">
          <div className="footer_nav_item">
            <div className="footer_nav_item_title">Main</div>
            <a href="https://top10us.com/categories/">Categories</a>
            <a href="https://top10us.com/advertisers/">Advertise with us</a>
            <a href="https://top10us.com/affiliates/">Affiliates</a>
          </div>
          <div className="footer_nav_item">
            <div className="footer_nav_item_title">Get Started</div>
            <a href="https://top10us.com/blog/">Guides</a>
            <a href="https://top10us.com/">Leads for Contractors</a>
            <a href="https://top10us.com/about-us-2/">About</a>
          </div>
          <div className="footer_nav_item">
            <div className="footer_nav_item_title">About & Contact</div>
            <a href="https://top10us.com/contact-us/">Contact us</a>
            <a href="https://schemathics.com/careers/">Careers</a>
            <a href="https://top10us.com/privacy-policy/">Privacy Policy</a>
            <a href="https://top10us.com/terms-and-conditions/">Terms and Conditions</a>
            <a href="https://top10us.com/privacy-policy/#California">CCPA</a>
          </div>
          <div className="footer_nav_item">
            <div className="footer_nav_item_title">More</div>
            <a href="https://top10ushealth.com/">Top10usHealth</a>
            <a href="https://top10ushomewarranty.com/">Top10usHomewarranty</a>
            <a href="https://homeremodel360.com/">HomeRemodel360</a>
            <a href="https://topusmoney.com/">topusmoney.com</a>
          </div>
        </div>
        <div className="discl">
          Top10US offers rankings and reviews for the top companies in many verticals across
          different industries in the United States. We strive to remain both objective and
          informative, with the goal of giving our users the best experience. The opinions and the
          prices we represent on our site(s) are subject to change without notice. We are an
          independent, advertising-supported comparison service. The offers that appear on this site
          are from companies that compensate us. This compensation may impact how and where products
          appear on this site, including, for example, the order in which they may appear within the
          listing categories. Top10US.com is a participant in the Amazon Services LLC Associates
          Program, an affiliate advertising program designed to provide a means for sites to earn
          advertising fees by advertising and linking to Amazon.com. COPYRIGHT © 2019-2024 DYK
          TECHNOLOGIES LTD. ALL RIGHTS RESERVED. REPRODUCTION OR COPYING IN FULL OR IN PART IS
          FORBIDDEN.
        </div>
      </div>
    </div>
  );
}
