import { ThunkAction } from 'redux-thunk';
import { getDataURL } from '../video';
import { RootReducerState } from './index';
import { ActionSendPhotoError } from './actions';

type SendPhotoActions = (
  ActionSendPhotoError
)

interface ShareOptions {
  title?: string;
  text?: string;
  url?: string;
}

interface Navigator {
  share(options: ShareOptions): Promise<void>;
}

declare var navigator: Navigator;

export const sendPhoto = (): ThunkAction<void, RootReducerState, void, SendPhotoActions> => async (dispatch) => {
  const url = getDataURL();

  try {
    if (!url) {
      throw new Error('Video stream was not available');
    }

    if (!navigator.share) {
      throw new Error('Share function is not supported');
    }

    await navigator.share({
      title: 'Picture This!',
      url,
    });
  } catch (err) {
    dispatch<ActionSendPhotoError>({
      type: 'SendPhotoError',
      data: {
        message: err.message
      },
    });
  }
};
