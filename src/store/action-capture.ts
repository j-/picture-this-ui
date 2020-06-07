import { ThunkAction } from 'redux-thunk';
import { captureImageFromVideo } from '../capture';
import { RootReducerState } from '.';
import {
  ACTION_CAPTURE_IMAGE,
  ActionCaptureImage,
} from './actions';

type R = Promise<HTMLImageElement>
type S = RootReducerState
type E = void
type A = ActionCaptureImage

export type ActionCapture = ThunkAction<R, S, E, A>

export const capture = (video: HTMLVideoElement): ActionCapture => async (dispatch) => {
  const image = await captureImageFromVideo(video);
  dispatch<ActionCaptureImage>({
    type: ACTION_CAPTURE_IMAGE,
    data: {
      imageSrc: image.src,
    },
  });
  return image;
};
