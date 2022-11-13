import { Fragment } from 'react';
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { ga, languageColor, footer } from '../../helpers/utils';
import { gifProjects } from './projects.config';
const Project = ({
  repo,
  loading,
  github,
  googleAnalytics /*gifProjects*/,
}) => {
  if (!loading && Array.isArray(repo) && repo.length === 0) {
    return <></>;
  }

  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < github.limit; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="flex justify-between flex-col p-8 h-full w-full">
            <div>
              <div className="flex items-center">
                <span>
                  <h5 className="card-title text-lg">
                    {footer({ width: 'w-32', height: 'h-8' })}
                  </h5>
                </span>
              </div>
              <div className="mb-5 mt-1">
                {footer({
                  width: 'w-full',
                  height: 'h-4',
                  className: 'mb-2',
                })}
                {footer({ width: 'w-full', height: 'h-4' })}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-grow">
                <span className="mr-3 flex items-center">
                  {footer({ width: 'w-12', height: 'h-4' })}
                </span>
                <span className="flex items-center">
                  {footer({ width: 'w-12', height: 'h-4' })}
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  {footer({ width: 'w-12', height: 'h-4' })}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return array;
  };
  const individualProject = (item, index) => {
    return (
      <a
        className="card shadow-lg compact bg-base-100 cursor-pointer"
        href={item.html_url}
        key={index}
        onClick={(e) => {
          e.preventDefault();

          try {
            if (googleAnalytics?.id) {
              ga.event({
                action: 'Click project',
                params: {
                  project: item.name,
                },
              });
            }
          } catch (error) {
            console.error(error);
          }

          window?.open(item.html_url, '_blank');
        }}
      >
        <div className="flex justify-between flex-col p-8 h-full w-full">
          <div>
            <div className="flex items-center opacity-60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="text-base-content inline-block w-5 h-5 mr-2 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              <span>
                <h5 className="card-title text-lg text-base-content">
                  {item.name}
                </h5>
              </span>
            </div>
            <p className="mb-5 mt-1 text-base-content text-opacity-60 text-sm">
              {item.description}
            </p>
          </div>
          <div className="flex justify-between text-sm text-base-content text-opacity-60">
            <div className="flex flex-grow">
              <span className="mr-3 flex items-center">
                <AiOutlineStar className="mr-0.5" />
                <span>{item.stargazers_count}</span>
              </span>
              <span className="flex items-center">
                <AiOutlineFork className="mr-0.5" />
                <span>{item.forks_count}</span>
              </span>
            </div>
            <div>
              <span className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-1 opacity-60"
                  style={{ backgroundColor: languageColor(item.language) }}
                />
                <span>{item.language}</span>
              </span>
            </div>
          </div>
        </div>
      </a>
    );
  };
  const gifProject = (gifProject, index) => {
    return (
      <a
        className="card shadow-lg compact bg-base-100 cursor-pointer"
        href={gifProject.url}
        key={index}
        onClick={(e) => {
          e.preventDefault();

          try {
            if (googleAnalytics?.id) {
              ga.event({
                action: 'Click project',
                params: {
                  project: gifProject.name,
                },
              });
            }
          } catch (error) {
            console.error(error);
          }

          window?.open(gifProject.url, '_blank');
        }}
      >
        <div className="flex justify-between flex-col p-8 h-full w-full">
          <div>
            <div className="flex items-center opacity-60">
              <span>
                <h5 className="card-title text-lg text-base-content">
                  <br />
                  <br />
                  <u>{gifProject.name}</u>
                </h5>
              </span>
              <br />
            </div>
            <img
              alt="Image not found"
              src={`data:image/png;base64,${gifProject.imgsrc}`}
            ></img>
            <p className="mb-5 mt-1 text-base-content text-opacity-60 text-sm">
              <br />
              <b style={{ fontsize: '100px' }}>{gifProject.description}</b>
            </p>
          </div>
          <div className="flex justify-between text-sm text-base-content text-opacity-60">
            <div>
              {gifProject.technology.map((lang, id) => (
                <span className="flex items-center" key={id}>
                  <div
                    className="w-3 h-3 rounded-full mr-1 opacity-60"
                    style={{ backgroundColor: languageColor(lang) }}
                  />
                  <span>{lang}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    );
  };
  const renderProjects = () => {
    return repo.map((item, index) => individualProject(item, index));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      footer({ width: 'w-28', height: 'h-8' })
                    ) : (
                      <>
                        <span className="text-base-content opacity-70">
                          Projects
                          <br />
                        </span>
                      </>
                    )}
                  </h5>
                  {loading ? (
                    footer({ width: 'w-10', height: 'h-5' })
                  ) : (
                    <a
                      href={`https://github.com/${github.username}?tab=repositories`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base-content opacity-50"
                    >
                      View public repositories
                    </a>
                  )}
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {gifProjects.map((project, index) =>
                      gifProject(project, index)
                    )}
                    <hr />
                    {loading || !repo ? renderSkeleton() : renderProjects()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Project.propTypes = {
  repo: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  github: PropTypes.object.isRequired,
  googleAnalytics: PropTypes.object.isRequired,
};

export default Project;
