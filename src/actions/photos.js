
export const addPhotos = photos => {
    console.log("Inside addPhotos action creator", photos)

    const postPhotosObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(photos)
    }

    return (dispatch) => {
        dispatch({type: 'CREATING_PHOTOS'});

        fetch("http://127.0.0.1:3000/photos", postPhotosObj)
            .then(resp => resp.json())
            .then(photos => dispatch({
                type: 'PHOTOS_CREATED',
                payload: photos
            }))
    };
};

export function fetchPhotos(){
    return (dispatch) => {
      dispatch({ type: 'FETCHING_PHOTOS' });
        
      fetch("http://127.0.0.1:3000/photos")
        .then(response => response.json())
        .then(photos => dispatch({
          type: 'RECEIVED_PHOTOS',
          payload: photos
        }))
  };
};