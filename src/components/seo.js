import React from 'react';
import Head from 'next/head';

const title = 'UAlberta Taekwondo Club'
const description = 'University of Alberta Taekwondo Club. A Korean martial arts student club.'
const author = 'University of Alberta'
const metaData = [
  {
    name: `description`,
    content: description,
  },
  {
    property: `og:title`,
    content: title,
  },
  {
    property: `og:description`,
    content: description,
  },
  {
    property: `og:type`,
    content: `sports`,
  },
  {
    name: `twitter:card`,
    content: `summary`,
  },
  {
    name: `twitter:creator`,
    content: author,
  },
  {
    name: `twitter:title`,
    content: title,
  },
  {
    name: `twitter:description`,
    content: description,
  },
  {
    name: `og:url`,
    content: "uatkd.ca",
  },
  {
    name: "og:image",
    content: "/og_image.jpg"
  }
];
export default function SEO() {
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};
