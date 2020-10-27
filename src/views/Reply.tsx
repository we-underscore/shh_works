import React from "react";
import { createUseStyles } from "react-jss";
// import { DiscussionEmbed } from "disqus-react";
import { Comment } from "react-disqus-components";

export default function Reply() {
  const classes = useStyles();
  // @ts-ignore
  // React.useEffect(() => window.FB.XFBML.parse());
  const disqusConfig = {
    title: "HMMMM",
    identifier: "HMMMM",
    url: "https://hmmmm-2.disqus.com/",
    shortname: "HMMMM",
  };
  return (
    <div className={classes.root}>
      <Comment {...disqusConfig} />
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
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    textAlign: "center",
    // height: "100%",
    // width: "100%",
    paddingTop: 0,
    paddingLeft: 20,
    paddingRight: 20,
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
