import { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { PostItem } from "@src/types";
import { getHostFromURL, getFaviconSrcFromHostname } from "@src/utils/helper";

dayjs.extend(relativeTime);

const PostLink: React.FC<{ item: PostItem }> = (props) => {
  const { authorName, title, link } = props.item;
  const hostname = getHostFromURL(link);

  return (
    <article className="post-link">
      <div className="post-link__author">
        <div className="post-link__author-name">
          <div className="post-link__author-name">{authorName}</div>
        </div>
      </div>
      <a href={link} className="post-link__main-link">
        <h2 className="post-link__title">{title}</h2>
        {hostname && (
          <div className="post-link__site">
            <img
              src={getFaviconSrcFromHostname(hostname)}
              width={14}
              height={14}
              className="post-link__site-favicon"
            />
            {hostname}
          </div>
        )}
      </a>
    </article>
  );
};

export const PostList: React.FC<{ items: PostItem[] }> = (props) => {
  const [displayItemsCount, setDisplayItemsCount] = useState<number>(32);
  const totalItemsCount = props.items?.length || 0;
  const canLoadMore = totalItemsCount - displayItemsCount > 0;

  if (!totalItemsCount) {
    return <div className="post-list-empty">No posts yet</div>;
  }

  return (
    <>
      <div className="post-list">
        {props.items.slice(0, displayItemsCount).map((item, i) => (
          <PostLink key={`post-item-${i}`} item={item} />
        ))}
      </div>
      {canLoadMore && (
        <div className="post-list-load">
          <button
            onClick={() => setDisplayItemsCount(displayItemsCount + 32)}
            className="post-list-load__button"
          >
            LOAD MORE
          </button>
        </div>
      )}
    </>
  );
};
