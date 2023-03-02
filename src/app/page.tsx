import { createClient } from 'contentful';
import styles from './page.module.css'

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
  
  return (
    <div>
     <h1 >Hello Avocademy</h1>
    </div>
  )
}

