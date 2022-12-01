import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
  img: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Antsomi CDP 365',
    img: 'https://st-home.antsomi.com/wp-content/uploads/2020/04/Antsomi-CDP-365-logo.png',
    description: (
      <>
        Transforming businesses into data-driven companies
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    img: 'https://st-home.antsomi.com/wp-content/uploads/2020/04/Antsomi-CDP-365-logo.png',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    img: 'https://st-home.antsomi.com/wp-content/uploads/2020/04/Antsomi-CDP-365-logo.png',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({title, img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} role='image' />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
