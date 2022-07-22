import { FC } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import EmoteComponent from "./EmoteComponent";

const StreamerEmotes: FC<any> = ({ posts, next, onChange }) => {
    return (
        <div className="flex flex-row flex-wrap">
            <InfiniteScroll
                className="flex flex-row flex-wrap"
                dataLength={posts.length}
                next={next}
                hasMore={true}
                scrollableTarget="scrollableDiv"
                loader={undefined}
            >
                {posts.map((em: any, index: number) => (
                    <EmoteComponent
                        key={index}
                        em={em}
                        onChange={() => onChange(em.code)}
                    />
                ))}
            </InfiniteScroll>
        </div>
    );
};

export default StreamerEmotes;
