import { useState } from "react";
import { Link } from "react-router-dom";

interface PostListProps {
  hasNavigation?: boolean;
}

type TabType = "all" | "my";

export default function PostList({ hasNavigation = true }) {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div
            role="presentation"
            onClick={() => setActiveTab("all")}
            className={activeTab === "all" ? "post__navigation--active" : ""}
          >
            전체
          </div>
          <div
            role="presentation"
            onClick={() => setActiveTab("my")}
            className={activeTab === "my" ? "post__navigation--active" : ""}
          >
            나의 글
          </div>
        </div>
      )}
      <div className="post__list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author-name">김현우</div>
                <div className="post__date">2023.11.30</div>
              </div>
              <div className="post__title">게시글 {index}</div>
              <div className="post__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                semper ultrices justo, a scelerisque elit pulvinar ut. Curabitur
                ac lorem eu mauris gravida facilisis nec blandit lorem. Mauris
                vitae quam mollis, efficitur tortor vitae, blandit mauris. Donec
                ullamcorper nulla ipsum, in ullamcorper eros aliquet at. Morbi
                condimentum sed lorem in aliquet. Nulla egestas convallis diam.
                Donec magna justo, congue id ex nec, sodales porta nisi.
                Pellentesque viverra ante ut est dictum, ut dapibus nisl ornare.
                Phasellus non neque porttitor, ultrices nisl sed, luctus nunc.
                Nunc tincidunt nec nulla sit amet iaculis. Nulla dapibus enim
                leo, in aliquam purus mattis vitae. Sed a velit luctus, placerat
                arcu in, egestas quam. In venenatis sodales ex id ultricies.
              </div>
              <div className="post__utils-box">
                <div className="post_delete">삭제</div>
                <div className="post__edit">수정</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
