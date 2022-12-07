import React from 'react';
import { render } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('common/components/confirmation-dialog/ConfirmationDialogComponent', () => {
  it('should be render as expected passing required properties', () => {
    const props = {
      isOpen: true,
      title: 'Title Test',
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
      children: <>Children Test</>,
      onAccept: () => {},
      onClose: () => {},
    };

    const { getByText } = render(<ConfirmationDialogComponent {...props} />);

    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(props.labels.closeButton)).toBeInTheDocument();
    expect(getByText(props.labels.acceptButton)).toBeInTheDocument();
  });

  it('should not be visible the component', () => {
    const props = {
      isOpen: false,
      title: 'Title Test',
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
      children: <>Children Test</>,
      onAccept: () => {},
      onClose: () => {},
    };

    const { queryByText } = render(<ConfirmationDialogComponent {...props} />);

    expect(queryByText(props.title)).toBeNull();
    expect(queryByText(props.labels.closeButton)).toBeNull();
    expect(queryByText(props.labels.acceptButton)).toBeNull();
  });
});
