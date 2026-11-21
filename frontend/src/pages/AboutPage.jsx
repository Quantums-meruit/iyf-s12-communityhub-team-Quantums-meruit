import { Link } from 'react-router-dom'
import styles from './AboutPage.module.css'

const features = [
  {
    title: 'Share your thoughts',
    description: 'Create posts to share updates, ideas, questions, and useful information.',
  },
  {
    title: 'Join the conversation',
    description: 'Explore the community feed, read individual posts, and react with likes.',
  },
  {
    title: 'Find what matters',
    description: 'Search posts by title, content, or author to find relevant conversations.',
  },
]

function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className="eyebrow">ABOUT THE PLATFORM</p>
        <h1>A space for people to connect and share.</h1>
        <p>
          CommunityHub is a community platform built by the IYF Season 12
          team. It brings posts, conversations, and member interactions
          together in one shared space.
        </p>
        <Link className="ui-button ui-button--primary" to="/posts">
          Explore posts
        </Link>
      </section>

      <section className={styles.section} aria-labelledby="features-heading">
        <div className={styles.sectionHeading}>
          <p className="eyebrow">WHAT YOU CAN DO</p>
          <h2 id="features-heading">Built around community</h2>
        </div>

        <div className={styles.featureGrid}>
          {features.map((feature) => (
            <article className={styles.featureCard} key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.technology} aria-labelledby="technology-heading">
        <h2 id="technology-heading">Technology</h2>
        <p>
          The application is built with React and JavaScript, powered by
          Vite, and uses React Router for navigation. Community posts are
          loaded from JSONPlaceholder while new posts and local reactions
          are stored in the browser.
        </p>
      </section>
    </main>
  )
}

export default AboutPage
