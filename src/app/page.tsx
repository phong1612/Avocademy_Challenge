import { createClient } from 'contentful';
import styles from "./page.module.css";
var client = createClient({
  space: process.env.CONTENTFUL_SPACE_KEY as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

async function getContentfulData() {
  const contentfulData = await client.getEntries({
    content_type: "course",
  });  
  return contentfulData.items;
}

export default async function Home() {

  const contentfulData = await getContentfulData();
  //contentfulData.map((cardInfo:any )=> <CourseCardGoesHere cardInfo={cardInfo.fields}/>) // this will return two objects where you can find the info needed to create a course card
  // contentfulData.map(x => {
  //   console.log(x.fields);
  // });
  // Only 1 card. Currently working on improving the card to make sure it works and working on making all cards work
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardheader}>Certification</div>
        <div className={styles.cardbody}>
          <h2>UX Design for VR</h2>
          <p>Get to learn about the benefits of VR, the latest software and tools that the industry is using and so much more.</p>
        </div>
        <div className={styles.cardend}>13 hrs</div>
      </div>
    </div>
  )
}