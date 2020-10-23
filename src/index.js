import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Time from './Time'
import PropTypes from 'prop-types'
import * as serviceWorker from './serviceWorker';

const FileList = ({ files }) => (
  <table className='file-list'>
    <tbody>
      {files.map(file => (
        <tr className='file-list-item' key={file.id}>
          <td className='file-icon'>
            <FileIcon file={file} />
          </td>
          <td className='file-name'>
            <FileName file={file} />
          </td>
          <td className='commit-message'>

            <CommitMessage commit={file.latestCommit} />
          </td>
          <td className="age">
            <FileListItem key={file.id} file={file} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)
FileList.propTypes = {
  files: PropTypes.array
};

const FileListItem = ({ file }) => (
  <Time time={file.updated_at} />
)

FileListItem.propTypes = {
  file: PropTypes.object.isRequired
}

function FileIcon({ file }) {
  let icon = 'far fa-file-alt'
  if (file.type === 'folder') {
    icon = 'fas fa-folder'
  }

  return (
    <i className={`${icon}`}></i>
  )
}

function FileName({ file }) {
  return (
    <>
      {file.name}
    </>
  )
}

function CommitMessage({ commit }) {
  return (
    <>
      { commit.message}
    </>
  )
}

const testFiles = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: '2020-07-11 21:24:00',
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: '2019-03-29 13:44:00',
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: "2016-07-18 21:24:00", latestCommit: {
      message: 'Added a readme'
    }
  },
]

ReactDOM.render(
  <React.StrictMode>
    <FileList files={testFiles} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
