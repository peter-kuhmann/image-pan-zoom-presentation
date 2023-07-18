export function getProjectListLink() {
  return "/app";
}

export function getProjectBasePath() {
  return "/app/project";
}

export function getCreateProjectLink() {
  return `${getProjectBasePath()}/create`;
}

export function getProjectEditorLink(projectId: string) {
  return `${getProjectBasePath()}/${projectId}`;
}

export function getProjectPresentLink(projectId: string) {
  return `${getProjectBasePath()}/${projectId}/present`;
}

export function getProjectPresentLinkWithKeyframe(
  projectId: string,
  keyframeId: string,
) {
  return `${getProjectPresentLink(projectId)}/${keyframeId}`;
}
