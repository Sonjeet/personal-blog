import React, { FunctionComponent } from 'react';
import styles from './BlogCard.module.scss';
import { Link } from 'gatsby';

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  intro: string;
}

const BlogCard: FunctionComponent<BlogCardProps> = ({
  slug,
  title,
  date,
  intro,
}) => {
  return (
    <Link className={styles.card} to={`/${slug}`}>
      <div className={styles.card__container}>
        <h3 className={styles.card__heading}>{title}</h3>
        <h5 className={styles.card__date}>{date}</h5>
        <p className={styles.card__introduction}>{intro}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
