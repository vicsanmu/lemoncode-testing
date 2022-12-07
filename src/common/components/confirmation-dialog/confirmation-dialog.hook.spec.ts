import { renderHook, act } from '@testing-library/react-hooks';
import { Lookup } from 'common/models';
import { useConfirmationDialog } from './confirmation-dialog.hook';

const emptyLookUp: Lookup = {
  id: '',
  name: '',
};

const lookUp: Lookup = {
  id: '1',
  name: 'test',
};

test('should use confirmation dialog', () => {
  const { result } = renderHook(() => useConfirmationDialog());

  expect(result.current.isOpen).toBe(false);
  expect(result.current.itemToDelete.id).toBe(emptyLookUp.id);
  expect(typeof result.current.onAccept).toBe('function');
  expect(typeof result.current.onClose).toBe('function');
  expect(typeof result.current.onOpenDialog).toBe('function');
});

test('open dialog accept and close', () => {
  const { result } = renderHook(() => useConfirmationDialog());

  act(() => {
    result.current.onOpenDialog(lookUp);
  });

  expect(result.current.itemToDelete).toBe(lookUp);
  expect(result.current.isOpen).toBe(true);

  act(() => {
    result.current.onAccept();
  });

  expect(result.current.itemToDelete.id).toBe(emptyLookUp.id);

  act(() => {
    result.current.onClose();
  });

  expect(result.current.isOpen).toBe(false);
});
