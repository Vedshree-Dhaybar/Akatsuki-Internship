function Blogs() {
  return (
    <>
      <Cards
        img={blog1}
        label="Database"
        title="Building microservices with
        Dropwizard, MongoDB & Docker"
        desc="This NoSQL database oriented to
        documents (by documents like JSON)
        combines some of the features from
        relational databases, easy to use and
        the multi-platform is the best option
        for scale up and have fault tolerance,
        load balancing, map reduce, etc."
        profilePic={author}
        author="Julia Walker"
        date="Jan 17, 2022"
        time="3 min"
      />
      <Cards
        img={blog2}
        label="Web Performance"
        title="Fast web page loading on a $20 
        feature phone"
        desc="Feature phones are affordable (under
        $20-25), low-end devices enabling 100s
        of millions of users in developing
        countries to leverage the web. Think of
        them as a light version of a smart
        phone."
        profilePic={author}
        author="Julia Walker"
        date="Dec 10, 2021"
        time="2 min"
      />
      <Cards
        img={blog3}
        label="Accessibility"
        title="Accessibility Tips for Web
        Developers"
        desc="It's awesome to build sites that are
        inclusive and accessible to everyone.
        There are at least six key areas of
        disability we can optimize for: visual,
        hearing, mobility, cognition, speech and
        neural. Many tools and resources can
        help here, even if you're totally new to
        web accessibility."
        profilePic={author}
        author="Julia Walker"
        date="Nov 28, 2021"
        time="4 min"
      />
      <Cards
        img={blog4}
        label="Database"
        title="Dynamically Securing Databases using Hashicorp Vault"
        desc=" Nowadays, it's hard to profoundly talk
        about security in the IT industry, since
        it has to be considered on so many
        different levels: from securing code
        chunks, securing containers, up to
        securing complex infrastructures and
        defining strong authorization and
        authentication policies across the
        enterprise."
        profilePic={author}
        author="Julia Walker"
        date="Nov 20, 2021"
        time="4 min"
      />
      <Cards
        img={blog5}
        label="Web Performance"
        title="Adaptive Loading - Improving Web Performance on low-end devices"
        desc='Adaptive Loading: Do not just respond
        based on screen size, adapt based on
        actual device hardware. Any user can
        have a slow experience. In a world with
        widely varying device capabilities, a
        "one-size" fits all experience may not
        always work. Sites that delight users on
        high-end devices can be unusable on
        low-end ones, particularly on median
        mobile and desktop hardware and in
        emerging markets.'
        profilePic={author}
        author="Julia Walker"
        date="Nov 10, 2021"
        time="3 min"
      />
      <Cards
        img={blog6}
        label="Accessibility"
        title="Don't Develop Just for Yourself - A Developer's Checklist to Accessibility"
        desc="We, as developers, tend to develop sites
        unconsciously for people like ourselves.
        If we don't actively pay attention, the
        sites are often accessible only for
        certain types of people: Sighted
        mouse-users, who have good fine motor
        skills and are good at using computers."
        profilePic={author}
        author="Julia Walker"
        date="Oct 25, 2021"
        time="7 min"
      />
      <Cards
        img={blog7}
        label="Database"
        title="Building a Restful CRUD API with Node JS, Express, and MongoDB"
        desc="Application Programming Interface is the
        abbreviation for API. An API is a
        software interface that enables two apps
        to communicate with one another. In
        other words, an API is a messenger that
        sends your request to the provider and
        then returns the response to you."
        profilePic={author}
        author="Julia Walker"
        date="Oct 15, 2021"
        time="5 min"
      />
      <Cards
        img={blog8}
        label=" Web Performance"
        title="Monitoring Performance with the PageSpeed Insights API"
        desc="  The PageSpeed Insights API provides free
        access to performance monitoring for web
        pages and returns data with suggestions
        for how to improve. The V5 API includes
        lab data from Lighthouse and real-world
        data from the Chrome User Experience
        Report (CrUX)."
        profilePic={author}
        author="Julia Walker"
        date="Oct 3, 2021"
        time="5 min"
      />
      <Cards
        img={blog9}
        label="Accessibility"
        title="The best web accessibility tools
        for developers in 2021"
        desc=" The quality of the tools you use defines
        the speed with which you can diagnose
        and resolve problems. Each year the
        landscape changes dramatically in web
        technologies, and of late the tooling
        for accessibility is no exception."
        profilePic={author}
        author="Julia Walker"
        date="Sep 13, 2021"
        time="7 min"
      />
      <Cards
        img={blog10}
        label="Database"
        title="How to connect a React frontend with a NodeJS/Express backend"
        desc=" The MERN (MongoDB, Express, React,
            NodeJS) stack is very popular for making
            full stack applications, utilizing
            Javascript for both the backend and
            frontend as well as a document-oriented
            or non relational database (MongoDB),
            meaning that it's structured like JSON
            rather than a large excel sheet like SQL
            databases are."
        profilePic={author}
        author="Julia Walker"
        date="Sep 21, 2021"
        time="4 min"
      />
    </>
  );
}
export default Blogs;
