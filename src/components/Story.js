import React from 'react';
import './Story.css';
import { connect } from 'react-redux';
import { doArchiveStory } from '../actions/archiveActions';
import { getStoryAsEntity } from '../selectors/storySelector';

const Story = ({ story, columns, onArchive }) => {
  const { title, url, author, num_comments, points, objectID } = story;
  return (
    <div className="story">
      <span style={{ width: columns.title.width }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: columns.author.width }}>{author}</span>
      <span style={{ width: columns.comments.width }}>{num_comments}</span>
      <span style={{ width: columns.points.width }}>{points}</span>
      <span style={{ width: columns.archive.width }}>
        <button className="button-inline" onClick={() => onArchive(objectID)}>
          Archive
        </button>
      </span>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    onArchive: id => dispatch(doArchiveStory(id))
  };
}

function mapStateToProps(state, props) {
  return {
    story: getStoryAsEntity(state, props.storyId)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Story);
