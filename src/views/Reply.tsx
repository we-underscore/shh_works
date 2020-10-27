import React from "react";
import { createUseStyles } from "react-jss";
// import { Comment } from "react-disqus-components";
import { DiscussionEmbed } from "disqus-react";

export default function Reply() {
  const classes = useStyles();
  // React.useEffect(() => window.FB.XFBML.parse());
  const config = {
    title: "HMMMM",
    identifier: "HMMMM",
    url: "https://hmmmm-2.disqus.com/",
  };
  return (
    <div className={classes.root}>
      {/* <Comment {...disqusConfig} /> */}
      <DiscussionEmbed shortname="HMMMM" config={config} />
      <div className={classes.text}>
        <a
          href="https://instagram.com/shh_works"
          target="_parent"
          rel="noopener"
        >
          © 2020 Soo Hyun Hwang, all rights reserved.
        </a>
      </div>
      {/* <div
        className="fb-comments"
        style={{ width: "100%", height: "100%" }}
        data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
        data-numposts="10"
        data-width=""
      ></div> */}
    </div>
  );
}

const useStyles = createUseStyles({
  root: {
    textAlign: "center",
    height: "100vh",
    paddingTop: 0,
    paddingLeft: 20,
    paddingRight: 20,
    overflowY: "hidden",
    "& div": {
      height: "100vh",
      overflowY: "hidden",
      "& iframe": {
        overflowY: "hidden !important",
      },
    },
  },
  text: {
    fontFamily: "Noto Serif KR",
    fontSize: 10,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 0.8,
    letterSpacing: 0,
    textAlign: "center",
    color: "#707070",
    "& a": {
      color: "#707070",
      textDecoration: "none",
    },
  },
});
