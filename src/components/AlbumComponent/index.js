import * as React from 'react';
import { useDispatch } from 'react-redux';
import { addVisitedAlbumToHistory } from '../../actions/history';

/**
 * Component used to display album data
 */
function AlbumComponent({
  id, name, artist, cover,
}) {
  const dispatch = useDispatch();

  return (
    <div
      {...{
        className: 'AlbumComponent',
        onClick: () => {
          dispatch(addVisitedAlbumToHistory(id));
        },
      }}
    >
      <div {...{ className: '', "data-test": "album-name" }}>{name}</div>
      <div {...{ className: '' }}>{artist}</div>
    </div>
  );
}

export default AlbumComponent;
