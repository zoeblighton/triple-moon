import { Link } from "react-router-dom";
import Layout from "./Layout";
import Seo from "./Seo";

export default function NotFound() {
  return (
    <Layout showContact={false}>
      <Seo path="/404" />
      <section className="section">
        <div className="sectionHeader">
          <h1 className="pageTitle">Page not found</h1>
          <p className="muted">
            Sorry, this page seems to have wandered off.
          </p>
        </div>
        <Link className="button" to="/">
          Back to the homepage
        </Link>
      </section>
    </Layout>
  );
}
