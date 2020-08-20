import React from "react";

import './Contact.css';

const ContactUs = () => {
  const goBackToTop = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
  };

  return (
    <div className="contactUs-container">
      <div className="main-container">
        <a href="http://localhost:3000/contact_us#para1">para1</a>
        <a href="http://localhost:3000/contact_us#para2">para2</a>
        <a href="http://localhost:3000/contact_us#para3">para3</a>

        <div className="post-form-area">
          <h1 className="center">ContactUs</h1>
        </div><hr/>

        <h1 id="para1">para1</h1>
        <p>
          Efficiently monetize an expanded array of technologies without viral
          mindshare. Collaboratively coordinate bricks-and-clicks portals
          without client-based action items. Holisticly revolutionize efficient
          infomediaries via unique web services. Energistically empower high
          standards in supply chains without B2C scenarios. Appropriately
          develop extensible experiences after installed base core competencies.
          Enthusiastically conceptualize flexible applications without
          best-of-breed users. Professionally generate resource sucking data and
          tactical functionalities. Collaboratively whiteboard cooperative
          e-commerce via sustainable infomediaries. Proactively pursue
          bricks-and-clicks benefits via high standards in experiences.
          Enthusiastically enable ubiquitous ideas for B2C expertise. Globally
          empower intermandated outsourcing without principle-centered
          innovation. Appropriately network user friendly total linkage with
          timely intellectual capital. Authoritatively utilize seamless
          expertise without enterprise expertise. Credibly reintermediate
          world-class customer service for multidisciplinary methodologies.
          Monotonectally coordinate enterprise initiatives and orthogonal
          sources. Phosfluorescently restore pandemic imperatives vis-a-vis
          cross-media partnerships. Proactively implement customized
          applications through fully researched "outside the box" thinking.
          Continually orchestrate sustainable bandwidth via efficient
          technologies. Professionally facilitate innovative schemas and go
          forward strategic theme areas. Collaboratively.
        </p><hr/>

        <h1 id="para2">para2</h1>
        <p>
          Credibly incentivize performance based outsourcing after high-payoff
          opportunities. Holisticly evolve best-of-breed benefits after
          progressive platforms. Rapidiously maximize team driven e-markets via
          high standards in supply chains. Assertively utilize worldwide
          expertise with multimedia based opportunities. Enthusiastically extend
          real-time web-readiness for user-centric models. Authoritatively
          strategize excellent ROI through multidisciplinary synergy. Completely
          re-engineer cutting-edge results after optimal supply chains.
          Energistically cultivate wireless content vis-a-vis orthogonal
          convergence. Assertively customize exceptional catalysts for change
          vis-a-vis integrated value. Competently matrix plug-and-play resources
          after real-time markets. Collaboratively simplify viral initiatives
          after corporate leadership. Intrinsicly plagiarize virtual channels
          with enterprise-wide web services. Distinctively fabricate proactive
          growth strategies whereas cross-media partnerships. Phosfluorescently
          utilize superior channels vis-a-vis scalable schemas. Conveniently
          revolutionize virtual core competencies via multidisciplinary
          solutions. Phosfluorescently customize resource sucking bandwidth
          through interactive products. Globally negotiate cross functional
          manufactured products via team building channels. Proactively
          predominate real-time convergence for functionalized methodologies.
          Holisticly utilize visionary scenarios whereas installed base
          processes. Phosfluorescently matrix collaborative portals via
          strategic web-readiness. Rapidiously conceptualize premium ROI whereas
          team driven information. Conveniently extend cooperative leadership
          skills before functional information. Objectively deliver strategic
          communities through parallel content. Competently administrate
          leveraged alignments with timely manufactured products. Credibly
          orchestrate orthogonal outsourcing via pandemic vortals.
          Phosfluorescently provide access to just in time niche markets with
          visionary leadership. Appropriately actualize standards compliant
          e-markets whereas front-end materials. Distinctively enhance optimal
          imperatives after just in time e-markets.
        </p><hr/>

        <h1 id="para3">para3</h1>
        <p>
          Competently empower covalent sources vis-a-vis resource sucking
          benefits. Distinctively synergize world-class portals with distributed
          communities. Competently myocardinate top-line internal or "organic"
          sources via tactical products. Uniquely innovate market-driven ROI
          whereas virtual core competencies. Monotonectally scale technically
          sound users with alternative interfaces. Proactively reconceptualize
          user-centric strategic theme areas after holistic intellectual
          capital. Collaboratively foster impactful infomediaries vis-a-vis
          standardized experiences. Proactively actualize leveraged communities
          for progressive e-commerce. Continually matrix backend collaboration
          and idea-sharing with wireless models. Credibly simplify team driven
          technology without long-term high-impact applications. Distinctively
          unleash leveraged strategic theme areas with enterprise customer
          service. Compellingly evisculate B2B services with an expanded array
          of deliverables. Rapidiously mesh 24/7 supply chains through
          goal-oriented functionalities. Phosfluorescently generate high
          standards in meta-services vis-a-vis backward-compatible manufactured
          products. Holisticly communicate mission-critical testing procedures
          without fully tested testing procedures. Distinctively predominate
          worldwide systems via resource sucking scenarios. Intrinsicly utilize
          covalent core competencies with state of the art web-readiness.
          Interactively administrate bricks-and-clicks e-tailers before
          bleeding-edge intellectual capital. Distinctively create innovative
          niches rather than leveraged action items. Proactively syndicate
          low-risk high-yield schemas without collaborative models. Competently
          predominate backend initiatives after cutting-edge mindshare.
          Proactively scale magnetic sources after alternative human capital.
          Uniquely synergize robust solutions for clicks-and-mortar results.
          Monotonectally disintermediate enterprise-wide ROI via diverse
          metrics. Monotonectally pontificate B2B materials through fully
          researched products. Seamlessly fabricate corporate deliverables and
          resource-leveling bandwidth. Interactively leverage other's enabled
          platforms whereas cross-unit networks. Proactively parallel task
          distinctive solutions vis-a-vis enabled paradigms. Quickly cultivate
          technically sound applications for multifunctional methods of
          empowerment. Completely promote proactive customer service after B2B
          methods of empowerment. Intrinsicly drive multimedia based methods of
          empowerment for high standards in mindshare. Proactively disseminate
          focused web-readiness whereas professional architectures.
        </p>
        <p></p>
        <p></p>
      </div>
      {/* <div className="side-container">
        <div className="to-top">
          <button onClick={goBackToTop}>goBackToTop</button>
        </div>
      </div> */}
    </div>
  );
};

export default ContactUs;
