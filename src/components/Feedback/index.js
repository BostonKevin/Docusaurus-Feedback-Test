import React, { useState } from 'react';
import { Widget } from '@happyreact/react';
 
import styles from './styles.module.css';
 
import '@happyreact/react/theme.css';
 

 
export default function Feedback({ resource }) {
 
 
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Was this page helpful?</h3>
      {!isReacted ? (
        <div className="">
          <Widget
            token="92c44508-9f16-4f63-bd1f-e9546b7417fd"
            resource={_resource}
            classes={{
              root: styles.widget,
              container: styles.container,
              grid: styles.grid,
              cell: styles.cell,
              reaction: styles.reaction,
            }}
            onReaction={handleReaction}
          />
        </div>
      ) : reaction === 'No' ? (
        <VotedNo />
      ) : (
        <VotedYes />
      )}
    </div>
  );
}