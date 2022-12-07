import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('./pods/project-list', () => {
  const emptyProject = {
    id: '',
    name: '',
    externalId: '',
    comments: '',
    isActive: false,
    employees: [],
  };

  const projectWithEmployees: apiModel.Project = {
    id: '1',
    name: 'Test',
    externalId: '2',
    comments: 'Comment',
    isActive: false,
    employees: [
      {
        id: '1',
        isAssigned: false,
        employeeName: 'Test',
      },
    ],
  };

  const expectedProjectWithEmployees: viewModel.Project = {
    id: '1',
    name: 'Test',
    externalId: '2',
    comments: 'Comment',
    isActive: false,
    employees: [
      {
        id: '1',
        isAssigned: false,
        employeeName: 'Test',
      },
    ],
  };

  it('should return empty project when feeding undefined project', () => {
    const project = undefined;

    const result = mapProjectFromApiToVm(project);

    expect(result).toEqual(emptyProject);
  });

  it('should return empty project when feeding null project', () => {
    const project = null;

    const result = mapProjectFromApiToVm(project);

    expect(result).toEqual(emptyProject);
  });

  it('should return one item with values when passing one item with values', () => {
    const result = mapProjectFromApiToVm(projectWithEmployees);

    // Assert
    expect(result).toEqual(expectedProjectWithEmployees);
  });
});
