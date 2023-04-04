import React from 'react';
 
import Feedback from '@site/src/components/Feedback';


export default function DocItemFooter(props) {
 
 
  const {
    editUrl,
    lastUpdatedAt,
    formattedLastUpdatedAt,
    lastUpdatedBy,
    tags,
    unversionedId, // You need to get current page id
  } = metadata;
 
 
return (
    <>
      <Feedback resource={unversionedId} />
      <footer
        className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}
      >
        {canDisplayTagsRow && <TagsRow tags={tags} />}
        {canDisplayEditMetaRow && (
          <EditMetaRow
            editUrl={editUrl}
            lastUpdatedAt={lastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
            formattedLastUpdatedAt={formattedLastUpdatedAt}
          />
        )}
      </footer>
    </>
  );
}