import React, { FunctionComponent } from 'react';
import styles from './Anchor.module.scss';

interface AnchorProps {
  destination: string;
}
const Anchor: FunctionComponent<AnchorProps> = ({ destination, children }) => (
  <a href={destination} target="_blank">
    {children}
  </a>
);

export default Anchor;
