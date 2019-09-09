export const getSmallDataTable = () => async (dispatch, getState, axios) => {
  const data = await axios(`/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xxxx}&address={addressObject}&description={lorem|32}`);
  dispatch({
    type: "GET_DATA",
    payload: data,
  });
};

export const getBigDataTable = () => async (dispatch, getState, axios) => {
  const data = await axios(`/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xxxx}&address={addressObject}&description={lorem|32}`);
  dispatch({
    type: "GET_DATA",
    payload: data,
  });
};

export const getPageNumber = (page) => (dispatch, getState, axios) => {
  const state = { 'page_id': page };
  const title = '';
  const url = `/?page=${page}`;
  window.history.pushState(state, title, url);
  dispatch({
    type: "GET_PAGE",
    payload: page,
  });
}

export const getSearch = (search) => async (dispatch, getState, axios) => {
  dispatch({
    type: "SEARCH",
    payload: search,
  });
};

export const popUpInfo = (popUpInfo) => async (dispatch, getState, axios) => {
  dispatch({
    type: "INFO",
    payload: popUpInfo,
  });
};
