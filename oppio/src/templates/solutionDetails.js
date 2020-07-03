import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Footer from "../components/footer"
import "../components/layout.css"

export default ({ data }) => {
    const post = data.markdownRemark;
    var numFeatures = post.frontmatter.features.length;
    return (
       <div>
          <Helmet>

  <script src="https://apis.google.com/js/platform.js" async defer></script>
    <meta name="google-signin-client_id" content="275198785754-2qtchf3m7l14iper2iorstghppp4rv8l.apps.googleusercontent.com"/>
          <script>
      {
        `
        function onSignIn(){
          alert('SUCCESS');
        }
        function onFailure(){
          alert('FAILURE TO SIGN IN');
        }
        `
      }
    </script>
          </Helmet>

                <div class='topnav'>
                    <div class='logo_wrapper'>
                      <a href='/'>
                      <img class='logo_image_nav' src='../banner_w.png'></img>
                      </a>
                    </div>
                </div>

                <div id='nav_items' class='hidden animate__animated animate__slideInDown'>
                    <ul>
                        <a href='/'><li>Home</li></a>
                        <a href='/'><li>News</li></a>
                        <a href='/'><li>Developers</li></a>
                    </ul>
                </div>

          <div class='details_wrapper'>
            <div class='detail_header info_banner'>
              <br></br><br></br>
              <h1 class='banner_heading graytext'>{post.frontmatter.title}</h1>
              <div class='small_border gray'></div>
              <p>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </p>
              <center>
                <a id='banner_link' onClick={() => 
      window.scroll({top: document.querySelector('#banner_3').offsetTop - 50})}>View tutorial</a>
              </center>
              <br></br><br></br>
          </div>

          <div id='banner_4' class='info_banner'>
            <h1 class='banner_heading'>Features</h1>
            <div class='small_border white'></div>
            <br></br>
            {
              (post.frontmatter.features).map((data) =>
              <div class='feature_detail'>
                <i class='material-icons'>add</i>    
                <p>{data}</p>
              </div>
              
              )
            }
            {numFeatures === 0 ? <p>No features were added to this software.</p> : <div></div>}
            <br></br>
          </div>

          </div>

          <div id='banner_3' class='info_banner'>
            <h1 class='banner_heading'>View The Tutorial</h1>
            <div class='small_border white'></div>
            <br></br>
            {
              post.frontmatter.youtube_link === "" ? <p>We're sorry, there is no tutorial for this software yet. Stay tuned.</p> : <center><iframe class='embed_video' src={post.frontmatter.youtube_link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture, fullscreen" allowfullscreen></iframe></center>
            }
            <br></br>
          </div>

              {
                ((post.frontmatter.github_link === "") && (post.frontmatter.heroku_link === "")) 
                
                ? 
                
                "" 
                
                : 
                
                <div>
                  <div id='banner_5' class='info_banner'>
                    <h1 class='banner_heading'>Links</h1>
                    <div class='small_border white'></div>
                      <br></br>
                      <center>
                        {
                          post.frontmatter.github_link === "" ? "" : <a class='detail_link_ext' href={post.frontmatter.github_link}>View the GitHub</a>
                        }
                        {
                          post.frontmatter.heroku_link === "" ? "" : <a class='detail_link_ext' href={post.frontmatter.heroku_link}>View the Heroku</a>
                        }
                      </center>
                      <br></br><br></br>
                  </div>
                </div>
              }

              <div class='footer'>
                <Footer />
              </div>

          </div>

    )
}

export const query = graphql`

  query($path: String!) {
    file: file(relativePath: { eq: "banner_w.png" }) {
      childImageSharp {
        fluid(maxWidth: 2428) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    markdownRemark(fields: { 
        slug: { eq: $path }
        collection: { eq: "solutions" }
        }
        ) 
      {
      html
      frontmatter {
        title
        mini_description
        features
        github_link
        youtube_link
        heroku_link
      }
    }
  }
`